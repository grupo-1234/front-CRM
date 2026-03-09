import { useEffect, useState, useContext } from 'react';
import { Search, Plus, LayoutDashboard } from 'lucide-react';
import type { Produto } from '../../models/Produto';
import type { Categoria } from '../../models/Categoria';
import { AuthContext } from '../../contexts/AuthContext';
import { atualizar, buscar } from '../../services/Service';
import CardProduto from '../../components/cards/produtos/cardProduto/Cardproduto';
import FormProduto from '../../components/cards/produtos/formProduto/FormProduto';
import DeletarProduto from '../../components/cards/produtos/deletarProduto/DeletarProduto';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [idSelecionado, setIdSelecionado] = useState<string | undefined>(undefined);
  const [produtoParaDeletar, setProdutoParaDeletar] = useState<Produto | null>(null);

  const { usuario } = useContext(AuthContext);

  const colunas = [
    { id: 'NOVO', titulo: 'Novos Leads', cor: 'bg-blue-500' },
    { id: 'CONTATO', titulo: 'Contato Realizado', cor: 'bg-purple-500' },
    { id: 'NEGOCIACAO', titulo: 'Em Negociação', cor: 'bg-amber-500' },
    { id: 'PROPOSTA', titulo: 'Proposta Enviada', cor: 'bg-indigo-500' },
    { id: 'FECHADO', titulo: 'Contrato Fechado', cor: 'bg-emerald-500' },
  ];

  async function carregarDados() {
    try {
      const token = localStorage.getItem("token");
      const header = { headers: { Authorization: token } };
      await buscar('/produtos', setProdutos, header);
      await buscar('/categoria', setCategorias, header);
    } catch (error) {
      console.error("Erro ao carregar Pipeline");
    }
  }

  async function toggleStatus(produto: Produto) {
    const token = localStorage.getItem("token");
    
    const produtoAtualizado = { 
        ...produto, 
        status: !produto.status,
        preco: Number(produto.preco),
        categoria: { id: produto.categoria?.id },
        usuario: { id: usuario.id }
    };

    try {
        await atualizar('/produtos', produtoAtualizado, () => {}, { 
            headers: { Authorization: token } 
        });
        carregarDados(); 
    } catch (error: any) {
        console.error("Erro ao mudar status:", error);
        alert("Não foi possível alterar o status do lead.");
    }
  }

  async function onDrop(e: React.DragEvent, novaColuna: string) {
  const id = e.dataTransfer.getData("produtoId");
  const produtoArrastado = produtos.find(p => p.id.toString() === id);
  
  if (produtoArrastado) {
      const descLimpa = produtoArrastado.descricao.replace(/\[.*?\]/g, '').trim();
      const produtoAtualizado = {
          ...produtoArrastado,
          descricao: `[${novaColuna}] ${descLimpa}`,
          preco: Number(produtoArrastado.preco),
          categoria: { id: produtoArrastado.categoria?.id },
          usuario: { id: usuario.id }
      };
      
      try {
        await atualizar('/produtos', produtoAtualizado, () => {}, { 
            headers: { Authorization: localStorage.getItem("token") || "" } 
        });
        carregarDados();
      } catch (error) {
        alert("Erro ao mover o lead entre colunas.");
      }
    }
  }

  useEffect(() => {
    if (usuario.token !== "") carregarDados();
  }, [usuario.token]);

  function handleEdit(id: string) {
    setIdSelecionado(id);
    setIsModalOpen(true);
  }

  function handleOpenDelete(id: string) {
    const prod = produtos.find(p => p.id.toString() === id);
    if (prod) {
      setProdutoParaDeletar(prod);
      setIsDeleteOpen(true);
    }
  }

  const leadsFiltrados = produtos.filter(p => {
      const ehMeuProduto = p.usuario?.id === usuario.id; 
      
      const nomeOk = p.nomeProduto.toLowerCase().includes(busca.toLowerCase());
      const categoriaOk = categoriaSelecionada === '' || p.categoria?.id.toString() === categoriaSelecionada;
      
      return ehMeuProduto && nomeOk && categoriaOk;
  });

  const getColuna = (descricao: string) => {
    if (!descricao || typeof descricao !== 'string') return 'NOVO';
    const match = descricao.match(/\[(.*?)\]/);
    if (match) {
      const tag = match[1].toUpperCase().trim();
      return tag;
    }
    return 'NOVO';
  };

  return (
    <div className="p-4 mt-16 bg-slate-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-[#1675F2] rounded-xl"><LayoutDashboard size={20} /></div>
            <div>
                <h1 className="text-lg font-black text-slate-800 tracking-tight uppercase leading-none">Pipeline</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-widest">
                    R$ {new Intl.NumberFormat('pt-BR').format(leadsFiltrados.reduce((acc, p) => acc + p.preco, 0))}
                </p>
            </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input 
                    type="text" placeholder="Filtrar por nome..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-100 bg-slate-50 text-xs outline-none focus:bg-white focus:border-blue-300 transition-all"
                    value={busca} onChange={(e) => setBusca(e.target.value)}
                />
            </div>

            <select 
                className="hidden md:block pl-3 pr-8 py-2 rounded-xl border border-slate-100 bg-slate-50 text-xs outline-none cursor-pointer"
                value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(e.target.value)}
            >
                <option value="">Todas Categorias</option>
                {categorias.map(cat => <option key={cat.id} value={cat.id.toString()}>{cat.nome}</option>)}
            </select>

            <button onClick={() => { setIdSelecionado(undefined); setIsModalOpen(true); }} className="bg-[#1675F2] text-white px-5 py-2 rounded-xl hover:bg-[#1464CC] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer">
                <Plus size={14} /> Novo Lead
            </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
        {colunas.map((col) => (
          <div key={col.id} className="min-w-[260px] max-w-[280px] flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${col.cor}`}></div>
                {col.titulo}
              </div>
              <span className="text-blue-400">
                R$ {new Intl.NumberFormat('pt-BR').format(leadsFiltrados.filter(p => getColuna(p.descricao) === col.id).reduce((acc, curr) => acc + curr.preco, 0))}
              </span>
            </div>

            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(e, col.id)}
              className="flex flex-col gap-3 min-h-[500px] bg-slate-200/20 p-2 rounded-2xl border border-slate-200/40"
            >
              {leadsFiltrados
                .filter(p => getColuna(p.descricao) === col.id)
                .map(p => (
                  <CardProduto 
                    key={p.id} 
                    produto={p} 
                    onEdit={handleEdit} 
                    onDelete={handleOpenDelete}
                    onToggleStatus={toggleStatus}
                  />
                ))
              }
            </div>
          </div>
        ))}
      </div>

      <FormProduto open={isModalOpen} setOpen={setIsModalOpen} id={idSelecionado} />
      {produtoParaDeletar && (
        <DeletarProduto 
          open={isDeleteOpen} setOpen={setIsDeleteOpen} 
          id={produtoParaDeletar.id.toString()} nome={produtoParaDeletar.nomeProduto} 
          aoSucesso={carregarDados} 
        />
      )}
    </div>
  );
}

export default ListaProdutos;
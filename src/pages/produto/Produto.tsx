import { useEffect, useState, useContext } from 'react';

import { Search, Filter, Plus, LayoutDashboard } from 'lucide-react';
import type { Produto } from '../../models/Produto';
import type { Categoria } from '../../models/Categoria';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import CardProduto from '../../components/cards/produtos/cardProduto/Cardproduto';
import FormProduto from '../../components/cards/produtos/formProduto/FormProduto';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idSelecionado, setIdSelecionado] = useState<string | undefined>(undefined);

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
      console.error("Erro ao carregar Pipeline:", error);
    }
  }

  useEffect(() => {
    if (usuario.token !== "") {
      carregarDados();
    }
  }, [usuario.token]);

    const leadsFiltrados = produtos.filter(p => {
    const nomeOk = p.nomeProduto.toLowerCase().includes(busca.toLowerCase());
    const categoriaOk = categoriaSelecionada === '' || p.categoria?.id.toString() === categoriaSelecionada;
    return nomeOk && categoriaOk;
  });

  const getColuna = (descricao: string) => {
    if (!descricao || typeof descricao !== 'string') return 'NOVO';
    
    const match = descricao.match(/\[(.*?)\]/);
    
    if (match) {
      const tag = match[1].toUpperCase().trim();
      const colunasValidas = ['NOVO', 'CONTATO', 'NEGOCIACAO', 'PROPOSTA', 'FECHADO'];
      return colunasValidas.includes(tag) ? tag : 'NOVO';
    }
    
    return 'NOVO';
  };

  return (
    <div className="p-8 mt-20 bg-slate-50 min-h-screen">
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-[#1675F2] rounded-2xl">
                <LayoutDashboard size={28} />
            </div>
            <div>
                <h1 className="text-2xl font-black text-slate-800 tracking-tighter uppercase leading-none text-blue-600">Pipeline</h1>
                <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-widest italic">Freelancer CRM</p>
            </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Buscar lead pelo nome..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#1675F2] text-sm transition-all"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
            </div>

            <div className="relative min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select 
                    className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#1675F2] text-sm appearance-none cursor-pointer"
                    value={categoriaSelecionada}
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}
                >
                    <option value="">Todas as Categorias</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.id.toString()}>{cat.nome}</option>
                    ))}
                </select>
            </div>

            <button 
                onClick={() => { setIdSelecionado(undefined); setIsModalOpen(true); }}
                className="bg-[#1675F2] text-white flex items-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#1464CC] transition-all shadow-lg font-bold text-sm"
            >
                <Plus size={18} /> Novo Lead
            </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {colunas.map((col) => (
          <div key={col.id} className="min-w-[320px] flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${col.cor}`}></div>
                <h2 className="font-black text-slate-600 uppercase text-xs tracking-widest">{col.titulo}</h2>
              </div>
              <span className="bg-white border border-slate-200 text-slate-500 px-2 py-0.5 rounded-lg text-[10px] font-black">
                {leadsFiltrados.filter(p => getColuna(p.descricao) === col.id).length}
              </span>
            </div>

            <div className="flex flex-col gap-4 min-h-[600px] bg-slate-100/30 p-3 rounded-[32px] border-2 border-dashed border-slate-200/50">
              {leadsFiltrados
                .filter(p => getColuna(p.descricao) === col.id)
                .map(p => (
                  <CardProduto key={p.id} produto={p} />
                ))
              }
            </div>
          </div>
        ))}
      </div>

      <FormProduto open={isModalOpen} setOpen={setIsModalOpen} id={idSelecionado} />
    </div>
  );
}

export default ListaProdutos;
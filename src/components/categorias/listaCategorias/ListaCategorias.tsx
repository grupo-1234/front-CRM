import { useEffect, useState, useContext } from 'react'; // Adicionado useContext
import type { Categoria } from '../../../models/Categoria';
import type { Produto } from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategorias/CardCategorias';
import { Plus, Search } from 'lucide-react'; 
import FormCategoria from '../formCategoria/FormCategoria';
import DeletarCategoria from '../deletarCategoria/DeletarCategoria';
import { AuthContext } from '../../../contexts/AuthContext'; // Importado AuthContext

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idSelecionado, setIdSelecionado] = useState<string | undefined>(undefined);
  const [isDeletarOpen, setIsDeletarOpen] = useState(false);
  const [idParaDeletar, setIdParaDeletar] = useState<string | undefined>(undefined);

  // CORREÇÃO: Pegando o usuário logado do contexto para usar no filtro de privacidade
  const { usuario } = useContext(AuthContext);

  function abrirNovo() {
    setIdSelecionado(undefined);
    setIsModalOpen(true);
  }

  function handleEdit(id: string) {
    setIdSelecionado(id);
    setIsModalOpen(true);
  }

  function handleDelete(id: string) {
    setIdParaDeletar(id);
    setIsDeletarOpen(true);
  }

  async function carregarDados() {
    try {
      const token = localStorage.getItem("token");
      const header = { headers: { Authorization: token } };
      
      await buscar('/categoria', setCategorias, header);
      await buscar('/produtos', setProdutos, header);
    } catch (error) {
      console.error('Erro ao buscar dados');
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  const categoriasFiltradas = categorias.filter(cat => 
    cat.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center w-full mt-24 px-4">
        <div className="container max-w-5xl flex flex-col bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden">
          
          <div className="flex flex-col md:flex-row justify-between items-center p-6 border-b border-slate-100 gap-4">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder="Filtrar categorias..."
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              />
            </div>
            
            <button
              onClick={abrirNovo}
              className="flex items-center gap-2 bg-[#1675F2] hover:bg-[#1464CC] text-white px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer"
            >
              <Plus size={18} /> Nova Categoria
            </button>
          </div>

          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div className="col-span-1 text-center">ID</div>
            <div className="col-span-3">Nome</div>
            <div className="col-span-5 text-center">Descrição</div>
            <div className="col-span-1 text-center">Serviços</div>
            <div className="col-span-2 text-right">Ações</div>
          </div>

          <div className="divide-y divide-slate-100">
            {categoriasFiltradas.map((categoria) => (
              <CardCategorias 
                key={categoria.id} 
                categoria={categoria} 
                onEdit={handleEdit}
                onDelete={handleDelete}
                // REGRA DE PRIVACIDADE: Agora 'usuario.id' está definido e o filtro funciona
                totalServicos={produtos.filter(p => 
                    p.categoria?.id === categoria.id && 
                    p.usuario?.id === usuario.id 
                ).length}
              />
            ))}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
            <span>Total: {categoriasFiltradas.length} itens</span>
          </div>
        </div>
      </div>

      <FormCategoria open={isModalOpen} setOpen={setIsModalOpen} id={idSelecionado} />
      <DeletarCategoria open={isDeletarOpen} setOpen={setIsDeletarOpen} id={idParaDeletar} />
    </>
  );
}

export default ListaCategorias;
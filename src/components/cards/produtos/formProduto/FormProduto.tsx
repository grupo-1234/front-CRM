/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useContext, type ChangeEvent, type FormEvent } from 'react';
import { X, UserPlus, Save, DollarSign } from 'lucide-react';
import type { Categoria } from '../../../../models/Categoria';
import type { Produto } from '../../../../models/Produto';
import { atualizar, buscar, cadastrar } from '../../../../services/Service';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ToastAlerta } from '../../../../utils/ToastAlert';

interface FormProdutoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id?: string;
}

function FormProduto({ open, setOpen, id }: FormProdutoProps) {
  
  const { usuario } = useContext(AuthContext); 

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [colunaSel, setColunaSel] = useState('NOVO'); 
  
  // Estado local para o texto visível da descrição (resolve o problema do espaço)
  const [descricaoLocal, setDescricaoLocal] = useState('');

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nomeProduto: '',
    descricao: '',
    preco: 0,
    status: true,
    categoria: null,
    usuario: null,
  });

  const obterDescricaoLimpa = (desc: string) => desc.replace(/\[.*?\]/g, '');

  async function carregarDados() {
    try {
      const token = localStorage.getItem("token");
      await buscar('/categoria', setCategorias, { headers: { Authorization: token } });
      
      if (id !== undefined) {
        await buscar(`/produtos/${id}`, (data: Produto) => {
          const match = data.descricao.match(/\[(.*?)\]/);
          if (match) setColunaSel(match[1].toUpperCase());
          
          const textoSemTag = obterDescricaoLimpa(data.descricao);
          setDescricaoLocal(textoSemTag);
          setProduto(data);
        }, { headers: { Authorization: token } });
      }
    } catch (error) {
      console.error("Erro ao carregar dados do formulário");
    }
  }

  useEffect(() => {
    if (open) {
      carregarDados();
    } else {
      setProduto({ id: 0, nomeProduto: '', descricao: '', preco: 0, status: true, categoria: null, usuario: null });
      setDescricaoLocal('');
      setColunaSel('NOVO');
    }
  }, [open, id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    
    if (name === 'categoria') {
        const catObj = categorias.find(c => c.id === Number(value)) || null;
        setProduto({ ...produto, categoria: catObj });
    } else if (name === 'descricao') {
        setDescricaoLocal(value);
    } else {
        setProduto({ ...produto, [name]: value });
    }
  }

  async function salvarProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    
    if (!token || !usuario.id) {
      ToastAlerta('Sessão expirada. Por favor, faça login novamente.', 'info');
      return;
    }

    const descricaoFinal = `[${colunaSel.toUpperCase()}] ${descricaoLocal.trim()}`;

    const produtoParaEnviar = {
      ...produto,
      descricao: descricaoFinal,
      preco: Number(produto.preco),
      categoria: { id: Number(produto.categoria?.id) },
      usuario: { id: usuario.id } 
    };

    try {
      if (id !== undefined) {
        await atualizar(`/produtos`, produtoParaEnviar, setProduto, { headers: { Authorization: token } });
      } else {
        const { id: _, ...novoProduto } = produtoParaEnviar;
        await cadastrar(`/produtos`, novoProduto, setProduto, { headers: { Authorization: token } });
      }
      setOpen(false);
      setTimeout(() => { window.location.reload(); }, 800);
    } catch (error: any) {
      ToastAlerta('Erro ao salvar o cliente.', 'erro');
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-[70%] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-300">
        
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-[#1675F2] rounded-lg"><UserPlus size={22} /></div>
            <h1 className="text-xl font-extrabold text-[#354C75]">
              {id === undefined ? 'Novo Lead' : 'Editar Lead'}
            </h1>
          </div>
          <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-red-500 cursor-pointer outline-none"><X size={24} /></button>
        </div>

        <form className="p-8 flex flex-col gap-6" onSubmit={salvarProduto}>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Nome do Cliente</label>
              <input 
                type="text" 
                name="nomeProduto" 
                className="text-base border-2 border-slate-200 rounded-xl p-3 focus:border-[#1675F2] outline-none transition-all" 
                value={produto.nomeProduto} 
                onChange={atualizarEstado} 
                required 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Valor Estimado (R$)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="number" 
                  name="preco" 
                  step="0.01" 
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl font-bold text-blue-600 outline-none transition-all" 
                  value={produto.preco} 
                  onChange={atualizarEstado} 
                  required 
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Categoria do Lead</label>
              <select 
                name="categoria" 
                className="text-base border-2 border-slate-200 rounded-xl p-3 outline-none bg-white cursor-pointer" 
                onChange={atualizarEstado} 
                value={produto.categoria?.id || ''} 
                required
              >
                <option value="" disabled>Selecione uma categoria...</option>
                {categorias.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.nome}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-blue-500 uppercase italic">Etapa do Pipeline</label>
              <select 
                className="text-base border-2 border-blue-100 bg-blue-50/30 rounded-xl p-3 outline-none cursor-pointer" 
                value={colunaSel} 
                onChange={(e) => setColunaSel(e.target.value)}
              >
                <option value="NOVO">Novos Leads</option>
                <option value="CONTATO">Contato Realizado</option>
                <option value="NEGOCIACAO">Em Negociação</option>
                <option value="PROPOSTA">Proposta Enviada</option>
                <option value="FECHADO">Contrato Fechado</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Anotações do Lead</label>
              <span className="text-[10px] font-bold text-slate-400">
                {descricaoLocal.length}/200
              </span>
            </div>
            <textarea 
              name="descricao" 
              maxLength={200} 
              className="text-base border-2 border-slate-200 rounded-xl p-3 h-28 resize-none outline-none focus:border-[#1675F2] transition-all" 
              value={descricaoLocal} 
              onChange={atualizarEstado} 
              required 
            />
          </div>

          <footer className="flex gap-4 mt-2">
            <button 
              type="button" 
              onClick={() => setOpen(false)} 
              className="flex-1 py-3 rounded-xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="flex-1 py-3 rounded-xl font-bold text-white bg-[#1675F2] hover:bg-[#1464CC] shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Save size={18} /> 
              {id === undefined ? 'Criar Oportunidade' : 'Atualizar Dados'}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default FormProduto;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import type { Categoria } from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { X, FolderPlus, Save } from 'lucide-react';

interface FormCategoriaProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id?: string;
}

function FormCategoria({ open, setOpen, id }: FormCategoriaProps) {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
    produto: null,
  });

  async function buscarPorId(id: string) {
    try {
      const token = localStorage.getItem("token");
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: { Authorization: token }
      });
    } catch (error) {
      console.error("Erro ao buscar categoria");
    }
  }

  useEffect(() => {
    if (id !== undefined && open) {
      buscarPorId(id);
    } else {
      setCategoria({ id: 0, nome: '', descricao: '', produto: null });
    }
  }, [id, open]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: token } };

    const categoriaParaEnviar = id !== undefined
      ? { id: categoria.id, nome: categoria.nome, descricao: categoria.descricao }
      : { nome: categoria.nome, descricao: categoria.descricao };

    try {
      if (id !== undefined) {
        await atualizar(`/categoria`, categoriaParaEnviar, setCategoria, headers);
      } else {
        await cadastrar(`/categoria`, categoriaParaEnviar, setCategoria, headers);
      }
      setOpen(false);
      window.location.reload(); 
    } catch (error: any) {
      alert('Erro ao salvar a Categoria');
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
      {/* Ajustes solicitados:
          - w-[70%]: Ocupa 70% da largura da tela
          - overflow-hidden: Remove barras de rolagem indesejadas
      */}
      <div className="w-[70%] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Cabeçalho */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-[#1675F2] rounded-lg">
                <FolderPlus size={22} />
            </div>
            <h1 className="text-xl font-extrabold text-[#354C75]">
              {id === undefined ? 'Cadastrar Nova Categoria' : 'Editar Detalhes da Categoria'}
            </h1>
          </div>
          <button 
            onClick={() => setOpen(false)} 
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <form className="p-8 flex flex-col gap-6" onSubmit={gerarNovaCategoria}>
          
          <div className="flex flex-col gap-6">
            {/* Campo Nome */}
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-xs font-black text-slate-500 uppercase tracking-widest">
                Nome da Categoria
              </label>
              <input
                type="text"
                name="nome"
                placeholder="Ex: Consultoria em TI"
                className="text-base border-2 border-slate-200 rounded-xl p-3 focus:border-[#1675F2] focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                value={categoria.nome || ''}
                onChange={atualizarEstado}
                required
              />
            </div>

            {/* Campo Descrição com limite de 255 caracteres */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label htmlFor="descricao" className="text-xs font-black text-slate-500 uppercase tracking-widest">
                  Descrição (Máx. 255 caracteres)
                </label>
                <span className={`text-xs font-bold ${(categoria.descricao?.length || 0) > 240 ? 'text-red-500' : 'text-slate-400'}`}>
                  {categoria.descricao?.length || 0}/255
                </span>
              </div>
              <textarea
                name="descricao"
                placeholder="Descreva o propósito desta categoria..."
                className="text-base border-2 border-slate-200 rounded-xl p-3 focus:border-[#1675F2] focus:ring-4 focus:ring-blue-50 outline-none transition-all h-32 resize-none"
                value={categoria.descricao || ''}
                onChange={atualizarEstado}
                maxLength={255} // Trava do HTML
                required
              />
            </div>
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
              {id === undefined ? 'Finalizar Cadastro' : 'Salvar Alterações'}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
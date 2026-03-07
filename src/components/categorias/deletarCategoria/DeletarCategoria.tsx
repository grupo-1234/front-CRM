/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { buscar, deletar } from '../../../services/Service'
import type { Categoria } from '../../../models/Categoria'
import { AlertTriangle, Trash2, X } from 'lucide-react'

interface DeletarCategoriaProps {
  open: boolean
  setOpen: (open: boolean) => void
  id?: string
}

function DeletarCategoria({ open, setOpen, id }: DeletarCategoriaProps) {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  async function buscarPorId(id: string) {
    try {
      const token = localStorage.getItem("token")
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      console.error("Erro ao buscar categoria")
    }
  }

  useEffect(() => {
    if (open && id !== undefined) {
      buscarPorId(id)
    }
  }, [open, id])

  async function deletarCategoria() {
    try {
      const token = localStorage.getItem("token")
      await deletar(`/categoria/${id}`, {
        headers: { Authorization: token }
      })
      setOpen(false)
      window.location.reload()
    } catch (error) {
      alert('Erro ao apagar a Categoria')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-[450px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-300">
        
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-red-50/50 text-red-600">
          <div className="flex items-center gap-2 font-bold">
            <AlertTriangle size={20} />
            <span>Excluir Categoria</span>
          </div>
          <button onClick={() => setOpen(false)} className="hover:bg-red-100 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 text-center">
          <p className="text-slate-600 mb-2">Você tem certeza que deseja excluir a categoria:</p>
          <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">{categoria.nome}</h3>
          <p className="mt-4 text-xs text-slate-400 italic">Essa ação não poderá ser desfeita.</p>
        </div>

        <footer className="flex gap-3 p-6 bg-slate-50 border-t border-slate-100">
          <button 
            onClick={() => setOpen(false)}
            className="flex-1 py-3 rounded-xl font-bold text-slate-500 bg-white border border-slate-200 hover:bg-slate-100 transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={deletarCategoria}
            className="flex-1 py-3 rounded-xl font-bold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-100 flex items-center justify-center gap-2 transition-all"
          >
            <Trash2 size={18} />
            Excluir Agora
          </button>
        </footer>
      </div>
    </div>
  )
}

export default DeletarCategoria
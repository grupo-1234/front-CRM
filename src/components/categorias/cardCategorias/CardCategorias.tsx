/* eslint-disable @typescript-eslint/no-explicit-any */
import { PencilLine, Trash } from 'lucide-react'
import type { Categoria } from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  totalServicos: number; // Esta é a prop correta
}

// CORREÇÃO: Você deve incluir 'totalServicos' aqui na desestruturação
function CardCategorias({ categoria, onEdit, onDelete, totalServicos }: CardCategoriaProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-slate-50 transition-colors duration-200 text-sm">
      
      {/* Lado Esquerdo: ID */}
      <div className="md:col-span-1 flex justify-center">
        <span className="font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded text-xs italic">
          #{categoria.id}
        </span>
      </div>

      {/* Nome da Categoria */}
      <div className="md:col-span-3 font-semibold text-slate-700 truncate">
        {categoria.nome}
      </div>

      {/* Descrição Centralizada */}
      <div className="md:col-span-5 text-slate-500 truncate text-center italic">
        {categoria.descricao || 'Sem descrição definida'}
      </div>

      {/* Contador de Serviços (Produtos) */}
      <div className="md:col-span-1 flex justify-center">
        <span className="bg-blue-50 text-[#1675F2] px-2.5 py-0.5 rounded-full text-xs font-bold border border-blue-100">
          {/* CORREÇÃO: Use a prop 'totalServicos' passada pelo pai */}
          {totalServicos}
        </span>
      </div>

      {/* Ações: Editar e Deletar */}
      <div className="md:col-span-2 flex justify-end gap-1">
        <button
          title="Editar"
          onClick={() => onEdit(categoria.id.toString())}
          className="p-2 text-slate-400 hover:text-[#1675F2] hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
        >
          <PencilLine size={18} />
        </button>

        <button
          title="Deletar"
          onClick={() => onDelete(categoria.id.toString())}
          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  )
}

export default CardCategorias
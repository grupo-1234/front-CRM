import { Link } from 'react-router-dom'
import type { Categoria } from '../../../models/Categoria'
import { PencilLine, Trash, FileText } from 'lucide-react'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="group flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white hover:bg-gray-50 transition-colors duration-200 rounded-lg">
      
      {/* Lado Esquerdo: ID e Nome */}
      <div className="flex items-center gap-4 flex-1">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-500 text-sm font-medium">
          {categoria.id}
        </span>
        <div>
          <h3 className="text-sm font-semibold text-gray-700">{categoria.nome}</h3>
          <p className="text-xs text-gray-400 uppercase tracking-wider">ID: {categoria.id}</p>
        </div>
      </div>

      {/* Centro: Produtos e Status */}
      <div className="flex items-center gap-6 flex-[2] justify-center">
        {/* Produtos Count */}
        <span className="text-[13px] font-medium px-3 py-0.5 bg-gray-100 rounded text-gray-600">
          {categoria.produtos?.length || 0}
        </span>

        {/* Badges de Status */}
        <div className="flex gap-2">
          {[
            { label: 'Mobile', color: 'bg-blue-500' },
            { label: 'Menu', color: 'bg-gray-400' },
            { label: 'Ativo', color: 'bg-emerald-500' }
          ].map((status) => (
            <span
              key={status.label}
              className={`px-2 py-1 text-white text-[11px] font-bold rounded-md shadow-sm ${status.color}`}
            >
              {status.label}
            </span>
          ))}
        </div>
      </div>

      {/* Lado Direito: Ações */}
      <div className="flex items-center gap-2">
        {/* Visualizar */}
        <button
          title="Visualizar"
          className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
        >
          <FileText size={16} />
        </button>

        {/* Editar */}
        <Link
          to={`/editarCategoria/${categoria.id}`}
          title="Editar"
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
        >
          <PencilLine size={16} />
        </Link>

        {/* Deletar */}
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          title="Deletar"
          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
        >
          <Trash size={16} />
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias
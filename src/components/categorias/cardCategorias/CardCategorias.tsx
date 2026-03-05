import { Link } from 'react-router-dom'
import type{ Categoria } from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className='flex flex-col justify-between overflow-hidden border rounded-2xl border-slate-900'>
      <header className='px-6 py-2 text-2xl font-bold text-white bg-indigo-800'>
        Categoria
      </header>
      
      <p className='h-full p-8 text-3xl bg-slate-200'>
        {categoria.nome}
      </p>

      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} 
          className='flex items-center justify-center w-full py-2 bg-indigo-400 text-slate-100 hover:bg-indigo-800 transition-colors duration-300'>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarCategoria/${categoria.id}`} 
          className='flex items-center justify-center w-full bg-red-400 text-slate-100 hover:bg-red-700 transition-colors duration-300'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias
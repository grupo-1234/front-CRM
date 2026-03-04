import { Link } from "react-router-dom";


function CardProduto() {

  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">

      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <h3 className="text-lg font-bold text-center uppercase">Nome do Cliente</h3>
        </div>
        <div className='p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow'>
          <h4 className='text-lg font-semibold uppercase mb-2'>Nome do Produto</h4>

          <p className='text-gray-600 text-sm mb-3 line-clamp-2'>Descrição do produto aqui</p>

          <div className='space-y-1 text-sm'>
            <p><span className='font-medium'>Preço:</span> R$ 0,00</p>
            <p><span className='font-medium'>Categoria:</span> Nome da Categoria</p>
            <p><span className='font-medium'>Responsável:</span> Nome do Usuário</p>
            <p>
              <span className='font-medium'>Status:</span>
              <span className='ml-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                Ativo
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <Link to='' className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to='' className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>

    </div>
  )

}

export default CardProduto;
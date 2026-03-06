import { Link } from "react-router-dom";
import { Trash, Pencil } from "@phosphor-icons/react";

function CardProduto() {
  return (
    <div
      className="flex bg-gray-50 
           rounded-lg shadow-sm hover:shadow-md
           transition-all duration-300 overflow-hidden
           w-64"
    >
      {/*Faixa roxa lateral*/}
      <div className="w-1 bg-[var(--color-crm-roxo)]"></div>

      <div className="p-3 flex-1 relative">

        {/*Ícones lado direito */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          
          {/* Deletar */}
          <button
            className="text-[var(--color-crm-rosa)] 
                       hover:bg-[var(--color-crm-rosa)]/10 
                       p-1 rounded-full transition-all"
          >
            <Trash size={16} weight="bold" />
          </button>

          {/* Editar */}
          <Link
            to=""
            className="text-[var(--color-crm-azul)] 
                       hover:bg-[var(--color-crm-azul)]/10 
                       p-1 rounded-full transition-all"
          >
            <Pencil size={16} weight="bold" />
          </Link>

        </div>

        <h3 className="text-sm font-semibold 
                       text-[var(--color-crm-preto)] 
                       mb-1 pr-8 leading-tight">
          Nome do Produto
        </h3>

        <p className="text-[11px] text-gray-500 mb-2 line-clamp-2">
          Descrição do produto aqui
        </p>

        <div className="text-[11px] text-[var(--color-crm-preto)]/70 space-y-0.5">
          <p>Cliente: Nome do Cliente</p>
          <p>Preço: R$ 0,00</p>
        </div>

      </div>
    </div>
  );
}

export default CardProduto;
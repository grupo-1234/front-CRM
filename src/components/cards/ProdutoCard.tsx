import { Link } from "react-router-dom";

function CardProduto() {
  return (
    <div className="border border-[var(--color-crm-roxo)]/20 bg-[var(--color-crm-branco)] 
                    flex flex-col rounded-2xl overflow-hidden justify-between 
                    shadow-sm hover:shadow-lg transition-all duration-300">

      <div>
        {/* Header */}
        <div className="flex w-full bg-[var(--color-crm-roxo)] py-3 px-4 items-center">
          <h3 className="text-lg font-bold text-white uppercase tracking-wide">
            Nome do Cliente
          </h3>
        </div>

        {/* Conteúdo */}
        <div className="p-5">
          <h4 className="text-lg font-semibold uppercase mb-2 
                         text-[var(--color-crm-preto)]">
            Nome do Produto
          </h4>

          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            Descrição do produto aqui
          </p>

          <div className="space-y-2 text-sm text-[var(--color-crm-preto)]/80">
            <p>
              <span className="font-medium">Preço:</span> R$ 0,00
            </p>

            <p>
              <span className="font-medium">Categoria:</span> Nome da Categoria
            </p>

            <p>
              <span className="font-medium">Responsável:</span> Nome do Usuário
            </p>

            <p className="flex items-center gap-2">
              <span className="font-medium">Status:</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold
                               bg-[var(--color-crm-amarelo)] 
                               text-[var(--color-crm-preto)]">
                Ativo
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex border-t border-[var(--color-crm-roxo)]/10">
        <Link
          to=""
          className="w-full text-white bg-[var(--color-crm-azul)] 
                     hover:bg-[var(--color-crm-roxo)] 
                     flex items-center justify-center py-3 
                     transition-colors duration-300"
        >
          Editar
        </Link>

        <Link
          to=""
          className="w-full text-white bg-[var(--color-crm-rosa)] 
                     hover:brightness-90 
                     flex items-center justify-center py-3 
                     transition-all duration-300"
        >
          Deletar
        </Link>
      </div>

    </div>
  );
}

export default CardProduto;
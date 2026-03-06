import CardNegociacao from "./CardNegociacao"
import type { Negociacao } from "../types/Negociacao"

interface Props {
  titulo: string
  negociacoes: Negociacao[]
  onDelete: (id: string) => void
  onEdit: (n: Negociacao) => void
}

export default function ColunaFunil({
  titulo,
  negociacoes,
  onDelete,
  onEdit
}: Props) {

  const total = negociacoes.reduce(
    (acc, n) => acc + n.valor,
    0
  )

  return (

    <div className="bg-gray-100 rounded-lg p-4 min-w-[260px">

      <div className="flex justify-between mb-3">

        <h2 className="text-sm font-semibold">
          {titulo} ({negociacoes.length})
        </h2>

        <span className="text-xs text-gray-500">
          R$ {total}
        </span>

      </div>

      <div className="flex flex-col gap-3 main-w[250px]">

        {negociacoes.map(n => (

          <CardNegociacao
            key={n.id}
            negociacao={n}
            onDelete={onDelete}
            onEdit={onEdit}
          />

        ))}

      </div>

    </div>

  )

}
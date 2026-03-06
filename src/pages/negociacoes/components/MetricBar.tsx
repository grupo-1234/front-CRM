import type { Negociacao } from "../types/Negociacao"

export default function MetricsBar({

  negociacoes

}: { negociacoes: Negociacao[] }) {

  const total = negociacoes.reduce(
    (acc, n) => acc + n.valor,
    0
  )

  const ticket = total / negociacoes.length

  return (

    <div className="grid grid-cols-3 gap-4 mb-6">

      <div className="bg-white p-4 shadow rounded">

        Negociações

        <h2 className="font-bold">

          {negociacoes.length}

        </h2>

      </div>

      <div className="bg-white p-4 shadow rounded">

        Pipeline total

        <h2 className="font-bold">

          R$ {total}

        </h2>

      </div>

      <div className="bg-white p-4 shadow rounded">

        Ticket médio

        <h2 className="font-bold">

          R$ {ticket.toFixed(2)}

        </h2>

      </div>

    </div>

  )

}
type Props = {
  onCriar: () => void
}

export default function BarraFiltros({ onCriar }: Props) {
  return (

    <div className="flex items-center gap-6 mb-6 bg-white p-4 rounded-lg shadow-sm border border-blue-200 w-full">

      <span className="font-semibold text-blue-600">
        Filtros
      </span>

      <select className="min-w-[180px] border border-blue-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300">
        <option>Funil de vendas</option>
      </select>

      <select className="min-w-[200px] border border-blue-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300">
        <option>Todas negociações</option>
      </select>

      <select className="min-w-[140px] border border-blue-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300">
        <option>Status</option>
      </select>

      <select className="min-w-[140px] border border-blue-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300">
        <option>Ordenar</option>
      </select>

      <button
        onClick={onCriar}
        className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Nova negociação
      </button>

    </div>

  )
}
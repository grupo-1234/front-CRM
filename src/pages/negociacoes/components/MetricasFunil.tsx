export default function BarraFiltros() {

  return (

    <div className="bg-white border rounded-lg p-4 flex items-center gap-4 flex-wrap">

      <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded">
        ☰
      </button>

      <span className="text-sm font-medium text-gray-700">
        Priorizar negociações
      </span>

      <select className="border rounded-md px-3 py-2 text-sm">
        <option>Funil de Vendas</option>
      </select>

      <select className="border rounded-md px-3 py-2 text-sm">
        <option>Todas negociações</option>
      </select>

      <select className="border rounded-md px-3 py-2 text-sm">
        <option>Todos os status</option>
      </select>

    </div>

  )
}
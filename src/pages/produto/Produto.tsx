;export default function Produtos() {

  const servicos = [
    {
      id: 1,
      nome: "Consultoria CRM",
      descricao: "Implantação e estratégia de CRM para empresas",
      preco: "R$ 1.200"
    },
    {
      id: 2,
      nome: "Automação de Vendas",
      descricao: "Automação de processos comerciais e funil de vendas",
      preco: "R$ 900"
    },
    {
      id: 3,
      nome: "Integração de Sistemas",
      descricao: "Integração do CRM com sistemas externos",
      preco: "R$ 1.500"
    }
  ]

  return (

    <div className="min-h-screen bg-gray-50 p-10">

      <h1 className="text-3xl font-bold mb-10 text-gray-800">
        Serviços
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {servicos.map(servico => (

          <div
            key={servico.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >

            <h2 className="text-xl font-semibold mb-2">
              {servico.nome}
            </h2>

            <p className="text-gray-600 mb-4">
              {servico.descricao}
            </p>

            <p className="font-bold text-blue-600 mb-4">
              {servico.preco}
            </p>

            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Ver detalhes
            </button>

          </div>

        ))}

      </div>

    </div>

  )

}
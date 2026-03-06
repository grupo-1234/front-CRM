function Recursos() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1B18] mb-4">
            Tudo que você precisa para gerir seu negócio
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Um CRM completo para freelancers e desenvolvedores organizarem
            clientes, projetos e finanças em um único lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border-2 border-blue-500 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">
              Gestão de Clientes
            </h3>

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Cadastre e organize todos os seus clientes</li>
              <li>Acompanhe histórico de contatos</li>
              <li>Visualize status de cada oportunidade</li>
              <li>E muito mais</li>
            </ul>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Conhecer recurso
            </button>
          </div>

          <div className="border-2 border-pink-500 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">
              Gestão de Projetos
            </h3>

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Organize contratos e demandas</li>
              <li>Defina prazos e prioridades</li>
              <li>Acompanhe andamento das entregas</li>
              <li>E muito mais</li>
            </ul>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Conhecer recurso
            </button>
          </div>

          <div className="border-2 border-yellow-400 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">
              Gestão Financeira
            </h3>

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Controle valores a receber</li>
              <li>Visualize ganhos por cliente</li>
              <li>Organize pagamentos pendentes</li>
              <li>E muito mais</li>
            </ul>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Conhecer recurso
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Recursos
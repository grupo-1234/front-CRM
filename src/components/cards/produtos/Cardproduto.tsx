function Cardproduto() {
  return (
    <section className="bg-[var(--color-crm-branco)] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-crm-preto)] mb-4">
            Entenda as soluções do conecta
            <span className="text-[var(--color-crm-azul)]">crm</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Organize seus clientes, projetos e vendas em um só lugar e tenha
            controle total do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[var(--color-crm-branco)] p-8 rounded-2xl border-2 border-[var(--color-crm-azul)] hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[var(--color-crm-preto)] mb-6">
              Gestão de Clientes
            </h3>

            <ul className="space-y-4 text-gray-600 mb-8">
              <li>Cadastre e organize todos os seus clientes</li>
              <li>Acompanhe histórico de contatos</li>
              <li>Visualize status de cada oportunidade</li>
              <li>E muito mais</li>
            </ul>

            <button className="w-full py-3 rounded-xl font-semibold text-white bg-[var(--color-crm-azul)] hover:opacity-90 transition">
              Conhecer recurso
            </button>
          </div>

          <div className="bg-[var(--color-crm-branco)] p-8 rounded-2xl border-2 border-[var(--color-crm-rosa)] hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[var(--color-crm-preto)] mb-6">
              Gestão de Projetos
            </h3>

            <ul className="space-y-4 text-gray-600 mb-8">
              <li>Organize contratos e demandas</li>
              <li>Defina prazos e prioridades</li>
              <li>Acompanhe andamento das entregas</li>
              <li>E muito mais</li>
            </ul>

            <button className="w-full py-3 rounded-xl font-semibold text-white bg-[var(--color-crm-azul)] hover:opacity-90 transition">
              Conhecer recurso
            </button>
          </div>

          <div className="bg-[var(--color-crm-branco)] p-8 rounded-2xl border-2 border-[var(--color-crm-amarelo)] hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[var(--color-crm-preto)] mb-6">
              Gestão Financeira
            </h3>

            <ul className="space-y-4 text-gray-600 mb-8">
              <li>Controle valores a receber</li>
              <li>Visualize ganhos por cliente</li>
              <li>Organize pagamentos pendentes</li>
              <li>E muito mais</li>
            </ul>

            <button className="w-full py-3 rounded-xl font-semibold text-white bg-[var(--color-crm-azul)] hover:opacity-90 transition">
              Conhecer recurso
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Cardproduto;
import CardPlanos from "../components/cards/planos/CardPlanos"

export default function Planos() {
  return (
    <div className="w-full min-h-[80vh] bg-gray-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            Escolha seu Plano
          </h1>

          <p className="text-gray-500 mt-4">
            Organize clientes, negociações e projetos em um único CRM
            feito para desenvolvedores freelancers.
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-wrap justify-center gap-12">

          <CardPlanos
            titulo="Junior"
            preco="R$97,99"
            vantagens={[
              "Gestão de até 10 clientes",
              "Controle de tarefas e atividades",
              "Pipeline básico de negociações",
              "Registro de valores de projetos"
            ]}
            desvantagens={[
              "Relatórios avançados",
              "Automação de follow-up",
              "Integrações externas",
              "Dashboard de receita"
            ]}
            cor="bg-crm-roxo"
          />

          <CardPlanos
            titulo="Pleno"
            preco="R$197,99"
            vantagens={[
              "Gestão ilimitada de clientes",
              "Pipeline completo de negociações",
              "Controle de valores e contratos",
              "Relatórios de faturamento",
              "Histórico de interações com clientes"
            ]}
            desvantagens={[
              "Automação avançada",
              "Integrações com ferramentas externas"
            ]}
            cor="bg-crm-azul"
          />

          <CardPlanos
            titulo="Senior"
            preco="R$297,99"
            vantagens={[
              "Clientes e negociações ilimitados",
              "Automação de follow-up com leads",
              "Dashboard avançado de receita",
              "Relatórios estratégicos",
              "Integração com ferramentas externas",
              "Gestão de múltiplos projetos"
            ]}
            cor="bg-crm-rosa"
          />

        </div>

      </div>

    </div>
  )
}
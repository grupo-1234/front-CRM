function Planos() {
  return (
    <section className="bg-[#FBFAFF py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1B18] mb-4">
            Planos simples e transparentes
          </h2>

          <p className="text-gray-600">
            Escolha o plano ideal para organizar seus clientes e projetos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

   
          <div className="border rounded-2xl p-8 bg-white shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Free</h3>

            <p className="text-4xl font-bold mb-6">
              R$0
              <span className="text-gray-500 text-base">/mês</span>
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Até 10 clientes</li>
              <li>✔ Gestão de negociações</li>
              <li>✔ Pipeline de vendas</li>
              <li>✔ Dashboard básico</li>
            </ul>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Começar
            </button>
          </div>

    
          <div className="border-2 border-blue-600 rounded-2xl p-8 bg-white shadow-xl relative">

            <span className="absolute top-4 right-4 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
              Mais popular
            </span>

            <h3 className="text-xl font-bold mb-2">Pro</h3>

            <p className="text-4xl font-bold mb-6">
              R$29
              <span className="text-gray-500 text-base">/mês</span>
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Clientes ilimitados</li>
              <li>✔ Funil de vendas avançado</li>
              <li>✔ Relatórios completos</li>
              <li>✔ Integrações</li>
              <li>✔ Suporte prioritário</li>
            </ul>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Começar teste grátis
            </button>
          </div>

    
          <div className="border rounded-2xl p-8 bg-white shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Business</h3>

            <p className="text-4xl font-bold mb-6">
              R$79
              <span className="text-gray-500 text-base">/mês</span>
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Tudo do plano Pro</li>
              <li>✔ Gestão de equipe</li>
              <li>✔ Automação de vendas</li>
              <li>✔ API e integrações</li>
            </ul>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Começar
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Planos;
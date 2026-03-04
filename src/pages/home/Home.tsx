import { Code, Folder, CaretRight, Check } from "@phosphor-icons/react";

function Home() {
  return (
    <section className="bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#354C75] leading-tight mb-6">
            O CRM ideal para
            <span className="block text-[#5C7297]">
              freelancers desenvolvedores
            </span>
          </h1>

          <p className="text-[#5C7297] text-lg mb-10 max-w-xl">
            Organize clientes, contratos, projetos e pagamentos em um só lugar.
            Tenha controle total do seu negócio como dev freelancer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-[#354C75] hover:bg-[#2d4064] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
              Começar gratuitamente
              <CaretRight size={20} weight="bold" />
            </button>

            <button className="border border-[#354C75] text-[#354C75] px-8 py-4 rounded-xl font-semibold hover:bg-[#D0E3FF] transition">
              Ver demonstração
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-[#5C7297]">
            <div className="flex items-center gap-2">
              <Check size={18} weight="bold" />
              Controle de clientes
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} weight="bold" />
              Gestão de contratos
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} weight="bold" />
              Relatórios financeiros
            </div>
          </div>
        </div>

        {/* Card Dashboard */}
        <div className="bg-[#D0E3FF] rounded-3xl p-10 shadow-xl">
          <div className="bg-white rounded-2xl p-6 shadow-md space-y-6">

            <div className="flex items-center gap-4">
              <div className="bg-[#A9BDDC] p-3 rounded-lg">
                <Code size={22} weight="duotone" className="text-[#354C75]" />
              </div>
              <div>
                <p className="text-sm text-[#5C7297]">Projetos Ativos</p>
                <p className="text-2xl font-bold text-[#354C75]">12</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#A9BDDC] p-3 rounded-lg">
                <Folder size={22} weight="duotone" className="text-[#354C75]" />
              </div>
              <div>
                <p className="text-sm text-[#5C7297]">Clientes</p>
                <p className="text-2xl font-bold text-[#354C75]">8</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
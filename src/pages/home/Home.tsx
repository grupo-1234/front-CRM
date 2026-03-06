import { CaretRight, Check } from "@phosphor-icons/react";

import pessoas from "../../assets/pessoas.png";

function Home() {
  return (
    <section className="bg-[#FBFAFF pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1E1B18] leading-tight mb-6">
            O CRM ideal para
            <span className="block text-[#2563EB]">
              freelancers desenvolvedores
            </span>
          </h1>

          <p className="text-gray-700 text-lg mb-10 max-w-xl">
            Organize clientes, contratos, projetos e pagamentos em um só lugar.
            Tenha controle total do seu negócio como dev freelancer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">

            <button
              className="bg-gradient-to-r from-[#2563EB] to-[#EC4899]
              hover:from-[#1D4ED8] hover:to-[#DB2777]
              text-white px-8 py-4 rounded-xl font-semibold
              flex items-center justify-center gap-2
              transition-all duration-300
              shadow-lg hover:shadow-2xl
              hover:-translate-y-1 hover:scale-105"
            >
              Começar gratuitamente
              <CaretRight size={20} weight="bold" />
            </button>

            <button
              className="border-2 border-[#2563EB] text-[#2563EB]
              px-8 py-4 rounded-xl font-semibold
              transition-all duration-300
              hover:bg-[#2563EB] hover:text-white
              hover:shadow-xl hover:-translate-y-1 hover:scale-105"
            >
              Ver demonstração
            </button>

          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-700">

            <div className="flex items-center gap-2">
              <Check size={18} weight="bold" className="text-[#2563EB]" />
              Controle de clientes
            </div>

            <div className="flex items-center gap-2">
              <Check size={18} weight="bold" className="text-[#EC4899]" />
              Gestão de contratos
            </div>

            <div className="flex items-center gap-2">
              <Check size={18} weight="bold" className="text-[#FACC15]" />
              Relatórios financeiros
            </div>

          </div>
        </div>

        <div className="flex justify-end">
          <img
            src={pessoas}
            alt="Pessoas usando o CRM"
            className="w-full max-w-2xl rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
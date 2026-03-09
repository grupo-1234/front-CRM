
import { CaretRight, Check } from "@phosphor-icons/react";
import pessoas from "../../assets/pessoas.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-[#FBFAFF] pt-32 pb-24">
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
                  <Link 
              to="/login"
              className="bg-[#1675F2] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1464CC] transition-all shadow-lg"
          >
              Começar Gratuitamente
          </Link>

            <a 
                href="https://www.youtube.com/seu-link-aqui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-[#1675F2] border-2 border-[#1675F2] px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all"
            >
                Ver Demonstração
            </a>
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
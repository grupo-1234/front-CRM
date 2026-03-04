import { GithubLogo, LinkedinLogo, EnvelopeSimple, CurrencyEth } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-[#FBFAFF] text-[#2B2823] pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-14 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CurrencyEth size={28} weight="fill" className="text-[#EC4899]" />
              <h2 className="text-2xl font-bold">
                conecta<span className="text-[#1675F2]">crm</span>
              </h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              O CRM ideal para freelancers desenvolvedores organizarem
              clientes, contratos e projetos com eficiência.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-[#1675F2] cursor-pointer transition">
                Funcionalidades
              </li>
              <li className="hover:text-[#1675F2] cursor-pointer transition">
                Planos
              </li>
              <li className="hover:text-[#1675F2] cursor-pointer transition">
                Demonstração
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-[#1675F2] cursor-pointer transition">
                Sobre
              </li>
              <li className="hover:text-[#1675F2] cursor-pointer transition">
                Contato
              </li>
              <li className="hover:text-[#1675F2] cursor-pointer transition">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes</h3>
            <div className="flex gap-5">
              <GithubLogo
                size={22}
                className="text-gray-600 hover:text-[#1675F2] cursor-pointer transition"
              />
              <LinkedinLogo
                size={22}
                className="text-gray-600 hover:text-[#1675F2] cursor-pointer transition"
              />
              <EnvelopeSimple
                size={22}
                className="text-gray-600 hover:text-[#1675F2] cursor-pointer transition"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} conectaCRM. Todos os direitos reservados.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-[#1675F2] cursor-pointer transition">
              Política de Privacidade
            </span>
            <span className="hover:text-[#1675F2] cursor-pointer transition">
              Termos de Uso
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
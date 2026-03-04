import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-[#354C75] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-[#5C7297]">

          {/* Logo + descrição */}
          <div>
            <h2 className="text-2xl font-bold mb-4">conectaCRM</h2>
            <p className="text-[#D0E3FF] text-sm leading-relaxed">
              O CRM ideal para freelancers desenvolvedores organizarem
              clientes, contratos e projetos com eficiência.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-[#D0E3FF] text-sm">
              <li className="hover:text-white cursor-pointer">Funcionalidades</li>
              <li className="hover:text-white cursor-pointer">Planos</li>
              <li className="hover:text-white cursor-pointer">Demonstração</li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-[#D0E3FF] text-sm">
              <li className="hover:text-white cursor-pointer">Sobre</li>
              <li className="hover:text-white cursor-pointer">Contato</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Redes</h3>
            <div className="flex gap-4">
              <GithubLogo size={22} className="text-[#D0E3FF] hover:text-white cursor-pointer transition" />
              <LinkedinLogo size={22} className="text-[#D0E3FF] hover:text-white cursor-pointer transition" />
              <EnvelopeSimple size={22} className="text-[#D0E3FF] hover:text-white cursor-pointer transition" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#A9BDDC]">
          <p>© {new Date().getFullYear()} conectaCRM. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-white cursor-pointer">Termos de Uso</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
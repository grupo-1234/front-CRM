import { useState } from "react";
import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

interface NavbarProps {
  onOpenModal?: (titulo: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#354C75] text-[#D0E3FF] w-full fixed top-0 z-50 left-0 border-b border-[#5C7297]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-2xl font-bold tracking-tight hover:text-white transition"
            >
              conectaCRM
            </Link>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm font-semibold">
              <li className="hover:text-white transition">
                <a href="#produto">Produto</a>
              </li>
              <li className="hover:text-white transition">
                <a href="#recursos">Recursos</a>
              </li>
              <li className="hover:text-white transition">
                <a href="#precos">Preços</a>
              </li>
              <li className="hover:text-white transition">
                <a href="#integracoes">Integrações</a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5C7297] transition">
              Fazer login
            </button>

            <button
              onClick={() => onOpenModal?.("Teste grátis")}
              className="bg-[#D0E3FF] hover:bg-[#A9BDDC] text-[#354C75] px-6 py-2.5 rounded-full text-sm font-semibold transition"
            >
              Teste grátis
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X size={26} weight="bold" />
              ) : (
                <List size={26} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden bg-[#354C75] transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100 py-6"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-semibold">
          <li>
            <a href="#produto" onClick={closeMenu} className="hover:text-white transition">
              Produto
            </a>
          </li>
          <li>
            <a href="#recursos" onClick={closeMenu} className="hover:text-white transition">
              Recursos
            </a>
          </li>
          <li>
            <a href="#precos" onClick={closeMenu} className="hover:text-white transition">
              Preços
            </a>
          </li>
          <li>
            <a href="#integracoes" onClick={closeMenu} className="hover:text-white transition">
              Integrações
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                onOpenModal?.("Teste grátis");
                closeMenu();
              }}
              className="bg-[#D0E3FF] text-[#354C75] px-6 py-3 rounded-full font-semibold hover:bg-[#A9BDDC] transition"
            >
              Teste grátis
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
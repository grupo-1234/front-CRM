import { useState } from "react";
import { Link } from "react-router-dom";
import { List, X, CurrencyEth } from "@phosphor-icons/react";

interface NavbarProps {
  onOpenModal?: (titulo: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#FBFAFF] text-[#2B2823] w-full fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-80 transition"
        >
          <CurrencyEth size={28} weight="fill" className="text-[#EC4899]" />
          <span>
            conecta<span className="text-[#1675F2]">crm</span>
          </span>
        </Link>
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
            <a href="#produto" className="hover:text-[#1675F2] transition">
              Produto
            </a>
            <a href="#segmentos" className="hover:text-[#1675F2] transition">
              Segmentos
            </a>
            <a href="#planos" className="hover:text-[#1675F2] transition">
              Planos
            </a>
            <a href="#recursos" className="hover:text-[#1675F2] transition">
              Recursos
            </a>
            <a href="#contato" className="hover:text-[#1675F2] transition">
              Contato
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-semibold hover:text-[#1675F2] transition">
              Entrar
            </button>

            <button
              onClick={() => onOpenModal?.("Teste grátis")}
              className="bg-[#1675F2] hover:bg-[#148DD9] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition"
            >
              Teste Grátis
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden bg-[#FBFAFF] border-t transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100 py-6"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 font-medium">
          <a href="#produto" onClick={closeMenu}>Produto</a>
          <a href="#segmentos" onClick={closeMenu}>Segmentos</a>
          <a href="#planos" onClick={closeMenu}>Planos</a>
          <a href="#recursos" onClick={closeMenu}>Recursos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>

          <button
            onClick={() => {
              onOpenModal?.("Teste grátis");
              closeMenu();
            }}
            className="bg-[#1675F2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#148DD9] transition"
          >
            Teste Grátis
          </button>
        </div>
      </div>
    </nav>
  );
}
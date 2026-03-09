import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { List, X, CurrencyEth, SignOut } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";

interface NavbarProps {
  onOpenModal?: (titulo: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navegarProtegido = (destino: string) => {
    closeMenu();
    if (usuario.token === "") {
      navigate("/login");
    } else {
      navigate(destino);
    }
  };

  function logout() {
    handleLogout();
    closeMenu();
    navigate("/login");
  }

  return (
    <nav className="bg-[#FBFAFF] text-[#2B2823] w-full fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          <Link
            to="/home"
            onClick={closeMenu}
            className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-80 transition"
          >
            <CurrencyEth size={28} weight="fill" className="text-[#EC4899]" />
            <span>
              conecta<span className="text-[#1675F2]">crm</span>
            </span>
          </Link>

          {/*MENU DESKTOP*/}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
            <Link to="/home" className="hover:text-[#1675F2] transition">Home</Link>
            <Link to="/planos" className="hover:text-[#1675F2] transition">Planos</Link>
            <Link to="/contato" className="hover:text-[#1675F2] transition">Contato</Link>

            <button
              onClick={() => navegarProtegido("/produtos")}
              className="hover:text-[#1675F2] transition"
            >
              Produtos
            </button>

            <button
              onClick={() => navegarProtegido("/categoria")}
              className="hover:text-[#1675F2] transition"
            >
              Categorias
            </button>
          </div>

          {/*PERFIL / LOGIN*/}
          <div className="hidden lg:flex items-center gap-4">
            {usuario.token !== "" ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/perfil"
                  className="flex items-center gap-3 bg-white border border-gray-200 py-1.5 pl-2 pr-4 rounded-full shadow-sm hover:border-[#1675F2] transition-all"
                >
                  <img
                    src={usuario.foto || "https://ik.imagekit.io/dvkwsy8r1/user.png"}
                    alt={usuario.nome}
                    className="w-8 h-8 rounded-full object-cover border border-[#1675F2]"
                  />

                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-none">
                      {usuario.nome.split(" ")[0]}
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">
                      {usuario.perfil}
                    </span>
                  </div>
                </Link>

                <button
                  title="Sair"
                  onClick={logout}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <SignOut size={24} weight="bold" />
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-semibold hover:text-[#1675F2] transition"
                >
                  Entrar
                </Link>

                <Link
                  to="/cadastro"
                  className="bg-[#1675F2] hover:bg-[#148DD9] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition"
                >
                  Teste Grátis
                </Link>
              </>
            )}
          </div>

          {/*BOTÃO MOBILE*/}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {/*MENU MOBILE*/}
      <div
        className={`lg:hidden bg-[#FBFAFF] border-t transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 font-medium">
          <Link to="/home" onClick={closeMenu}>Home</Link>
          <Link to="/planos" onClick={closeMenu}>Planos</Link>
          <Link to="/contato" onClick={closeMenu}>Contato</Link>

          <button onClick={() => navegarProtegido("/produtos")}>Produtos</button>
          <button onClick={() => navegarProtegido("/categoria")}>Categorias</button>
          <button onClick={() => navegarProtegido("/recursos")}>Recursos</button>

          {usuario.token !== "" ? (
            <>
              <Link
                to="/perfil"
                onClick={closeMenu}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={usuario.foto || "https://ik.imagekit.io/dvkwsy8r1/user.png"}
                  className="w-12 h-12 rounded-full border border-[#1675F2]"
                />
                <span className="font-bold">{usuario.nome}</span>
              </Link>

              <button onClick={logout} className="text-red-500 font-bold">
                Sair da Conta
              </button>
            </>
          ) : (
            <Link to="/login" onClick={closeMenu}>Entrar</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
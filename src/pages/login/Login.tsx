import { useContext, useEffect, useState, type ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import type { UsuarioLogin } from '../../models/UsuarioLogin';

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  } as UsuarioLogin);

  useEffect(() => {

    if (usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-white font-sans mt-10">
      
      <div className="hidden lg:flex lg:w-3/5 flex-col justify-center p-20 relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="relative z-20">
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Gerencie seus clientes com <span className="text-indigo-400">inteligência</span>.
          </h1>
          <p className="text-2xl text-slate-300 font-light max-w-xl">
            A plataforma definitiva para transformar contatos em contratos fechados com organização e velocidade.
          </p>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
               <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-indigo-500 flex items-center justify-center text-xs">JS</div>
               <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-emerald-500 flex items-center justify-center text-xs">ML</div>
               <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-amber-500 flex items-center justify-center text-xs">+10</div>
            </div>
            <p className="text-sm text-slate-400">Junte-se a milhares de consultores de alta performance.</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center p-8 lg:p-16 bg-slate-50">
        <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Bem-vindo de volta</h2>
            <p className="text-slate-500">Acesse sua conta para gerenciar seus negócios.</p>
          </div>

          <form className="space-y-6" onSubmit={login}>
            <div className="space-y-2">
              <label htmlFor="usuario" className="text-sm font-semibold text-slate-700 ml-1">E-mail Corporativo</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="nome@empresa.com"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-slate-900"
                value={usuarioLogin.usuario}
                onChange={atualizarEstado}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label htmlFor="senha" className="text-sm font-semibold text-slate-700">Senha</label>
                <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors">Esqueceu a senha?</a>
              </div>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="••••••••"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-slate-900"
                value={usuarioLogin.senha}
                onChange={atualizarEstado}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-[#1675F2] hover:bg-[#148DD9] text-white font-bold rounded-full shadow-lg shadow-indigo-200 
              transition-all transform active:scale-[0.98] flex justify-center items-center disabled:opacity-70"
            >
              {isLoading ? (
              <div className="flex items-center justify-center h-5">
                <RotatingLines strokeColor="white" strokeWidth="5" width="20" visible={true} />
              </div>
            ) : (
              "Entrar no Painel"
            )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              Não tem acesso?{' '}
              <Link to="/cadastro" className="text-indigo-600 font-bold hover:underline">
                Criar conta gratuita
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
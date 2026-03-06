import {  useEffect, useState, type ChangeEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import type { Usuario } from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'


function Cadastro() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmarSenha, setConfirmarSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: 'https://i.imgur.com/8RK9k6u.png',
    perfil: ''
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      navigate('/login')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true)
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }
    } else {
      alert('Dados inconsistentes. Verifique a senha.')
    }
    setIsLoading(false)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4 mt-10">
      <div className="w-full max-w-lg bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Criar Conta CRM</h2>
        
        <form onSubmit={cadastrar} className="space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500"
            value={usuario.nome}
            onChange={atualizarEstado}
          />
          <input
            type="text"
            name="usuario"
            placeholder="E-mail (usuário)"
            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500"
            value={usuario.usuario}
            onChange={atualizarEstado}
          />
          <div className="flex flex-col w-full">
          <label htmlFor="foto" className="text-sm font-semibold text-slate-700 ml-1">URL da Foto</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Link da sua foto de perfil"
            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 transition-all"
            value={usuario.foto}
            onChange={atualizarEstado}
          />
          </div>
          <div className="flex flex-col w-full">
          <label htmlFor="perfil" className="text-sm font-semibold text-slate-700 ml-1">Área de Atuação</label>
          <select
              id="perfil"
              name="perfil"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 transition-all appearance-none"
              value={usuario.perfil}
              onChange={atualizarEstado}
              required
          >
              <option value="" disabled>Selecione sua área</option>
              <option value="Desenvolvedor FrontEnd">Desenvolvedor FrontEnd</option>
              <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
              <option value="FullStack">FullStack</option>
              <option value="UX/UI Design">UX/UI Design</option>
              <option value="Mobile Developer">Mobile Developer</option>
          </select>
          </div>
          <input
            type="password"
            name="senha"
            placeholder="Senha (mínimo 8 caracteres)"
            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500"
            value={usuario.senha}
            onChange={atualizarEstado}
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          
          <button
            type="submit"
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all flex justify-center"
          >
            {isLoading ? <RotatingLines strokeColor="white" width="24" /> : "Finalizar Cadastro"}
          </button>
        </form>

        <p className="mt-6 text-center text-slate-600 text-sm">
          Já possui uma conta?{' '}
          <Link to="/login" className="text-indigo-600 font-bold hover:underline">
            Entrar agora
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Cadastro
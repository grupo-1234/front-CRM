import { createContext, useState, type ReactNode } from "react"
import { login } from "../services/Service"
import type { UsuarioLogin } from "../models/UsuarioLogin"

// 1. Definição do que o Contexto vai "entregar" para a aplicação
interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

// 2. Definição do tipo de componente que vai envolver a App
interface AuthProviderProps {
    children: ReactNode
}

// 3. Criação do Contexto propriamente dito
export const AuthContext = createContext({} as AuthContextProps)

// 4. Implementação do Provider (O Provedor de Dados)
export function AuthProvider({ children }: AuthProviderProps) {

    // Estado que guarda as informações do utilizador logado
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    // Estado para controlar o feedback visual de carregamento
    const [isLoading, setIsLoading] = useState(false)

    // Função para realizar o login
    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            // Chamada ao serviço que configurámos com o link do Render
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            alert("Utilizador autenticado com sucesso!")
        } catch (error) {
            alert("Dados do utilizador inconsistentes!")
        }
        setIsLoading(false)
    }

    // Função para limpar os dados (Sair do sistema)
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
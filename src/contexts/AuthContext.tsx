import { createContext, useState, type ReactNode } from "react"
import { login } from "../services/Service"
import type { UsuarioLogin } from "../models/UsuarioLogin"

interface AuthContextProps {
    usuario: UsuarioLogin
    setUsuario: React.Dispatch<React.SetStateAction<UsuarioLogin>> // Nova prop para atualização direta
    handleLogin(usuario: UsuarioLogin): Promise<void>
    handleLogout(): void
    isLoading: boolean
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0, nome: "", usuario: "", senha: "", foto: "", token: "", perfil: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Login realizado com sucesso!")
        } catch (error) {
            alert("Erro: Verifique suas credenciais.")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({ id: 0, nome: "", usuario: "", senha: "", foto: "", token: "" , perfil: ""})
    }

    return (
        // Passamos o setUsuario no Provider
        <AuthContext.Provider value={{ usuario, setUsuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
import { createContext, useState, type ReactNode } from "react"

import { login } from "../services/Service"
import type { UsuarioLogin } from "../models/UsuarioLogin"

interface AuthContextProps {
    usuario: UsuarioLogin
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
            // Envia para o endpoint do Render que você configurou no Service.ts
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
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
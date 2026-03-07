import { createContext, useState, useEffect, type ReactNode } from "react"
import { login } from "../services/Service"
import type { UsuarioLogin } from "../models/UsuarioLogin"

interface AuthContextProps {
    usuario: UsuarioLogin
    setUsuario: React.Dispatch<React.SetStateAction<UsuarioLogin>>
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

    useEffect(() => {
        const usuarioPersistido = localStorage.getItem("usuarioDados");
        if (usuarioPersistido) {
            try {
                const dadosRedirecionados = JSON.parse(usuarioPersistido);
                setUsuario(dadosRedirecionados);
            } catch (error) {
                console.error("Erro ao recuperar dados da sessão");
                handleLogout();
            }
        }
    }, []);

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, (resposta: UsuarioLogin) => {
                setUsuario(resposta)
                
                localStorage.setItem("token", resposta.token)
                localStorage.setItem("usuarioDados", JSON.stringify(resposta)) 
            })

            alert("Login realizado com sucesso!")
        } catch (error) {
            alert("Erro: Verifique suas credenciais.")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({ id: 0, nome: "", usuario: "", senha: "", foto: "", token: "", perfil: "" })
        localStorage.removeItem("token")
        localStorage.removeItem("usuarioDados")
    }

    return (
        <AuthContext.Provider value={{ usuario, setUsuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
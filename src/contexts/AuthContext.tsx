import { createContext, useState, useEffect, type ReactNode } from "react"
import { login } from "../services/Service"
import type { UsuarioLogin } from "../models/UsuarioLogin"
import { ToastAlerta } from "../utils/ToastAlert"

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
                ToastAlerta('Erro ao recuperar dados da sessão', 'erro');
                handleLogout();
            }
        }
    }, []);

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            // Rota singular alinhada com o NestJS
            await login(`/usuario/logar`, userLogin, (resposta: UsuarioLogin) => {
                
                // 1. Garantimos que o token possua o prefixo correto exigido pelo Passport JWT
                const tokenFormatado = resposta.token.startsWith("Bearer ") 
                    ? resposta.token 
                    : `Bearer ${resposta.token}`;

                // 2. Montamos o objeto do usuário com o token pronto para uso em requisições
                const dadosUsuarioAutenticado = { ...resposta, token: tokenFormatado };

                setUsuario(dadosUsuarioAutenticado);
                
                // 3. Persistimos o token completo para que os outros forms usem diretamente
                localStorage.setItem("token", tokenFormatado);
                localStorage.setItem("usuarioDados", JSON.stringify(dadosUsuarioAutenticado));
            })
            ToastAlerta('Login realizado com sucesso!', 'sucesso');
            
        } catch (error) {
            ToastAlerta('Erro: verifique suas credenciais.', 'erro');
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
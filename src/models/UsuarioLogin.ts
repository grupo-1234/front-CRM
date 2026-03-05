export interface UsuarioLogin {
    id: number,
    nome: string,
    usuario: string,
    senha: string,
    foto?: string,
    perfil: string,
    token: string
}
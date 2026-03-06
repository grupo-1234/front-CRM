import axios from "axios";

const api = axios.create({
    baseURL: 'https://crm-generation.onrender.com'
})

export const login = async (url: string, dados: Object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}
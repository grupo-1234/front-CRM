import { useEffect, useState } from "react"
import type { Negociacao } from "../types/Negociacao"
import { api } from "../../../services/Service.api"

export default function useNegociacoes() {

  const [negociacoes, setNegociacoes] = useState<Negociacao[]>([])
  const [loading, setLoading] = useState(true)

  async function carregarNegociacoes() {
    try {
      const response = await api.get("/negociacoes")
      setNegociacoes(response.data)
    } catch (error) {
      console.error("Erro ao buscar negociações", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    carregarNegociacoes()
  }, [])

  async function criarNegociacao(nova: Negociacao) {
    try {
      const response = await api.post("/negociacoes", nova)

      setNegociacoes((prev) => [...prev, response.data])
    } catch (error) {
      console.error("Erro ao criar negociação", error)
    }
  }

  function totalFunil() {
    return negociacoes.reduce((total, n) => total + n.valor, 0)
  }

  return {
    negociacoes,
    criarNegociacao,
    totalFunil,
    loading
  }
}
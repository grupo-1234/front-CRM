import { useState } from "react"
import type { Negociacao } from "../types/Negociacao"

interface Props {
  onCreate: (neg: Negociacao) => void
  onClose: () => void
}

export default function ModalCriarNegociacao({ onCreate, onClose }: Props) {

  const [empresa, setEmpresa] = useState("")
  const [valor, setValor] = useState(0)

  function criar() {

    const nova: Negociacao = {
        id: Date.now().toString(),
        empresa,
        valor,
        status: "lead",
        servico: "Serviço",
        responsavel: "Equipe",
        etapa: "Novo Lead",
        classificacao: "premium"
    }

    onCreate(nova)
    onClose()
  }

  return (

    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">

      <div className="bg-white rounded-lg p-6 w-[400px">

        <h2 className="text-lg font-semibold mb-4">
          Nova negociação
        </h2>

        <input
          placeholder="Empresa"
          className="border w-full p-2 mb-3 rounded"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />

        <input
          placeholder="Valor"
          type="number"
          className="border w-full p-2 mb-3 rounded"
          onChange={(e) => setValor(Number(e.target.value))}
        />

        <div className="flex justify-end gap-3 mt-4">

          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancelar
          </button>

          <button
            onClick={criar}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Criar
          </button>

        </div>

      </div>

    </div>

  )
}
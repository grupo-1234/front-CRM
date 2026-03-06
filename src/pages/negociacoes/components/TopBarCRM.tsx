import { Plus } from "@phosphor-icons/react"

interface Props {
  onCreate: () => void
}

export default function TopBarCRM({ onCreate }: Props) {

  return (

    <div className="flex justify-between items-center mb-4">

      <span className="text-sm font-semibold">
        Priorizar negociações
      </span>

      <button
        onClick={onCreate}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
      >

        <Plus size={16} />

        Criar

      </button>

    </div>

  )

}
interface CardPlanosProps {
    titulo: string
    preco: string
    vantagens: string []
    desvantagens?: string []
    cor: string

}

export default function CardPlano({
titulo,
preco,
vantagens,
desvantagens,
cor
}: CardPlanosProps) {

 return (
    <div className="relative w-72">

      {/* bloco colorido atrás */}
      <div className={`absolute -bottom-4 -left-4 w-full h-full ${cor} rounded-xl`} />

      {/* card */}
      <div className="relative bg-white shadow-xl rounded-xl p-8 flex flex-col items-center gap-6">

        <h2 className="text-3xl font-light text-gray-700">
          {titulo}
        </h2>

        <ul className="flex flex-col gap-3 text-gray-600">

          {vantagens.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-green-500">✔</span>
              {item}
            </li>
          ))}

          {desvantagens?.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-red-500">X</span>
              {item}
            </li>
          ))}

        </ul>

        <div className="text-center">

          <p className="text-4xl font-light text-gray-700">
            {preco}
          </p>

          <p className="text-sm text-gray-400">
            Por Mês
          </p>

        </div>

        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md">
          Selecionar
        </button>

      </div>
    </div>
  )
}
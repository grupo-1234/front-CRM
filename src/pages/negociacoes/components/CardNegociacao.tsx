import type { Negociacao } from "../types/Negociacao"

interface Props{
negociacao:Negociacao
onEdit:(n:Negociacao)=>void
onDelete:(id:string)=>void
}

export default function CardNegociacao({negociacao,onEdit,onDelete}:Props){

function criarTarefa(){

const tarefa=prompt("Digite a nova tarefa")

if(!tarefa) return

alert("Tarefa criada: "+tarefa)

}

function editarValor(){

const valor=prompt("Digite novo valor",negociacao.valor.toString())

if(!valor) return

onEdit({
...negociacao,
valor:Number(valor)
})

}

return(

<div className="bg-white border border-blue-200 rounded p-2 shadow w-[228px">


<div className="flex justify-between items-center text-sm mb-1">

<span className="text-green-600 flex items-center gap-1">
● {negociacao.status}
</span>

<div className="flex gap-2">

<button onClick={()=>onEdit(negociacao)}>
⭐
</button>

<button onClick={editarValor}>
✏️
</button>

<button onClick={()=>onDelete(negociacao.id)}>
🗑
</button>

</div>

</div>


<div className="font-semibold">
{negociacao.empresa}
</div>

<div className="text-gray-500 text-sm">
{negociacao.servico}
</div>

<div className="font-bold mt-1">
R$ {negociacao.valor}
</div>



<select
className="border border-blue-200 rounded text-sm mt-2 w-full"
value={negociacao.classificacao}
onChange={(e)=>
onEdit({
...negociacao,
classificacao: e.target.value as 
"normal"  |  "beta" | "premium"
})
}
>

<option value="normal">Normal</option>
<option value="beta">Beta</option>
<option value="premium">Premium</option>

</select>


<select
className="border  border-blue-200 rounded text-sm mt-2 w-full"
value={negociacao.acao}
onChange={(e)=>
onEdit({
...negociacao,
acao: e.target.value as Negociacao["acao"],
})
}
>

<option value="ligacao">Ligação</option>
<option value="video">Vídeo</option>
<option value="consultoria">Consultoria</option>
<option value="mentoria">Mentoria</option>

</select>


<div className="text-xs text-gray-500 mt-2">
📅 {negociacao.data}
</div>


<button
onClick={criarTarefa}
className="text-blue-600 text-sm mt-1"
> 
+Criar tarefa
</button>

</div>

)

}
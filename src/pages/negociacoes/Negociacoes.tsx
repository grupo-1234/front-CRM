import { useState } from "react"

import BarraFiltros from "./components/BarraFiltros"
import ColunaFunil from "./components/ColunaFunil"
import MetricBar from "./components/MetricBar"
import RelatoriosCRM from "./components/RelatoriosCRM"

import { type Negociacao } from "./types/Negociacao"

export default function Negociacoes(){

const [mostrarRelatorio,setMostrarRelatorio]=useState(false)

const [negociacoes,setNegociacoes]=useState<Negociacao[]>([
{
id:"1",
empresa:"Empresa Alpha",
servico:"Consultoria CRM",
valor:200,
responsavel:"João",
status:"em andamento",
etapa:"Novo Lead",
classificacao:"premium",
acao:"ligacao",
data:"28/07/2025 17:00"
},
{
id:"2",
empresa:"Empresa Beta",
servico:"Automação",
valor:500,
responsavel:"Maria",
status:"em andamento",
etapa:"Contato Realizado",
classificacao:"beta",
acao:"video",
data:"29/07/2025 10:30"
}
])

function criarNegociacao(){

const empresa=prompt("Nome da empresa")

if(!empresa) return

const nova:Negociacao={
id:Date.now().toString(),
empresa,
servico:"Novo serviço",
valor:0,
responsavel:"Usuário",
status:"em andamento",
etapa:"Novo Lead",
classificacao:"normal",
acao:"ligacao",
data:new Date().toLocaleString()
}

setNegociacoes(prev=>[...prev,nova])

}

function editar(nova:Negociacao){

setNegociacoes(prev=>
prev.map(n=>n.id===nova.id?nova:n)
)

}

function deletar(id:string){

if(!confirm("Tem certeza que deseja excluir?")) return

setNegociacoes(prev=>prev.filter(n=>n.id!==id))

}

return(

<div className="pt-24  p-6  bg-gray-50 min-h-screen">

<BarraFiltros onCriar={criarNegociacao}/>


<MetricBar negociacoes={negociacoes}/>


<div className="flex gap-6 mt-6 overflow-x-auto pb-6">

<ColunaFunil
titulo="Novo Lead"
negociacoes={negociacoes.filter(n=>n.etapa==="Novo Lead")}
onEdit={editar}
onDelete={deletar}
/>

<ColunaFunil
titulo="Contato Realizado"
negociacoes={negociacoes.filter(n=>n.etapa==="Contato Realizado")}
onEdit={editar}
onDelete={deletar}
/>

<ColunaFunil
titulo="Diagnóstico"
negociacoes={negociacoes.filter(n=>n.etapa==="Diagnóstico")}
onEdit={editar}
onDelete={deletar}
/>

<ColunaFunil
titulo="Proposta Enviada"
negociacoes={negociacoes.filter(n=>n.etapa==="Proposta Enviada")}
onEdit={editar}
onDelete={deletar}
/>

</div>

<button
onClick={()=>setMostrarRelatorio(!mostrarRelatorio)}
className="border border-pink-400 text-pink-600 px-4 py-2 rounded"
> 
Relatórios
</button>

{mostrarRelatorio && (
<RelatoriosCRM negociacoes={negociacoes}/>
)}

</div>

)

}
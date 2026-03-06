import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts"

import type { Negociacao } from "../types/Negociacao"

interface Props{
negociacoes:Negociacao[]
}

export default function DashboardCRM({negociacoes}:Props){

const dados=[

{
nome:"Leads",
valor:negociacoes.filter(n=>n.etapa==="Novo Lead").length
},

{
nome:"Contato",
valor:negociacoes.filter(n=>n.etapa==="Contato Realizado").length
},

{
nome:"Diagnóstico",
valor:negociacoes.filter(n=>n.etapa==="Diagnóstico").length
},

{
nome:"Proposta",
valor:negociacoes.filter(n=>n.etapa==="Proposta Enviada").length
}

]

return(

<div className="bg-white p-6 rounded shadow mt-6">

<h2 className="font-semibold mb-4">
Dashboard CRM
</h2>

<ResponsiveContainer width="100%" height={250}>

<BarChart data={dados}>

<XAxis dataKey="nome"/>
<YAxis/>
<Tooltip/>

<Bar dataKey="valor" fill="#1677ff" radius={[6,6,0,0]}/>

</BarChart>

</ResponsiveContainer >

</div>

)
}
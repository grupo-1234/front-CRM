import type { Negociacao } from "../types/Negociacao"
import DashboardCRM from "./DashboardCRM"
import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts"


interface Props {
negociacoes: Negociacao[]
}

export default function RelatoriosCRM({ negociacoes }: Props) {

const valorTotal = negociacoes.reduce(
(acc, n) => acc + n.valor,
0
)

const leads = negociacoes.filter(
n => n.etapa === "Novo Lead"
).length

const contatos = negociacoes.filter(
n => n.etapa === "Contato Realizado"
).length

const diagnosticos = negociacoes.filter(
n => n.etapa === "Diagnóstico"
).length

const propostas = negociacoes.filter(
n => n.etapa === "Proposta Enviada"
).length

const dados = [
{ nome: "Leads", valor: leads },
{ nome: "Contatos", valor: contatos },
{ nome: "Diagnóstico", valor: diagnosticos },
{ nome: "Propostas", valor: propostas }
]

return (

<div className="mt-14 border  border-blue-400 p-6 rounded-lg bg-white">

<h2 className="text-xl font-semibold mb-6">
Relatórios do CRM
</h2>

<div className="grid grid-cols-4 gap-4 mb-6">

<div className="grid grid-cols-4 gap-4 mb-8">

<div className="bg-white shadow rounded p-5 border border-blue-400">
<p className="text-xs text-gray-500">Total negociações</p>
<p className="text-xl font-bold">{negociacoes.length}</p>
</div>

</div>

<div className="bg-white shadow rounded p-5 border border-blue-400">
<p className="text-xs text-gray-500">Pipeline total</p>
<p className="text-xl font-bold">R$ {valorTotal}</p>
</div>

<div className="bg-white shadow rounded p-5 border border-blue-400">
<p className="text-xs text-gray-500">Leads</p>
<p className="text-xl font-bold">{leads}</p>
</div>

<div className="bg-white shadow rounded p-5 border border-blue-400">
<p className="text-xs text-gray-500">Contatos realizados</p>
<p className="text-xl font-bold">{contatos}</p>
</div>

</div>

<DashboardCRM negociacoes={negociacoes} />
<div className="h-[300px">

<ResponsiveContainer width="100%" height="100%">

<BarChart data={dados}>

<XAxis dataKey="nome" />

<YAxis />

<Tooltip />

<Bar dataKey="valor" />

</BarChart>

</ResponsiveContainer>

</div>

</div>

)

}
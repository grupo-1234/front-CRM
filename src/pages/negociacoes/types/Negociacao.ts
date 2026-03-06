export interface Negociacao {

id:string

empresa:string

servico:string

valor:number

responsavel:string

status:
 | "em andamento"
 | "ganho"
 | "perdido"

etapa:
 | "Novo Lead"
 | "Contato Realizado"
 | "Diagnóstico"
 | "Proposta Enviada"

classificacao?:
 | "normal"
 | "beta"
 | "premium"

acao?:
 | "ligacao"
 | "video"
 | "consultoria"
 | "mentoria"

data?:string

}
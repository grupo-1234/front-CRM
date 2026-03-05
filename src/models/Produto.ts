import type { Categoria } from "./Categoria";
import type { Usuario } from "./Usuario";

export interface Produto {
    id: number,
    nomeProduto: string,
    descricao: string,
    preco: number,
    status: boolean,
    usuario: Usuario | null;
    categoria: Categoria |null;
}
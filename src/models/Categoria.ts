import type { Produto } from "./Produto";
import type { Usuario } from "./Usuario";

export interface Categoria {
    id: number,
    nome: string,
    descricao: string,
    produto: Produto | null;
    usuario: Usuario; 
}
import { PencilLine, Trash, DollarSign } from 'lucide-react';
import type { Produto } from '../../../../models/Produto';

interface CardProdutoProps {
    produto: Produto;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}

function CardProduto({ produto, onEdit, onDelete }: CardProdutoProps) {
    const descricaoLimpa = produto.descricao.replace(/\[.*?\]/g, '').trim();

    return (
        <div className={`
            group bg-white p-4 rounded-2xl border border-slate-100 shadow-sm
            hover:shadow-md hover:border-blue-200 transition-all duration-200
            ${!produto.status ? 'opacity-50 grayscale' : ''}
        `}>
            {/* Categoria Discreta */}
            <div className="flex justify-between items-start mb-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                    {produto.categoria?.nome || 'Geral'}
                </span>
                
                {/* Ações Minimalistas */}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit?.(produto.id.toString())} className="p-1 text-slate-400 hover:text-blue-600">
                        <PencilLine size={14} />
                    </button>
                    <button onClick={() => onDelete?.(produto.id.toString())} className="p-1 text-slate-400 hover:text-red-600">
                        <Trash size={14} />
                    </button>
                </div>
            </div>

            {/* Título e Valor Lado a Lado */}
            <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="font-bold text-slate-700 text-sm leading-tight line-clamp-1">
                    {produto.nomeProduto}
                </h3>
                <div className="flex items-center text-[#1675F2] font-bold text-sm whitespace-nowrap">
                    <DollarSign size={12} strokeWidth={3} />
                    <span>{new Intl.NumberFormat('pt-BR').format(produto.preco)}</span>
                </div>
            </div>

            {/* Descrição Curta */}
            <p className="text-[11px] text-slate-400 line-clamp-1 italic">
                {descricaoLimpa || 'Sem detalhes...'}
            </p>
        </div>
    );
}

export default CardProduto;
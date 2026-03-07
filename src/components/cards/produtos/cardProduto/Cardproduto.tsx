import { PencilLine, Trash, DollarSign, User } from 'lucide-react';
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
            group bg-white p-5 rounded-3xl shadow-sm border border-slate-200 
            hover:shadow-xl hover:border-blue-200 transition-all duration-300
            ${!produto.status ? 'opacity-60 grayscale-[0.5]' : ''}
        `}>
            <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1675F2] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {produto.categoria?.nome || 'Geral'}
                </span>
                
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button 
                        onClick={() => onEdit?.(produto.id.toString())}
                        className="p-1.5 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                        title="Editar Lead"
                    >
                        <PencilLine size={16} />
                    </button>
                    <button 
                        onClick={() => onDelete?.(produto.id.toString())}
                        className="p-1.5 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                        title="Excluir Lead"
                    >
                        <Trash size={16} />
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-extrabold text-slate-800 text-base leading-tight mb-1 group-hover:text-[#1675F2] transition-colors">
                    {produto.nomeProduto}
                </h3>
                <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <User size={12} /> {produto.usuario?.nome || 'Freelancer'}
                </p>
            </div>

            <p className="text-xs text-slate-500 line-clamp-2 mb-5 min-h-[32px] leading-relaxed">
                {descricaoLimpa || 'Nenhuma descrição detalhada fornecida para este lead.'}
            </p>

            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-300 tracking-tighter">Valor Estimado</span>
                    <div className="flex items-center text-[#1675F2] font-black text-lg">
                        <DollarSign size={16} strokeWidth={3} className="-ml-1" />
                        <span>
                            {new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(produto.preco)}
                        </span>
                    </div>
                </div>
                
                {!produto.status && (
                    <span className="text-[9px] font-bold bg-slate-100 text-slate-400 px-2 py-1 rounded-md uppercase">
                        Pausado
                    </span>
                )}
            </div>
        </div>
    );
}

export default CardProduto;
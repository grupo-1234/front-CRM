/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Trash2, X, AlertTriangle } from 'lucide-react';
import { deletar } from '../../../../services/Service';
import { ToastAlerta } from '../../../../utils/ToastAlert';


interface DeletarProdutoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
  nome: string;
  aoSucesso: () => void; // Função para atualizar a lista no pai
}

function DeletarProduto({ open, setOpen, id, nome, aoSucesso }: DeletarProdutoProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function confirmarExclusao() {
    setIsLoading(true);
    const token = localStorage.getItem('token');

    try {
      await deletar(`/produtos/${id}`, {
        headers: { Authorization: token },
      });
      ToastAlerta('Lead excluído com sucesso!', 'sucesso');
      aoSucesso();
      setOpen(false);
    } catch (error: any) {
      ToastAlerta('Erro ao excluir o lead.', 'erro');
    } finally {
      setIsLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in duration-200">
        <div className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-xl font-black text-slate-800 mb-2">Excluir Lead?</h2>
          <p className="text-slate-500 text-sm mb-6">
            Você está prestes a excluir o lead <span className="font-bold text-slate-700">"{nome}"</span>. 
            Esta ação não pode ser desfeita.
          </p>

          <div className="flex gap-3 w-full">
            <button
              onClick={() => setOpen(false)}
              className="flex-1 py-3 rounded-xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              Cancelar
            </button>
            <button
              onClick={confirmarExclusao}
              disabled={isLoading}
              className="flex-1 py-3 rounded-xl font-bold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-100 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Excluindo...' : <><Trash2 size={18} /> Confirmar</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
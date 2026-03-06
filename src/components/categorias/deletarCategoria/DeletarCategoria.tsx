/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Categoria } from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
    produto: null,
  });

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Buscar categoria pelo id
  async function buscarCategoria(id: string) {
    try {
      const token = localStorage.getItem('token');
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      alert('Erro ao buscar categoria.');
      console.error(error);
    }
  }

  useEffect(() => {
    if (id) {
      buscarCategoria(id);
    }
  }, [id]);

  // Deletar categoria
  async function deletarCategoria() {
    const confirmar = window.confirm(`Tem certeza que deseja deletar a categoria "${categoria.nome}"?`);
    if (!confirmar) return;

    try {
      const token = localStorage.getItem('token');
      await deletar(`/categoria/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      alert('Categoria deletada com sucesso!');
      navigate('/categoria');
    } catch (error: any) {
      alert('Erro ao deletar categoria.');
      console.error(error);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-24">
      <h1 className="text-4xl font-bold mb-6 text-[#354C75]">Deletar Categoria</h1>

      <div className="flex flex-col w-full max-w-md gap-4 bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
        <p className="text-lg font-semibold">Nome:</p>
        <p className="text-gray-700">{categoria.nome}</p>

        <p className="text-lg font-semibold">Descrição:</p>
        <p className="text-gray-700">{categoria.descricao}</p>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate('/categoria')}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-xl transition-all"
          >
            Cancelar
          </button>

          <button
            onClick={deletarCategoria}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl transition-all"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
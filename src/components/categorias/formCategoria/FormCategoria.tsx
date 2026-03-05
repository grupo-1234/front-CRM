/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Categoria } from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar categoria");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('Categoria atualizada com sucesso');
      } catch (error: any) {
        alert('Erro ao atualizar a Categoria');
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert('Categoria cadastrada com sucesso');
      } catch (error: any) {
        alert('Erro ao cadastrar a Categoria');
      }
    }
    navigate('/categorias');
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-24">
      <h1 className="text-4xl text-center my-8 font-bold text-[#354C75]">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form 
        className="flex flex-col w-full max-w-md gap-6 bg-white p-10 rounded-2xl shadow-xl border border-slate-200" 
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-bold text-slate-700">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Ex: Tecnologia, Consultoria..."
            name="nome"
            className="border-2 border-slate-200 rounded-lg p-3 focus:border-[#354C75] outline-none transition duration-200"
            value={categoria.nome || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
          />
        </div>
        
        <button
          className="rounded-full text-white bg-[#354C75] hover:bg-[#5C7297] w-full py-3 font-bold text-lg shadow-md transition duration-300"
          type="submit"
        >
          {id === undefined ? 'Salvar' : 'Atualizar'}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
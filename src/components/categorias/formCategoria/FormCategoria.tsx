/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Categoria } from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
    produto: null,
  });
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      const token = localStorage.getItem("token");

      await buscar(`/categoria/${id}`, setCategoria, {
        headers: {
          Authorization: token
        }
      });

    } catch (error) {
      console.error("Erro ao buscar categoria");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: token
      }
    };

    // Envia apenas os campos que o backend espera
   const categoriaParaEnviar = id !== undefined
  ? { id: categoria.id, nome: categoria.nome, descricao: categoria.descricao } // edição
  : { nome: categoria.nome, descricao: categoria.descricao };                  // cadastro

    try {
      if (id !== undefined) {
        await atualizar(`/categoria`, categoriaParaEnviar, setCategoria, headers);
        alert('Categoria atualizada com sucesso');
      } else {
        await cadastrar(`/categoria`, categoriaParaEnviar, setCategoria, headers);
        alert('Categoria cadastrada com sucesso');
      }
      navigate('/categoria');
    } catch (error: any) {
      alert('Erro ao salvar a Categoria');
      console.error(error);
    }
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
          <label htmlFor="nome" className="font-bold text-slate-700">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Ex: Tecnologia, Consultoria..."
            name="nome"
            className="border-2 border-slate-200 rounded-lg p-3 focus:border-[#354C75] outline-none transition duration-200"
            value={categoria.nome || ''}
            onChange={atualizarEstado}
            maxLength={100}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="font-bold text-slate-700">Descrição da Categoria</label>
          <textarea
            placeholder="Descrição detalhada da categoria"
            name="descricao"
            className="border-2 border-slate-200 rounded-lg p-3 focus:border-[#354C75] outline-none transition duration-200"
            value={categoria.descricao || ''}
            onChange={atualizarEstado}
            maxLength={200}
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
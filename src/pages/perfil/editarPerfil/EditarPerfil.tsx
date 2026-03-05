import { UserCircleIcon } from '@phosphor-icons/react'
import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// interface EditarPerfilProps {
//     dadosPerfil: {
//     nome: string;
//     sobrenome: string;
//     email: string;
//     telefone: string;
//     };
//     onClose: () => void;
// }

function EditarPerfil() {

  return (
      <>
      <div className='fixed inset-0 z-50 grid place-content-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle'>
        <div className='w-full rounded-lg bg-white p-6 shadow-lg flex flex-col items-center px-40'>
            <h2 className='text-xl font-bold text-gray-900 sm:text-2xl'>
                Informações Pessoais
            </h2>
            <div className='mt-2 flex flex-col w-full'>
                <p className="text-pretty text-gray-700"> Mantenha suas informações pessoais atualizadas. </p>
            </div>
            <label className="flex flex-col w-full gap-2 pt-5">
                <span className='text-x font-medium text-gray-700'> Nome: </span>
                <input type="text" 
                className="p-3 w-full rounded border-gray-300 shadow-sm sm:text-sm" 
                placeholder='Insira seu nome'></input>
                
                <span className='text-x font-medium text-gray-700'> Sobrenome: </span>
                <input type="text" 
                className="p-3 w-full rounded border-gray-300 shadow-sm sm:text-sm" 
                placeholder='Insira seu sobrenome'></input>
                
                <span className='text-x font-medium text-gray-700'> Email: </span>
                <input type="text" 
                className="p-3 w-full rounded border-gray-300 shadow-sm sm:text-sm" 
                placeholder='email@email.com'></input>
                
                <span className='text-x font-medium text-gray-700'> Telefone: </span>
                <input type="text" 
                className="p-3 w-full rounded border-gray-300 shadow-sm sm:text-sm" 
                placeholder='XX XXXXX-XXXX'></input>
            </label>
        <footer className="mt-6 flex justify-end gap-2">
            <button type="button" className="rounded bg-gray-100 px-4 py-2 text-sm font-medium 
            text-crm-azul transition-colors hover:bg-gray-200 cursor-pointer">
                Cancelar
            </button>

            <button type="button" className="rounded bg-crm-azul px-4 py-2 text-sm font-medium text-white transition-colors
             hover:bg-white hover:text-crm-azul cursor-pointer">
                Salvar
            </button>
        </footer>

        </div>
      </div>
      </>
  
      )
  }

export default EditarPerfil
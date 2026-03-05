import { PencilSimpleIcon } from '@phosphor-icons/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastAlerta } from '../../../utils/ToastAlert'
import EditarPerfil from '../editarPerfil/EditarPerfil'

function Perfil() {

    // const navigate = useNavigate()

	// const { usuario } = useContext(AuthContext)

    // const dadosPerfil = {
    //     nome: "",
    //     sobrenome: "",
    //     email: "",
    //     telefone: ""    
    // }

    // const [openModal, setOpenModal] = useState(false); 

	// useEffect(() => {
	// 	if (usuario.token === "") {
	// 		ToastAlerta('Você precisa estar logado!', 'info')
	// 		navigate("/")
	// 	}
	// }, [usuario.token])

  return (
    <>
    <div className='bg-crm-branco mx-30 pt-'>
        <div className='rounded-2xl pt-25'>
            <h3 className='ml-6 pb-5 text-2xl font-bold text-crm-preto'>
                Perfil
            </h3>
        </div>

        <div className='mb-6 rounded-2xl border border-crm-azul p-8'>
            <div className='flex flex-col gap-5'>
                <div className='flex w-full flex-row items-center gap-6'>
                    <div className='h-20 w-20 overflow-hidden rounded-full border border-crm-azul'>
                        <img src={usuario.foto}
                        onError = { (e) => e.currentTarget.src = 'https://ik.imagekit.io/dvkwsy8r1/user.png'} 
                        alt='foto do usuário'/>
                    </div>
                    <div>
                        <h4 className='mb-2 text-left text-2xl font-semibold text-gray-800'>
                            {usuario.nome}
                        </h4>
                        <p className='text-l text-gray-600 font-semibold'> {usuario.perfil} </p>
                    </div>
                    <div>
                        <button onClick={() => setOpenModal(true)}
                        className='shadow-theme-xs flex w-30 items-center justify-center gap-2 
                        rounded-full border border-crm-azul bg-white px-4 py-3 text-sm font-medium text-gray-700
                        hover:bg-crm-azul hover:text-white ml-auto cursor-pointer'>
                        <PencilSimpleIcon size={20} /> Editar
                        </button>
                    </div>                      
                </div>
            </div>
        </div>

        <div className='mb-6 rounded-2xl border border-crm-azul p-8 '>
            <div className='flex flex-cols-1 gap-6'>
                <h4 className='flex flex-col gap-6 text-2xl font-semibold text-gray-800 pb-5'> Informações Pessoais </h4>
            </div>

            <div className='grid grid-cols-2 gap-4 pt-3'>
                <div>
                    <p className='mb-2 text-lx leading-normal text-gray-600'> Nome </p>
                    <p className='text-xl font-medium text-gray-800'> {usuario.nome} </p>
                </div>
                <div>
                    <p className='mb-2 text-lx leading-normal text-gray-600'> Sobrenome </p>
                    <p className='text-xl font-medium text-gray-800'> {usuario.sobrenome} </p>
                </div>
                <div>
                    <p className='mb-2 text-lx leading-normal text-gray-600'> Email </p>
                    <p className='text-xl font-medium text-gray-800'> {usuario.email} </p>
                </div>
                <div>
                    <p className='mb-2 text-lx leading-normal text-gray-600'> Telefone </p>
                    <p className='text-xl font-medium text-gray-800'> {usuario.telefone} </p>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Perfil
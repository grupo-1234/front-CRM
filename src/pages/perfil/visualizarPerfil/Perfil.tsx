import { PencilSimpleIcon } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastAlerta } from '../../../utils/ToastAlert'
import EditarPerfil from '../editarPerfil/EditarPerfil'
import { AuthContext } from '../../../contexts/AuthContext'

function Perfil() {
    const navigate = useNavigate()
    const { usuario } = useContext(AuthContext)
    const [openModal, setOpenModal] = useState(false); 

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado para acessar seu perfil!', 'info')
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <>
            <div className='bg-crm-branco mx-auto max-w-5xl pt-10 px-6'>
                <div className='pt-10 mb-6'>
                    <h3 className='text-2xl font-bold text-crm-preto'>Perfil</h3>
                </div>

                <div className='mb-6 rounded-2xl border border-crm-azul p-8 bg-white shadow-sm'>
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        <div className='h-24 w-24 overflow-hidden rounded-full border-2 border-crm-azul'>
                            <img 
                                src={usuario.foto || 'https://ik.imagekit.io/dvkwsy8r1/user.png'}
                                onError={(e) => e.currentTarget.src = 'https://ik.imagekit.io/dvkwsy8r1/user.png'} 
                                alt='foto do usuário'
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h4 className='text-2xl font-bold text-gray-800'>{usuario.nome}</h4>
                            <p className='text-gray-500 font-medium uppercase tracking-wider text-sm'>{usuario.perfil}</p>
                        </div>
                        <div className='md:ml-auto'>
                            <button 
                                onClick={() => setOpenModal(true)}
                                className='flex items-center gap-2 rounded-full border border-crm-azul bg-white px-6 py-2.5 text-sm font-bold text-crm-azul hover:bg-crm-azul hover:text-white transition-all cursor-pointer'
                            >
                                <PencilSimpleIcon size={20} weight="bold" /> Editar Perfil
                            </button>
                        </div>                      
                    </div>
                </div>

                <div className='mb-10 rounded-2xl border border-gray-200 p-8 bg-white shadow-sm'>
                    <h4 className='text-xl font-bold text-gray-800 border-b border-gray-100 pb-4 mb-6'>Informações Pessoais</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <p className='text-sm text-gray-500 mb-1'>Nome Completo</p>
                            <p className='text-lg font-semibold text-gray-800'>{usuario.nome}</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500 mb-1'>Usuário (E-mail)</p>
                            <p className='text-lg font-semibold text-gray-800'>{usuario.usuario}</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500 mb-1'>Perfil Profissional</p>
                            <p className='text-lg font-semibold text-gray-800'>{usuario.perfil}</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500 mb-1'>ID da Conta</p>
                            <p className='text-lg font-semibold text-gray-800'>#{usuario.id}</p>
                        </div>
                    </div>
                </div>
            </div>

            <EditarPerfil 
                open={openModal} 
                setOpen={setOpenModal} 
            />
        </>
    )
}

export default Perfil
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
        <div className="min-h-screen bg-[#FBFAFF] pt-28 pb-20">
            <div className='bg-white mx-auto max-w-5xl rounded-3xl border border-gray-100 shadow-sm overflow-hidden'>
                
                <div className="h-32 bg-gradient-to-r from-[#1675F2] to-[#EC4899] opacity-90"></div>
                
                <div className="px-8 pb-8">
                    <div className='relative flex flex-col md:flex-row items-end gap-6 -mt-12 mb-8'>
                        <div className='h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-md'>
                            <img 
                                src={usuario.foto || 'https://ik.imagekit.io/dvkwsy8r1/user.png'}
                                onError={(e) => e.currentTarget.src = 'https://ik.imagekit.io/dvkwsy8r1/user.png'} 
                                alt='foto do usuário'
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex-1 pb-2">
                            <h4 className='text-3xl font-bold text-gray-800'>{usuario.nome}</h4>
                            <p className='text-[#1675F2] font-bold uppercase tracking-widest text-xs'>{usuario.perfil}</p>
                        </div>
                        <div className='pb-2'>
                            <button 
                                onClick={() => setOpenModal(true)}
                                className='flex items-center gap-2 rounded-full bg-[#1675F2] px-8 py-3 text-sm font-bold text-white hover:bg-[#148DD9] transition-all shadow-lg shadow-blue-200 cursor-pointer'
                            >
                                <PencilSimpleIcon size={20} weight="bold" /> Editar Perfil
                            </button>
                        </div>                      
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border-t border-gray-50 pt-8'>
                        <div className="space-y-1">
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>Nome Completo</p>
                            <p className='text-lg font-medium text-gray-700'>{usuario.nome}</p>
                        </div>
                        <div className="space-y-1">
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>E-mail de Acesso</p>
                            <p className='text-lg font-medium text-gray-700'>{usuario.usuario}</p>
                        </div>
                        <div className="space-y-1">
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>Área / Cargo</p>
                            <p className='text-lg font-medium text-gray-700'>{usuario.perfil}</p>
                        </div>
                        <div className="space-y-1">
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>ID do Consultor</p>
                            <p className='text-lg font-medium text-gray-700'>#{usuario.id}</p>
                        </div>
                    </div>
                </div>
            </div>

            <EditarPerfil 
                open={openModal} 
                setOpen={setOpenModal} 
            />
        </div>
    )
}

export default Perfil
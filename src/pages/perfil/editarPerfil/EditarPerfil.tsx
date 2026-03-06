import { useContext, useState, useEffect, type ChangeEvent } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlerta } from '../../../utils/ToastAlert';
import { useNavigate } from 'react-router-dom';
import type { Usuario } from '../../../models/Usuario';
import { atualizar } from '../../../services/Service';

interface EditarPerfilProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

function EditarPerfil({ open, setOpen }: EditarPerfilProps) {
    
    const navigate = useNavigate();
    const { usuario, handleLogin } = useContext(AuthContext);

    const [usuarioEdit, setUsuarioEdit] = useState<Usuario>({
        ...usuario,
        foto: usuario.foto || '', 
        senha: '' 
    });

    useEffect(() => {
        setUsuarioEdit({
            ...usuario,
            foto: usuario.foto || '',
            senha: ''
        });
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setUsuarioEdit({
            ...usuarioEdit,
            [e.target.name]: e.target.value
        });
    }

    async function atualizarDados(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await atualizar(`/usuarios/atualizar`, usuarioEdit, setUsuarioEdit, {
                headers: {
                    Authorization: usuario.token,
                },
            });

            ToastAlerta('Perfil atualizado com sucesso!', 'sucesso');
            setOpen(false); // Fecha o modal após o sucesso
        } catch (error: any) {
            ToastAlerta('Erro ao atualizar o Perfil.', 'erro');
        }
    }

    if (!open) return null;

    return (
        <div className='fixed inset-0 z-50 grid place-content-center bg-black/50 p-4' role="dialog" aria-modal="true">
            <form 
                onSubmit={atualizarDados}
                className='w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg flex flex-col items-center px-10 md:px-20'
            >
                <h2 className='text-xl font-bold text-gray-900 sm:text-2xl'>
                    Informações Pessoais
                </h2>
                
                <div className='mt-2 flex flex-col w-full text-center'>
                    <p className="text-pretty text-gray-700"> 
                        Mantenha suas informações de perfil atualizadas para o CRM. 
                    </p>
                </div>

                <div className="flex flex-col w-full gap-4 pt-5">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nome" className='text-sm font-medium text-gray-700'>Nome Completo</label>
                        <input 
                            type="text" 
                            id="nome"
                            name="nome"
                            value={usuarioEdit.nome}
                            onChange={atualizarEstado}
                            className="p-3 w-full rounded border border-gray-300 shadow-sm outline-none focus:border-[#1675F2]" 
                            placeholder='Seu nome completo'
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="usuario" className='text-sm font-medium text-gray-700'>E-mail (Usuário)</label>
                        <input 
                            type="email" 
                            id="usuario"
                            name="usuario"
                            value={usuarioEdit.usuario}
                            onChange={atualizarEstado}
                            className="p-3 w-full rounded border border-gray-300 shadow-sm outline-none focus:border-[#1675F2]" 
                            placeholder='exemplo@email.com'
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="perfil" className='text-sm font-medium text-gray-700'>Área de Atuação</label>
                        <select
                            id="perfil"
                            name="perfil"
                            className="p-3 w-full rounded border border-gray-300 shadow-sm outline-none focus:border-[#1675F2] bg-white"
                            value={usuarioEdit.perfil}
                            onChange={atualizarEstado}
                            required
                        >
                            <option value="" disabled>Selecione sua área</option>
                            <option value="Desenvolvedor FrontEnd">Desenvolvedor FrontEnd</option>
                            <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
                            <option value="FullStack">FullStack</option>
                            <option value="UX/UI Design">UX/UI Design</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="foto" className='text-sm font-medium text-gray-700'>URL da Foto de Perfil</label>
                        <input 
                            type="text" 
                            id="foto"
                            name="foto"
                            value={usuarioEdit.foto}
                            onChange={atualizarEstado}
                            className="p-3 w-full rounded border border-gray-300 shadow-sm outline-none focus:border-[#1675F2]" 
                            placeholder='Link da sua imagem' 
                        />
                    </div>
                </div>

                <footer className="mt-8 flex justify-end gap-4 w-full">
                    <button 
                        type="button" 
                        onClick={() => setOpen(false)} 
                        className="rounded bg-gray-100 px-6 py-2 text-sm font-bold text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                        Cancelar
                    </button>

                    <button 
                        type="submit" 
                        className="rounded bg-[#1675F2] px-6 py-2 text-sm font-bold text-white hover:bg-[#148DD9] transition-all cursor-pointer shadow-md"
                    >
                        Salvar Alterações
                    </button>
                </footer>
            </form>
        </div>
    );
}

export default EditarPerfil;
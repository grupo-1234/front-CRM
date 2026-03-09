/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlerta } from '../../../utils/ToastAlert';
import { atualizar } from '../../../services/Service';
import type { Usuario } from '../../../models/Usuario';
import type { UsuarioLogin } from '../../../models/UsuarioLogin';

interface EditarPerfilProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

function EditarPerfil({ open, setOpen }: EditarPerfilProps) {
    
    const { usuario, setUsuario } = useContext(AuthContext);

    // Inicializamos garantindo que os campos obrigatórios tenham ao menos uma string vazia
    const [usuarioEdit, setUsuarioEdit] = useState<Usuario>({
        ...usuario,
        foto: usuario.foto || '', 
        senha: usuario.senha || '' 
    });

    useEffect(() => {
        if (open) {
            setUsuarioEdit({
                ...usuario,
                foto: usuario.foto || '',
                senha: usuario.senha || ''
            });
        }
    }, [usuario, open]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setUsuarioEdit({
            ...usuarioEdit,
            [e.target.name]: e.target.value
        });
    }

    async function atualizarDados(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Garantimos que a senha e o perfil não sejam undefined ou vazios antes de enviar
        const senhaFinal = usuarioEdit.senha || usuario.senha || '';
        const perfilFinal = usuarioEdit.perfil || usuario.perfil || '';

        const dadosParaEnviar = {
            ...usuarioEdit,
            senha: senhaFinal,
            perfil: perfilFinal
        };

        try {
            await atualizar(`/usuarios/atualizar`, dadosParaEnviar, setUsuarioEdit, {
                headers: {
                    Authorization: usuario.token,
                },
            });

            // Criamos o objeto no formato UsuarioLogin para evitar erro de tipo no setUsuario
            const usuarioAtualizado: UsuarioLogin = {
                id: dadosParaEnviar.id,
                nome: dadosParaEnviar.nome,
                usuario: dadosParaEnviar.usuario,
                perfil: dadosParaEnviar.perfil,
                foto: dadosParaEnviar.foto,
                senha: senhaFinal, // Garantido como string
                token: usuario.token
            };
            
            setUsuario(usuarioAtualizado);
            localStorage.setItem("usuarioDados", JSON.stringify(usuarioAtualizado));

            ToastAlerta('Perfil atualizado com sucesso!', 'sucesso');
            setOpen(false);
        } catch (error: any) {
            ToastAlerta('Erro ao atualizar o Perfil. Verifique se todos os campos estão preenchidos.', 'erro');
        }
    }

    if (!open) return null;

    return (
        <div className='fixed inset-0 z-50 grid place-content-center bg-black/50 p-4' role="dialog" aria-modal="true">
            <form 
                onSubmit={atualizarDados}
                className='w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg flex flex-col items-center px-10 md:px-20 animate-in fade-in zoom-in duration-200'
            >
                <h2 className='text-xl font-bold text-gray-900 sm:text-2xl'>Informações Pessoais</h2>
                <div className='mt-2 flex flex-col w-full text-center'>
                    <p className="text-pretty text-gray-700">Mantenha seus dados atualizados no conecta<span className="text-[#1675F2]">crm</span>.</p>
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
                            className="p-3 w-full rounded border border-gray-300 outline-none focus:border-[#1675F2]" 
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="usuario" className='text-sm font-medium text-gray-700'>E-mail (Login)</label>
                        <input 
                            type="email" 
                            id="usuario"
                            name="usuario"
                            value={usuarioEdit.usuario}
                            onChange={atualizarEstado}
                            className="p-3 w-full rounded border border-gray-300 outline-none focus:border-[#1675F2]" 
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="perfil" className='text-sm font-medium text-gray-700'>Área de Atuação</label>
                        <select
                            id="perfil"
                            name="perfil"
                            className="p-3 w-full rounded border border-gray-300 bg-white outline-none focus:border-[#1675F2]"
                            value={usuarioEdit.perfil}
                            onChange={atualizarEstado}
                            required
                        >
                            <option value="" disabled>Selecione seu cargo</option>
                            <option value="Desenvolvedor FrontEnd">Desenvolvedor FrontEnd</option>
                            <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
                            <option value="FullStack">FullStack</option>
                            <option value="UX/UI Designer">UX/UI Designer</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="foto" className='text-sm font-medium text-gray-700'>URL da Foto</label>
                        <input 
                            type="text" 
                            id="foto"
                            name="foto"
                            value={usuarioEdit.foto}
                            onChange={atualizarEstado}
                            className="p-3 w-full rounded border border-gray-300 outline-none focus:border-[#1675F2]" 
                            placeholder='Link da imagem' 
                        />
                    </div>

                    {/* Campo de Senha para validação do Backend */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="senha" className='text-sm font-medium text-gray-700'>Confirmar Senha</label>
                        <input 
                            type="password" 
                            id="senha"
                            name="senha"
                            value={usuarioEdit.senha}
                            onChange={atualizarEstado}
                            className="p-3 w-full rounded border border-gray-300 outline-none focus:border-[#1675F2]" 
                            placeholder="Sua senha atual ou nova"
                            required
                        />
                    </div>
                </div>

                <footer className="mt-8 flex justify-end gap-4 w-full">
                    <button 
                        type="button" 
                        onClick={() => setOpen(false)} 
                        className="rounded bg-gray-100 px-6 py-2 text-sm font-bold text-gray-600 hover:bg-gray-200 cursor-pointer"
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
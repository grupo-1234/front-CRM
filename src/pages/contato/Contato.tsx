import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ToastAlerta } from '../../utils/ToastAlert';
import type { FormEvent } from 'react';

function Contato() {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        ToastAlerta("Mensagem enviada com sucesso! Entraremos em contato em breve.", "sucesso");
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Entre em <span className="text-[#1675F2]">Contato</span>
                    </h1>
                    <p className="text-lg text-slate-600">Tem alguma dúvida ou precisa de suporte? Nossa equipe está pronta para ajudar.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Cards de Informação */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg text-[#1675F2]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">E-mail</h3>
                                <p className="text-sm text-slate-500">contato@conectacrm.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg text-[#1675F2]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Telefone</h3>
                                <p className="text-sm text-slate-500">(11) 99999-9999</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg text-[#1675F2]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Escritório</h3>
                                <p className="text-sm text-slate-500">São Paulo, SP - Brasil</p>
                            </div>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-slate-700">Nome</label>
                                    <input type="text" placeholder="Seu nome" required className="p-3 rounded-lg border border-slate-200 outline-none focus:border-[#1675F2] transition-all" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold text-slate-700">E-mail</label>
                                    <input type="email" placeholder="seu@email.com" required className="p-3 rounded-lg border border-slate-200 outline-none focus:border-[#1675F2] transition-all" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-slate-700">Assunto</label>
                                <input type="text" placeholder="Como podemos ajudar?" required className="p-3 rounded-lg border border-slate-200 outline-none focus:border-[#1675F2] transition-all" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold text-slate-700">Mensagem</label>
                                <textarea rows={4} placeholder="Escreva sua mensagem aqui..." required className="p-3 rounded-lg border border-slate-200 outline-none focus:border-[#1675F2] transition-all resize-none"></textarea>
                            </div>
                            <button type="submit" className="mt-4 bg-[#1675F2] hover:bg-[#1464CC] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                                <Send size={20} /> Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;
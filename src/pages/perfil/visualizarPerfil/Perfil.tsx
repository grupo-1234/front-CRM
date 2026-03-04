import React from 'react'

function Perfil() {
  return (
    <>
    
    {/* <div className='flex flex-wrap items-center justify-between gap-3 pb-6'>
        <h2 className='text-xl font-semibold text-crm-preto'>
            Perfil
        </h2> 
    </div> */}
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
                        <img src='https://ik.imagekit.io/dvkwsy8r1/user.png'/>
                    </div>
                    <div>
                        <h4 className='mb-2 text-left text-2xl font-semibold text-gray-800'>
                            Nome do Usuário
                        </h4>
                        <p className='text-l text-gray-600 font-semibold'> Desenvolvedor | Localidade </p>
                    </div>
                                           
                    <button className='shadow-theme-xs flex w-30 items-center justify-center gap-2 
                    rounded-full border border-crm-azul bg-white px-4 py-3 text-sm font-medium text-gray-700
                    hover:bg-crm-azul hover:text-white ml-auto'>
                        Editar
                    </button>
                </div>
            </div>
        </div>

        <div className='mb-6 rounded-2xl border border-crm-azul p-8 '>
            <div className='flex flex-cols-1 gap-6'>
                <h4 className='flex flex-col gap-6 text-2xl font-semibold text-gray-800 pb-5'> Informações Pessoais </h4>
                {/* <button className='shadow-theme-xs flex w-30 items-center justify-center gap-2 
                    rounded-full border border-crm-azul bg-white px-4 py-3 text-sm font-medium text-gray-700
                    hover:bg-crm-azul hover:text-white ml-auto'>
                        Editar
                </button> */}
            </div>

            <div className='grid grid-cols-2 gap-4 pt-3'>
                <div>
                    <p className='mb-2 text-lx leading-normal text-gray-600'> Nome </p>
                    <p className='text-xl font-medium text-gray-800'> Nome preenchido </p>
                </div>
                <div>
                    <p className='mb-2 text-lx leading-normal text-gray-600'> Sobrenome </p>
                    <p className='text-xl font-medium text-gray-800'> Sobrenome </p>
                </div>
                <div>
                    <p className='mb-2 text-lx leading-normal text-gray-600'> Email </p>
                    <p className='text-xl font-medium text-gray-800'> Email preenchido </p>
                </div>
                <div>
                    <p className='mb-2 text-lx leading-normal text-gray-600'> Telefone </p>
                    <p className='text-xl font-medium text-gray-800'> Telefone preenchido </p>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Perfil
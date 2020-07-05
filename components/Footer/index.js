import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto Desenvolvido por: Heitor Z. Nepomuceno / {' '}
                <a className='hover:underline' href='https://github.com/Heitor-Zanoncello'>Github</a>
                <div className='mt-4'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer
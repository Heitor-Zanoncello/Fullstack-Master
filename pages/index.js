import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args)

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', )
    return (
        <div>
            <p className='mt-12 text-center'>
                O restaurante x sempre busca em atender melhor seus clientes.<br />
                Por isso estamos sempre abertos a ouvir a sua opinião
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
                </Link>
            </div>
            <p className='my-12 text-center'>
                Mensagem do desconto.
            </p>
        </div>

    )
}

export default Index
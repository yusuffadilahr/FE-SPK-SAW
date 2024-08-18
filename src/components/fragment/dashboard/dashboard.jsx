import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Aicons from '../../element/icons/AIcons'
import Dicons from '../../element/icons/Dicons'
import Bicons from '../../element/icons/Bicons'
import ProfileIcons from '../../element/icons/profileIcons'
import { Logout } from '../../../service/auth.service'

const DashboardUser = () => {

    const tesCard = [
        { id: 1, name: 'Data Alternatif', url: '/data-alternatif-user', icons: <Aicons /> },
        { id: 2, name: 'Data Kriteria', url: '/data-kriteria-user', icons: <Bicons /> },
        { id: 3, name: 'Hasil Keputusan', url: '/data-hasil-user', icons: <Dicons /> },
        { id: 4, name: 'Combucha Coffee', url: 'https://www.instagram.com/combuchacoffee/?igshid=YmMyMTA2M2Y%3D', icons: <ProfileIcons /> },
    ]

    const handleUser = localStorage.getItem('username')

    return (
        <Fragment>
            <div className='flex'>
                <div className='w-1/6 h-screen left-0 top-0 bg-transparent'>
                    <h1>Tesss</h1>
                </div>
                <div className='w-5/6 h-screen left-0 top-0 bg-white pt-24 p-20'>
                    <div className='w-full bg-blue-400 h-10 flex items-center pl-5'>
                        <h1 className='font-bold text-slate-600'>Selamat Datang, {handleUser}!</h1>
                    </div>
                    <div className='overflow-x-auto w-full flex justify-center items-center'>
                        <div className='flex justify-center items-ceenter pt-5 w-full h-full'>
                            <div className='grid grid-cols-4'>
                                {tesCard.map((card) => (
                                    <div key={card.id} className='w-56 h-20 m-2 rounded-xl border shadow bg-white'>
                                        <Link to={card.url}>
                                            <div className='w-full h-full flex justify-center items-center'>
                                                {card.icons}
                                                <h1 className='text-gray-600 font-bold'>{card.name}</h1>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DashboardUser

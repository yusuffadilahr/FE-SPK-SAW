import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SidebarLinks from './sidebarLinks'
import Aicons from '../../icons/AIcons'
import Bicons from '../../icons/Bicons'
import Cicons from '../../icons/Cicons'
import Eicons from '../../icons/Eicons'
import HomeIcons from '../../icons/homeIcons'
import Dicons from '../../icons/Dicons'
import ProfileIcons from '../../icons/profileIcons'

const Sidebar = () => {
    const location = useLocation()

    const handleNavigation = () => {
        return localStorage.getItem('role')
    }

    const isActive = (url) => location.pathname === url
    return (
        <div className='fixed top-0 left-0 h-screen w-1/6 bg-gray-50 border-r z-30'>
            <div className='w-full bg-blue-400 h-20'>
                <div className='flex justify-center items-center h-full w-full'>
                    <h1 className='text-center text-white font-bold'>
                        SPK SAW
                    </h1>
                </div>
            </div>
            <div className='pt-10'>
                <h1 className='ml-1 text-gray-400 text-xs'>Navigation</h1>
                <div className='grid grid-cols-1 pt-4'>
                    <ul>
                        {handleNavigation() === 'admin' ?
                            <>
                                <SidebarLinks url='/dashboard-admin' title='Dashboard' className={isActive('/dashboard-admin') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex pl-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <HomeIcons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-alternatif-admin' title='Data Alternatif' className={isActive('/data-alternatif-admin') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Aicons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-kriteria-admin' title='Data Kriteria' className={isActive('/data-kriteria-admin') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Bicons />
                                </SidebarLinks>
                                <SidebarLinks url='/penilaian-alternatif-admin' title='Penilaian Matriks Keputusan' className={isActive('/penilaian-alternatif-admin') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Cicons />
                                </SidebarLinks>
                                <SidebarLinks url='/proses-perhitungan-admin' title='Proses Perhitungan' className={isActive('/proses-perhitungan-admin') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Dicons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-hasil-admin' title='Data Hasil Keputusan' className={isActive('/data-hasil-admin') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Eicons />
                                </SidebarLinks>
                            </>
                            :
                            <>
                                <SidebarLinks url='/dashboard-user' title='Dashboard' className={isActive('/dashboard-user') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <HomeIcons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-alternatif-user' title='Data Alternatif' className={isActive('/data-alternatif-user') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Aicons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-kriteria-user' title='Data Kriteria' className={isActive('/data-kriteria-user') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Bicons />
                                </SidebarLinks>
                                <SidebarLinks url='/penilaian-alternatif-user' title='Penilaian Matriks Keputusan' className={isActive('/penilaian-alternatif-user') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Cicons />
                                </SidebarLinks>
                                <SidebarLinks url='/proses-perhitungan-user' title='Proses Perhitungan ' className={isActive('/proses-perhitungan-user') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Dicons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-hasil-user' title='Data Hasil Keputusan' className={isActive('/data-hasil-user') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                    <Eicons />
                                </SidebarLinks>
                            </>
                        }
                    </ul>
                </div>
                <h1 className='ml-1 text-gray-400 text-xs'>About</h1>
                <div className='grid grid-cols-1 pt-4'>
                    <ul>
                        {handleNavigation() === "admin" ?
                            <>
                                <Link to='/users'>
                                    <li className={isActive('/users') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                        <ProfileIcons />
                                        <h1 className='ml-3 text-sm text-gray-700'>Kelola User</h1>
                                    </li>
                                </Link>
                                <Link to='https://www.instagram.com/combuchacoffee/?igshid=YmMyMTA2M2Y%3D'>
                                    <li className={isActive('https://www.instagram.com/combuchacoffee/?igshid=YmMyMTA2M2Y%3D') ? 'bg-slate-100 shadow py-2 mb-7 flex pl-1 text-gray-600 items-center hover:text-gray-400' : 'mb-7 flex ml-1 items-center text-gray-700 hover:text-gray-400'}>
                                        <ProfileIcons />
                                        <h1 className='ml-3 text-sm text-gray-700'>Combucha Coffee</h1>
                                    </li>
                                </Link>
                            </>
                            : <Link to='https://www.instagram.com/combuchacoffee/?igshid=YmMyMTA2M2Y%3D'>
                                <li className='pb-8 flex items-center ml-1'>
                                    <ProfileIcons />
                                    <h1 className='ml-3 text-sm text-gray-700'>Combucha Coffee</h1>
                                </li>
                            </Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
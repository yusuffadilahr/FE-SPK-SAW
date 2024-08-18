import React from 'react'
import { Link } from 'react-router-dom'
import SidebarLinks from './sidebarLinks'
import Aicons from '../../icons/AIcons'
import Bicons from '../../icons/Bicons'
import Cicons from '../../icons/Cicons'
import Eicons from '../../icons/Eicons'
import HomeIcons from '../../icons/homeIcons'
import Dicons from '../../icons/Dicons'
import ProfileIcons from '../../icons/profileIcons'

const Sidebar = () => {

    const handleNavigation = () => {
        return localStorage.getItem('role')
    }
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
                <h1 className='ml-2 text-gray-400 text-xs'>Navigation</h1>
                <div className='grid grid-cols-1 pt-4'>
                    <ul>
                        {handleNavigation() === 'admin' ?
                            <>
                                <SidebarLinks url='/dashboard-admin' title='Dashboard'>
                                    <HomeIcons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-alternatif-admin' title='Data Alternatif'>
                                    <Aicons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-kriteria-admin' title='Data Kriteria'>
                                    <Bicons />
                                </SidebarLinks>
                                <SidebarLinks url='/penilaian-alternatif-admin' title='Penilaian Alternatif'>
                                    <Cicons />
                                </SidebarLinks>
                                <SidebarLinks url='/proses-perhitungan-admin' title='Proses Perhitungan'>
                                    <Dicons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-hasil-admin' title='Data Hasil Keputusan'>
                                    <Eicons />
                                </SidebarLinks>
                            </>
                            :
                            <>
                                <SidebarLinks url='/dashboard-user' title='Dashboard'>
                                    <HomeIcons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-alternatif-user' title='Data Alternatif'>
                                    <Aicons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-kriteria-user' title='Data Kriteria'>
                                    <Bicons />
                                </SidebarLinks>
                                <SidebarLinks url='/penilaian-alternatif-user' title='Penilaian Alternatif'>
                                    <Cicons />
                                </SidebarLinks>
                                <SidebarLinks url='/proses-perhitungan-user' title='Proses Perhitungan '>
                                    <Dicons />
                                </SidebarLinks>
                                <SidebarLinks url='/data-hasil-user' title='Data Hasil Keputusan'>
                                    <Eicons />
                                </SidebarLinks>
                            </>
                        }
                    </ul>
                </div>
                <h1 className='ml-2 text-gray-400 text-xs'>About</h1>
                <div className='grid grid-cols-1 pt-4'>
                    <ul>
                        {handleNavigation() === "admin" ?
                            <>
                                <Link to='/users'>
                                    <li className='pb-8 flex items-center ml-2'>
                                        <ProfileIcons />
                                        <h1 className='ml-3 text-sm text-gray-700'>Profile</h1>
                                    </li>
                                </Link>
                                <Link to='https://www.instagram.com/combuchacoffee/?igshid=YmMyMTA2M2Y%3D'>
                                    <li className='pb-8 flex items-center ml-2'>
                                        <ProfileIcons />
                                        <h1 className='ml-3 text-sm text-gray-700'>Combucha Coffee</h1>
                                    </li>
                                </Link>
                            </>
                            : <Link to='https://www.instagram.com/combuchacoffee/?igshid=YmMyMTA2M2Y%3D'>
                                <li className='pb-8 flex items-center ml-2'>
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
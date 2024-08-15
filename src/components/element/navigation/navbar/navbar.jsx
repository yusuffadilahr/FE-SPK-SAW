import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcons from '../../icons/homeIcons'
import Eicons from '../../icons/Eicons'
import Aicons from '../../icons/AIcons'
import Bicons from '../../icons/Bicons'
import LogoutIcons from '../../icons/logoutIcons'
import UpIcons from '../../icons/upIcons'
import DownIcons from '../../icons/downIcons'
import NavbarLinks from './navbarLinks'
import { Logout } from '../../../../service/auth.service'

const NavbarTab = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const { judul = 'Judul' } = props

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleLogout = (e) => {
        e.preventDefault()
        const data = {
            username: e.target.value,
            password: e.target.value
        }
        Logout(data, (status, res) => {
            if (status) {
                navigate('/')
                localStorage.removeItem('secretKey')
                console.log('Ini respon berhasil', res)
            } else {
                console.log('Errorrrr', res)
            }
        })
    }
    return (
        <Fragment>
            <div className='fixed top-0 left-0 w-full z-0'>
                <nav className='w-full h-16 bg-white border-b flex items-center'>
                    <div className='flex-1 flex justify-end items-center pr-5'>
                        {/* <ButtonCustom text='text-black' color='bg-white border hover:bg-black hover:text-white' bulat='rounded-xl'>Logout</ButtonCustom> */}
                        <button onClick={handleClick} className='flex items-center'>
                            <p>username</p>
                            {isOpen ?
                                <UpIcons />
                                :
                                <DownIcons />
                            }
                            {isOpen && (
                                <div className='absolute mt-80 z-20 right-0 w-72 h-72 bg-white shadow rounded-lg'>
                                    <div className='p-5 flex w-full'>
                                        <ul className='w-full'>
                                            <NavbarLinks title='Dashboard Jos' url='/dashboard-admin'>
                                                <HomeIcons style='size-4 mr-2' />
                                            </NavbarLinks>
                                            <NavbarLinks title='Data Alternatif Jos' url='/data-alternatif-admin'>
                                                <Aicons size='size-4 mr-2' />
                                            </NavbarLinks>
                                            <NavbarLinks title='Data Kriteria Jos' url='/data-kriteria-admin'>
                                                <Bicons size='size-4 mr-2' />
                                            </NavbarLinks>
                                            <NavbarLinks title='Data Hasil Keputusan Jos' url='/data-hasil-admin'>
                                                <Eicons style='size-4 mr-2' />
                                            </NavbarLinks>
                                            <button onClick={handleLogout}>
                                                logout
                                            </button>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </button>
                    </div>
                </nav>
                <div className='w-full h-4 bg-blue-500 pl-72 flex items-center'>
                    <h1 className='text-[9px] flex items-center text-white'>{judul}</h1>
                </div>
            </div>
        </Fragment>
    )
}

export default NavbarTab
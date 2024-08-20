import React, { Fragment } from 'react'
import pp from '../../assets/combucha.jpg'
import pp1 from '../../assets/kopi1.jpg'
import pp2 from '../../assets/kopi2.jpg'
import ButtonCustom from '../../components/element/button/button'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <Fragment>
            <nav className='top-0 w-full z-40 fixed flex h-20 items-center bg-white'>
                <div className='grid grid-cols-2 w-full bg-white'>
                    <div className='flex justify-start items-center pl-20'>
                        <Link to='#'>
                            <img src={pp} alt="Logo" className='w-32' />
                        </Link>
                    </div>
                    <div className='flex justify-end pr-20 items-center w-full'>
                        <Link to='https://instagram.com/combuchacoffee'>
                            <ButtonCustom bulat='rounded-full' color='bg-transparent border border-red-800 mr-1 hover:bg-red-800' text='text-red-800 hover:text-white'>Combucha Coffee</ButtonCustom>
                        </Link>
                        <Link to='/login'>
                            <ButtonCustom bulat='rounded-full' color='bg-transparent border border-red-800 mr-1 hover:bg-red-800' text='text-red-800 hover:text-white'>Login</ButtonCustom>
                        </Link>
                        <Link to='/register'>
                            <ButtonCustom bulat='rounded-full' color='bg-transparent border border-red-800 mr-1 hover:bg-red-800' text='text-red-800 hover:text-white'>Regirster</ButtonCustom>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className='flex bg-red-50 w-full h-screen justify-center items-center'>
                <div className='grid grid-cols-2 w-full h-full'>
                    {/* <div className='flex justify-start items-center w-1/2 h-full'>
                        <img src={pp1} alt="" className='w-full ml-20 animate-fade-left' />
                        <img src={pp2} alt="" className='z-10 absolute w-80 ml-96 animate-fade-up' />
                    </div>
                    <div className='w-1/2 flex justify-center items-center h-full'>
                        <h1>
                            Sistem Pendukung Keputusan Kopi Terbaik Menggunakan Metode SAW
                        </h1>
                    </div> */}
                    <div className='flex justify-center items-center'>
                        <img src={pp1} alt="" className='w-96 mr-32 pb-10 animate-fade-left' />
                        <img src={pp2} alt="" className='z-10 absolute pt-72 w-80 ml-[300px] animate-fade-up' />
                        <h1 className='absolute pb-[100px] pl-[450px] font-bold animate-fade-up'>COFFEE & ROASTERY</h1>
                        <h1 className='absolute pt-[350px] pr-72 font-bold animate-fade-up'>COMBUCHA</h1>
                        <h1 className='absolute pt-[380px] pr-72 text-xs animate-fade-up'>Coffee</h1>
                    </div>
                    <div className='flex justify-center items-center text-3xl z-20 font-bold'>
                        <div className="grid grid-cols-1 text-center">
                            {/* SISTEM PENDUKUNG KEPUTUSAN PEMILIHAN
BIJI KOPI PADA COMBUCHA COFFEE DENGAN METODE
SIMPLE ADDITIVE WEIGHTING (SAW) */}
                            <h1>Sistem Penunjang Keputusan</h1>
                            <h1>Pemilihan Biji Kopi Pada Combucha Coffee</h1>
                            <h1>Dengan Metode Simple Addictive Weighting (SAW)</h1>
                            <div className='flex w-full pt-5 justify-center items-center'>
                                <Link to='/login'>
                                    <ButtonCustom bulat='rounded-full' color='bg-red-800 border border-red-800 mr-1 hover:bg-red-700 animate-bounce' text='text-white hover:text-white'>Sign In</ButtonCustom>
                                </Link>
                                <Link to='register'>
                                    <ButtonCustom bulat='rounded-full' color='bg-transparent border border-red-800 mr-1 hover:bg-red-800  animate-bounce' text='text-red-800 hover:text-white'>Sign Up</ButtonCustom>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className='w-full h-5 bottom-0 bg-red-900 absolute'>
                    <div className='flex justify-center items-center w-full h-full'>
                    <h1 className='text-[8px] text-white'>Copyright @ 2024</h1>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default LandingPage

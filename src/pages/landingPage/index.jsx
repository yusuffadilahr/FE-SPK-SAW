import React, { Fragment } from 'react'
import pp from '../../assets/combucha.jpg'
import pp1 from '../../assets/kopi1.jpg'
import pp2 from '../../assets/kopi2.jpg'
import ButtonCustom from '../../components/element/button/button'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <Fragment>
            {/* Navbar */}
            <nav className='fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md shadow-sm'>
                <div className='max-w-7xl mx-auto flex justify-between items-center px-8 h-20'>
                    <Link to='#' className="flex items-center">
                        <img src={pp} alt="Logo" className='w-28 hover:scale-105 transition-transform duration-300' />
                    </Link>
                    <div className='flex gap-3'>
                        <Link to='https://instagram.com/combuchacoffee'>
                            <ButtonCustom bulat='rounded-full' color='bg-transparent border border-red-800 px-4 py-2 hover:bg-red-800 transition-colors' text='text-red-800 hover:text-white text-sm font-medium'>Combucha Coffee</ButtonCustom>
                        </Link>
                        <Link to='/login'>
                            <ButtonCustom bulat='rounded-full' color='bg-transparent border border-red-800 px-4 py-2 hover:bg-red-800 transition-colors' text='text-red-800 hover:text-white text-sm font-medium'>Login</ButtonCustom>
                        </Link>
                        <Link to='/register'>
                            <ButtonCustom bulat='rounded-full' color='bg-red-800 border border-red-800 px-4 py-2 hover:bg-red-700 transition-colors' text='text-white text-sm font-medium'>Register</ButtonCustom>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className='relative flex w-full min-h-screen items-center justify-center bg-gradient-to-tr from-red-100 via-white to-red-50 pt-20'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8'>

                    {/* Left - Image & Overlay Text */}
                    <div className='relative flex justify-center items-center'>
                        <img src={pp1} alt="" className='w-96 rounded-xl shadow-lg animate-fade-left' />
                        <img src={pp2} alt="" className='absolute bottom-0 right-0 w-64 rounded-lg shadow-xl animate-fade-up' />
                        <div className="absolute top-10 left-5 text-left">
                            <h1 className='text-3xl md:text-5xl font-extrabold text-red-900 drop-shadow animate-fade-up'>COFFEE & ROASTERY</h1>
                            <h2 className='text-lg md:text-2xl font-semibold text-gray-700 animate-fade-up delay-200'>Combucha Coffee</h2>
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className='flex flex-col justify-center items-start text-gray-900 space-y-4'>
                        <h1 className='text-3xl md:text-4xl font-extrabold leading-tight'>
                            Sistem Penunjang Keputusan <br />
                            Pemilihan Biji Kopi <span className='text-red-800'>Combucha Coffee</span>
                        </h1>
                        <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                            Mendukung pemilihan biji kopi terbaik menggunakan metode 
                            <span className="font-semibold"> Simple Additive Weighting (SAW)</span>.
                        </p>
                        <div className='flex gap-3 pt-4'>
                            <Link to='/login'>
                                <ButtonCustom bulat='rounded-full' color='bg-red-800 border border-red-800 px-6 py-2 hover:bg-red-700 animate-pulse' text='text-white text-base font-semibold'>Sign In</ButtonCustom>
                            </Link>
                            <Link to='/register'>
                                <ButtonCustom bulat='rounded-full' color='bg-transparent border border-red-800 px-6 py-2 hover:bg-red-800 animate-pulse' text='text-red-800 hover:text-white text-base font-semibold'>Sign Up</ButtonCustom>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='w-full py-4 bg-white shadow-inner'>
                <div className='flex justify-center items-center'>
                    <p className='text-xs text-gray-600'>© 2024 Combucha Coffee. All rights reserved.</p>
                </div>
            </footer>
        </Fragment>
    )
}

export default LandingPage

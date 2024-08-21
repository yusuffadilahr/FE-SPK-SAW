import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Aicons from '../../element/icons/AIcons'
import Dicons from '../../element/icons/Dicons'
import Bicons from '../../element/icons/Bicons'
import ProfileIcons from '../../element/icons/profileIcons'
import { getPerhitunganData } from '../../../service/data.service'
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [penilaian, setPenilaian] = useState([])
    const navigate = useNavigate()

    const tesCard = [
        { id: 1, name: 'Data Alternatif', url: '/data-alternatif-admin', icons: <Aicons /> },
        { id: 2, name: 'Data Kriteria', url: '/data-kriteria-admin', icons: <Bicons /> },
        { id: 3, name: 'Penilaian Keputusan', url: '/penilaian-alternatif-admin', icons: <Dicons /> },
        { id: 4, name: 'Hasil Keputusan', url: '/data-hasil-admin', icons: <ProfileIcons /> },
    ]

    useEffect(() => {
        getPerhitunganData((res) => {
            setPenilaian(res.data.data.perangkingan)
            if (res.data.statusCode === 400) {
                alert(res.data.message)
                alert('Harap isi data penilaian alternatif terlebih dahulu')
                navigate('/penilaian-alternatif-admin')
            }
        })
    }, [])
    const data = {
        labels: penilaian.map((item) => item.alternatif),
        datasets: [
            {
                label: 'Hasil Penilaian',
                data: penilaian.map((item) => item.hasil),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const handleUser = localStorage.getItem('username')

    return (
        <Fragment>
            <div className='flex'>
                <div className='w-1/6 h-screen left-0 top-0 bg-transparent'>
                    <h1>Tesss</h1>
                </div>
                <div className='w-5/6 h-screen left-0 top-0 bg-white pt-24 p-20'>
                <div className='w-full bg-red-400 h-14 flex items-center justify-center'>
                        <h1 className='text-2xl text-black'>Selamat Datang, <span className='font-bold'>{handleUser}!</span></h1>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='flex justify-center items-center pt-5 w-full h-full'>
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
                    <div className='p-10 w-full pl-20 h-fit items-center justify-center flex'>
                        <div className='w-full pb-5 flex justify-center'>
                            <div className='grid grid-cols-2 w-full'>
                                <div className='flex justify-start items-center w-[400px]'>
                                    <Bar data={data} options={{ responsive: true }} />
                                </div>
                                <div className='flex justify-end items-center w-[400px]'>
                                    <Line data={data} options={{ responsive: true }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard

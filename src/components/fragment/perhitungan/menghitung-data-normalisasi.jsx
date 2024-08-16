import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import { getPerhitunganData } from '../../../service/data.service'
import Input from '../../element/form/input'

const MenghitungDataNormalisasi = () => {
    const [entriesPerPage, setEntriesPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [isMenghitungNormalisasi, setIsMenghitungNormalisasi] = useState([])

    useEffect(() => {
        getPerhitunganData((res) => {
            setIsMenghitungNormalisasi(res.data.data.hasil_normalisasi)
        })
    })

    const totalPagesNormalisasi = Math.ceil(isMenghitungNormalisasi.length / entriesPerPage)
    const paginatedDataNormalisasi = isMenghitungNormalisasi.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

    const handlePageChangeNormalisasi = (page) => {
        setCurrentPage(page)
    }

    const handleEntriesChangeNormalisasi = (e) => {
        setEntriesPerPage(parseInt(e.target.value))
        setCurrentPage(1)
    }
    return (
        <div className='w-full h-fit flex justify-center pt-2 items-center'>
            <div className='flex justify-center items-center'>
                <div className='w-[1000px] bg-white rounded-lg h-fit'>
                    <div className='w-full p-5 bg-white rounded border'>
                        <h1 className='font-semibold text-sm'>2. Menghitung Data Normalisasi</h1>
                        <div className='grid grid-cols-2 w-full mt-5 mb-2'>
                            <div className='flex items-center justify-start'>
                                <Label htmlFor='entries-per-page' style='mr-2 text-[11px]'>Show</Label>
                                <select id='entries-per-page' value={entriesPerPage} onChange={handleEntriesChangeNormalisasi} className='border p-1 text-[11px]'>
                                    <option value={5}>5</option>
                                </select>
                                <span className='ml-2 text-[11px]'>entries</span>
                            </div>
                            <div className='flex justify-end items-center text-[11px]'>
                                <div className='border flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="size-3 ml-2 flex items-center text-slate-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <Input edit='py-1 px-1 pl-2' border='text-slate' type='text' placeholder='Cari Data' />
                                </div>
                            </div>
                        </div>
                        <table className='w-full text-center bg-white text-sm'>
                            <thead className='bg-gray-100'>
                                <tr>
                                    <th className='border p-2'>No</th>
                                    <th className='border p-2'>Alternatif</th>
                                    <th className='border p-2'>Kriteria</th>
                                    <th className='border p-2'>Bobot Kriteria</th>
                                    <th className='border p-2'>Keterangan</th>
                                    <th className='border p-2'>Nilai Rating Bobot</th>
                                    <th className='border p-2'>Nilai Alternatif</th>
                                    <th className='border p-2'>Pembagi</th>
                                </tr>
                            </thead>
                            {paginatedDataNormalisasi.map((data, i) => (
                                <tbody key={i}>
                                    <tr>
                                        <td className='border p-2'>{(currentPage - 1) * entriesPerPage + i + 1}</td>
                                        <td className='border p-2'>{data.alternatif}</td>
                                        <td className='border p-2'>{data.kriteria}</td>
                                        <td className='border p-2'>{data.bobot_kriteria}</td>
                                        <td className='border p-2'>{data.keterangan_kriteria}</td>
                                        <td className='border p-2'>{data.nilai_rating_bobot}</td>
                                        <td className='border p-2'>{data.nilai_alternatif}</td>
                                        <td className='border p-2'>{data.pembagi}</td>
                                    </tr>
                                </tbody>
                            ))
                            }
                        </table>
                        <div className='flex items-center pt-4'>
                            <div className='grid grid-cols-2 w-full'>
                                <div className='flex justify-start items-start'>
                                    <span className='text-xs'>Page {currentPage} of {totalPagesNormalisasi}</span>
                                </div>
                                <div className='flex justify-end items-end'>
                                    <ButtonCustom
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChangeNormalisasi(currentPage - 1)}
                                        color='bg-white border hover:bg-black mr-2 rounded disabled:bg-gray-200'
                                        text='text-black hover:text-white disabled:text-black'
                                        bulat='rounded-xl'>
                                        Previous
                                    </ButtonCustom>
                                    <ButtonCustom
                                        disabled={currentPage === totalPagesNormalisasi}
                                        onClick={() => handlePageChangeNormalisasi(currentPage + 1)}
                                        color='bg-white border hover:bg-black mr-2 rounded disabled:bg-gray-200'
                                        text='text-black hover:text-white disabled:text-black'
                                        bulat='rounded-xl'>
                                        Next
                                    </ButtonCustom>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenghitungDataNormalisasi

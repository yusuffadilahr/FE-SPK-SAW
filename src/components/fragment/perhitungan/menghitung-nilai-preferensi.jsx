import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import { getPerhitunganData } from '../../../service/data.service'
import Label from '../../element/form/label'
import Input from '../../element/form/input'

const MenghitungNilaiPreferensi = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [entriesPerPage, setEntriesPerPage] = useState(5)
    const [isNilaiPreferensi, setIsNilaiPreferensi] = useState([])

    useEffect(() => {
        getPerhitunganData((res) => {
            setIsNilaiPreferensi(res.data.data.hasil_preperensi)
        })
    })

    const totalPagesPreferensi = Math.ceil(isNilaiPreferensi.length / entriesPerPage)
    const paginatedPreferensi = isNilaiPreferensi.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleEntriesChange = (e) => {
        setEntriesPerPage(parseInt(e.target.value))
        setCurrentPage(1)
    }
    return (
        <div className='w-full h-fit flex justify-center pt-2 items-center'>
            <div className='flex justify-center items-center'>
                <div className='w-[1000px] bg-white rounded-lg h-fit'>
                    <div className='w-full p-5 bg-white rounded border'>
                        <h1 className='font-semibold text-sm mb-2'>4. Menghitung Nilai Preferensi</h1>
                        <div className='grid grid-cols-2 w-full mt-5 mb-2'>
                            <div className='flex items-center justify-start'>
                                <Label htmlFor='entries-per-page' style='mr-2 text-[11px]'>Show</Label>
                                <select id='entries-per-page' value={entriesPerPage} onChange={handleEntriesChange} className='border p-1 text-[11px]'>
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
                                    <th className='border p-2'>Nilai Rating Bobot</th>
                                    <th className='border p-2'>Nilai Normalisasi</th>
                                </tr>
                            </thead>
                            {paginatedPreferensi.map((data, i) => (
                                <tbody key={i}>
                                    <tr>
                                        <th className='border p-2'>{(currentPage - 1) * entriesPerPage + i + 1}</th>
                                        <td className='border p-2'>{data.alternatif}</td>
                                        <td className='border p-2'>{data.kriteria}</td>
                                        <td className='border p-2'>{data.nilai_rating_bobot}</td>
                                        <td className='border p-2'>{data.nilai_normalisasi}</td>
                                    </tr>
                                </tbody>
                            ))
                            }
                        </table>
                        <div className='flex items-center pt-4'>
                            <div className='grid grid-cols-2 w-full'>
                                <div className='flex justify-start items-start'>
                                    <span className='text-xs'>Page {currentPage} of {totalPagesPreferensi}</span>
                                </div>
                                <div className='flex justify-end items-end'>
                                    <ButtonCustom
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        color='bg-white border hover:bg-black mr-2 rounded disabled:bg-gray-200'
                                        text='text-black hover:text-white disabled:text-black'
                                        bulat='rounded-xl'>
                                        Previous
                                    </ButtonCustom>
                                    <ButtonCustom
                                        disabled={currentPage === totalPagesPreferensi}
                                        onClick={() => handlePageChange(currentPage + 1)}
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

export default MenghitungNilaiPreferensi

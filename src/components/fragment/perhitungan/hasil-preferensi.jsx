import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import { getPerhitunganData } from '../../../service/data.service'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import SearchIcons from '../../element/icons/searchIcons'

const HasilPreferensi = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [entriesPerPage, setEntriesPerPage] = useState(5)
    const [isPreferensi, setIsPreferensi] = useState([])

    useEffect(() => {
        getPerhitunganData((res) => {
            const data = res.data.data.total_preperensi.map(item => ({
                ...item,
                hasil: parseFloat(item.hasil) 
            }));
            setIsPreferensi(data);
        })
    }, [])

    const totalPagesHasilPreferensi = Math.ceil(isPreferensi.length / entriesPerPage)
    const paginatedHasilPreferensi = isPreferensi.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)
    
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
                <div className='w-[1000px] pb-10 bg-white rounded-lg h-fit'>
                    <div className='w-full p-5 bg-white rounded border'>
                        <h1 className='font-semibold text-sm mb-2'>5. Hasil Preferensi</h1>
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
                                    <SearchIcons />
                                    <Input edit='py-1 px-1 pl-2' border='text-slate' type='text' placeholder='Cari Data' />
                                </div>
                            </div>
                        </div>
                        <table className='w-full text-center bg-white text-sm'>
                            <thead className='bg-gray-100'>
                                <tr>
                                    <th className='border p-2'>No</th>
                                    <th className='border p-2'>Alternatif</th>
                                    <th className='border p-2'>Hasil</th>
                                </tr>
                            </thead>
                            {paginatedHasilPreferensi.map((data, i) => (
                                <tbody key={i}>
                                    <tr>
                                        <td className='border p-2'>{(currentPage - 1) * entriesPerPage + i + 1}</td>
                                        <td className='border p-2'>{data.alternatif}</td>
                                        <td className='border p-2'>{data.hasil.toFixed(3)}</td>
                                    </tr>
                                </tbody>
                            ))
                            }
                        </table>
                        <div className='flex items-center pt-4'>
                            <div className='grid grid-cols-2 w-full'>
                                <div className='flex justify-start items-start'>
                                    <span className='text-xs'>Page {currentPage} of {totalPagesHasilPreferensi}</span>
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
                                        disabled={currentPage === totalPagesHasilPreferensi}
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

export default HasilPreferensi

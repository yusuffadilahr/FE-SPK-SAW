import React, { Fragment, useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import { getPerhitunganData } from '../../../service/data.service'
import { useNavigate } from 'react-router-dom'
import HasilPreferensi from './hasil-preferensi'
import MenghitungNilaiPreferensi from './menghitung-nilai-preferensi'
import HasilNormalisasi from './hasil-normalisasi'
import MenghitungDataNormalisasi from './menghitung-data-normalisasi'
import Input from '../../element/form/input'
import SearchIcons from '../../element/icons/searchIcons'

const ProsesPerhitungan = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [entriesPerPage, setEntriesPerPage] = useState(5)
    const [dataProductThdKriteria, setDataProductThdKriteria] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getPerhitunganData((res) => {
            setDataProductThdKriteria(res.data.data.data_product_terhadap_kriteria)
            if (res.data.statusCode === 400) {
                alert(res.data.message)
                alert('Harap isi data penilaian alternatif terlebih dahulu')
                navigate('/penilaian-alternatif-admin')
            }
        })
    }, [])

    const totalPagesThdKriteria = Math.ceil(dataProductThdKriteria.length / entriesPerPage)
    const paginatedDataThdKriteria = dataProductThdKriteria.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleEntriesChange = (event) => {
        setEntriesPerPage(parseInt(event.target.value))
        setCurrentPage(1)
    }

    return (
        <Fragment>
            <div className='flex'>
                <div className='w-1/6 h-screen flex left-0 top-0'>
                </div>
                <div className='w-5/6 h-screen top-0 left-0 pt-24'>
                    <div className='overflow-x-auto flex justify-center items-center'>
                        <div className='w-full h-fit flex justify-center items-center'>
                            <div className='flex justify-center items-center'>
                                <div className='w-[1000px] bg-white rounded-lg h-fit'>
                                    <div className='w-full p-5 bg-white rounded border'>
                                        <div className='mb-3 p-2 py-2 bg-blue-300 text-sm flex items-center w-full'>
                                            <h1><span className='font-bold mr-1'>Home /</span>Proses Perhitungan</h1>
                                        </div>
                                        <h1 className='font-semibold text-sm'>1. Data Produk Terhadap Kriteria</h1>
                                        <div className='grid grid-cols-2 w-full mb-2 mt-5'>
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
                                                    <th className='border p-2'>Kriteria</th>
                                                    <th className='border p-2'>Keterangan</th>
                                                    <th className='border p-2'>Bobot Kriteria</th>
                                                    <th className='border p-2'>Nilai Alternatif</th>
                                                    <th className='border p-2'>Nilai Rating Bobot</th>
                                                </tr>
                                            </thead>
                                            {paginatedDataThdKriteria.map((data, i) => (
                                                <tbody key={i}>
                                                    <tr>
                                                        <td className='border p-2'>{(currentPage - 1) * entriesPerPage + i + 1}</td>
                                                        <td className='border p-2'>{data.alternatif}</td>
                                                        <td className='border p-2'>{data.kriteria}</td>
                                                        <td className='border p-2'>{data.keterangan_kriteria}</td>
                                                        <td className='border p-2'>{data.bobot_kriteria}</td>
                                                        <td className='border p-2'>{data.nilai_alternatif}</td>
                                                        <td className='border p-2'>{data.nilai_rating_bobot}</td>
                                                    </tr>
                                                </tbody>
                                            ))
                                            }
                                        </table>
                                        <div className='flex items-center pt-4'>
                                            <div className='grid grid-cols-2 w-full'>
                                                <div className='flex justify-start items-start'>
                                                    <span className='text-xs'>Page {currentPage} of {totalPagesThdKriteria}</span>
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
                                                        disabled={currentPage === totalPagesThdKriteria}
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
                    </div>
                    <MenghitungDataNormalisasi />
                    <HasilNormalisasi />
                    <MenghitungNilaiPreferensi />
                    <HasilPreferensi />
                </div>
            </div>
        </Fragment>
    )
}

export default ProsesPerhitungan

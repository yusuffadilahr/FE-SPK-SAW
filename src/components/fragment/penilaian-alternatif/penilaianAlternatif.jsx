import React, { Fragment, useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import { Link, useParams } from 'react-router-dom'
import { deletePenilaianById, getAlternatifData, getDataKriteria, getPenilaianData } from '../../../service/data.service'
import Input from '../../element/form/input'
import SearchIcons from '../../element/icons/searchIcons'
import AddIcons from '../../element/icons/addIcons'

const PenilaianAlternatif = () => {
    const {id_nilai_alternatif} = useParams()
    const [entriesPerPage, setEntriesPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [penilaian, setPenilaian] = useState([])
    // const [getAlternatif, setGetAlternatif] = useState([])
    // const [getKriteria, setGetKriteria] = useState([])
    // const [alternatifData, setAlternatifData] = useState([])
    // const [kriteriaData, setKriteriaData] = useState([])
    const headerTable = (
        {
            no: 'No',
            alternatif: 'Alternatif',
            kriteria: 'Kriteria',
            nilai: 'Nilai',
            action: 'Action'
        }
    )

    // const combineData = getAlternatif.flatMap((alt) => {
    //     return getKriteria.map(kriteria => {
    //         return {
    //             id: `${alt.id_alternatif} - ${kriteria.id_kriteria}`,
    //             alternatif: alt.alternatif,
    //             kriteria: kriteria.kriteria,
    //             nilai: kriteria.bobot_kriteria
    //         }
    //     })
    // })

    // useEffect(() => {
    //     getAlternatifData((res) => {
    //         setGetAlternatif(res.data)
    //     })
    //     getDataKriteria((res) => {
    //         setGetKriteria(res.data)
    //     })
    // }, [])

    useEffect(() => {
        getPenilaianData((res) => {
            const penilaianData = res.data
            setPenilaian(penilaianData)
        })
    }, [])

    const handleDeletPenilaianById = (id_nilai_alternatif) => {
        if (window.confirm('Apakah anda yakin ingin menghapus data ini?')) {
            deletePenilaianById(id_nilai_alternatif, (status, res) => {
                setPenilaian(penilaian.map((i) => i.id_nilai_alternatif === id_nilai_alternatif))
                if (status) {
                    alert(res.message)
                    window.location.reload()
                }
                else {
                   alert(res.message)
                }
            })
        }
    }

    const totalPages = Math.ceil(penilaian.length / entriesPerPage)
    const paginatedData = penilaian.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

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
                <div className='w-1/6 h-screen bg-gray-100 fixed top-0 left-0'>
                </div>
                <div className='w-5/6 h-screen ml-[16.66%] p-4 bg-white pt-24'>
                    <div className='overflow-x-auto flex justify-center items-center'>
                        <div className='border bg-white rounded-lg shadow p-5 w-[1000px] h-fit mb-10'>
                            <div className='bg-white'>
                                <div className='mb-3'>
                                    <div className='mb-2 w-full p-2 py-2 bg-red-300 text-sm'>
                                        <h1><span className='font-bold mr-1'>Home /</span>Penilaian Keputusan</h1>
                                    </div>
                                    <Link to='/add-penilaian-alternatif-admin'>
                                        <ButtonCustom bulat='rounded-sm' fontSize='text-xs' text='flex items-center text-black hover:text-white' color='bg-white border hover:bg-black'>
                                            <AddIcons />
                                            Tambah Nilai Keputusan
                                        </ButtonCustom>
                                    </Link>
                                </div>
                                <div className='w-full border rounded-lg p-5'>
                                    <div className='w-full pb-5 flex items-center justify-between'>
                                        <div className='grid grid-cols-2 w-full'>
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
                                    </div>
                                    <table className='w-full text-sm text-center'>
                                        <thead className='bg-gray-100'>
                                            <tr className='border-b'>
                                                <th className='p-1 border'>{headerTable.no}</th>
                                                <th className='p-1 border'>{headerTable.alternatif}</th>
                                                <th className='p-1 border'>{headerTable.kriteria}</th>
                                                <th className='p-1 border'>{headerTable.nilai}</th>
                                                <th className='p-1 border'>{headerTable.action}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginatedData.map((body, index) => (
                                                <tr key={index} className='hover:bg-gray-50'>
                                                    <td className='p-1 border'>{(currentPage - 1) * entriesPerPage + index + 1}</td>
                                                    <td className='p-1 border'>{body.alternatif}</td>
                                                    <td className='p-1 border'>{body.kriteria}</td>
                                                    <td className='p-1 border'>{body.nilai_alternatif}</td>
                                                    <td className='p-1 border'>
                                                        <Link to={`/ubah-penilaian-admin/${body.id_nilai_alternatif}`}>
                                                            <ButtonCustom>Ubah</ButtonCustom>
                                                        </Link>
                                                        <ButtonCustom onClick={() => handleDeletPenilaianById(body.id_nilai_alternatif)} color='bg-red-600 hover:bg-red-700 m-1'>Hapus</ButtonCustom>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className='flex items-center pt-4'>
                                        <div className='grid grid-cols-2 w-full'>
                                            <div className='flex justify-start items-start'>
                                                <span className='text-xs'>Page {currentPage} of {totalPages}</span>
                                            </div>
                                            <div className='flex justify-end items-end'>
                                                <ButtonCustom
                                                    disabled={currentPage === 1}
                                                    color='bg-white border hover:bg-black mr-2 rounded disabled:bg-gray-200'
                                                    text='text-black hover:text-white disabled:text-black'
                                                    bulat='rounded-xl'
                                                    onClick={() => handlePageChange(currentPage - 1)}>
                                                    Previous
                                                </ButtonCustom>
                                                <ButtonCustom
                                                    disabled={currentPage === totalPages}
                                                    color='bg-white border hover:bg-black mr-2 rounded disabled:bg-gray-200'
                                                    text='text-black hover:text-white disabled:text-black'
                                                    bulat='rounded-xl'
                                                    onClick={() => handlePageChange(currentPage + 1)}>
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
            </div>
        </Fragment>
    )
}

export default PenilaianAlternatif

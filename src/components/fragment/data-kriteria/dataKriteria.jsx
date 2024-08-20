import React, { Fragment, useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import { Link } from 'react-router-dom'
import Label from '../../element/form/label'
import AddIcons from '../../element/icons/addIcons'
import { deleteDataKriteria, getDataKriteria } from '../../../service/data.service'
import Input from '../../element/form/input'
import SearchIcons from '../../element/icons/searchIcons'

const DataKriteria = () => {
    const [entriesPerPage, setEntriesPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [kriteria, setKriteria] = useState([])

    const headerTable = (
        {
            no: "No",
            kriteria: "Kriteria",
            weight: "Bobot",
            ket: "Keterangan Kriteria",
            act: 'Action'
        }
    )

    useEffect(() => {
        getDataKriteria((res) => {
            setKriteria(res.data)
        })
    }, [])

    const handleDelete = (id_kriteria) => {
        if (window.confirm('Apa anda yakin ingin menghapus ini?')) {
            deleteDataKriteria(id_kriteria, (status, res) => {
                setKriteria(kriteria.map((krit) => krit.id_kriteria === id_kriteria))
                if (status) {
                    alert(res.message)
                    window.location.reload()
                } else {
                    console.error(res.message)
                    alert(res.message)
                    window.location.reload()
                }
            })
        }
    }

    const kriteriaMap = kriteria.map((krit, i) => {
        return {
            no: i + 1,
            id_kriteria: krit.id_kriteria,
            kriteria: krit.kriteria,
            weight: krit.bobot_kriteria,
            ket: krit.keterangan_kriteria
        }
    })

    const totalPages = Math.ceil(kriteriaMap.length / entriesPerPage)
    const paginatedData = kriteriaMap.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

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
                <div className='w-5/6 h-screen ml-[16.66%] p-4 bg-white pt-24 mb-10'>
                    <div className='overflow-x-auto flex justify-center items-center'>
                        <div className='border bg-white shadow rounded-lg p-5 w-[1000px] h-fit'>
                            <div className='bg-white'>
                                <div className='mb-3'>
                                    <div className='mb-2 w-full p-2 py-2 bg-red-300 text-sm'>
                                        <h1><span className='font-bold mr-1'>Home /</span>Data Kriteria</h1>
                                    </div>
                                    <Link to='/add-kriteria-admin'>
                                        <ButtonCustom bulat='rounded-sm' fontSize='text-xs' text='flex items-center text-black hover:text-white' color='bg-white border hover:bg-black'>
                                            <AddIcons />
                                            Tambah Data Kriteria
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
                                                <th className='p-1 border'>{headerTable.kriteria}</th>
                                                <th className='p-1 border'>{headerTable.weight}</th>
                                                <th className='p-1 border'>{headerTable.ket}</th>
                                                <th className='p-1 border'>{headerTable.act}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginatedData.map((body) => (
                                                <tr key={body.id_kriteria} className='hover:bg-gray-50'>
                                                    <td className='p-1 border'>{body.no}</td>
                                                    <td className='p-1 border'>{body.kriteria}</td>
                                                    <td className='p-1 border'>{body.weight}</td>
                                                    <td className='p-1 border'>{body.ket}</td>
                                                    <td className='p-1 border'>
                                                        <Link to={`/data-kriteria-admin/${body.id_kriteria}`}>
                                                            <ButtonCustom>Ubah</ButtonCustom>
                                                        </Link>
                                                        <ButtonCustom
                                                            onClick={() => handleDelete(body.id_kriteria)}
                                                            color='bg-red-600 hover:bg-red-700 m-1'>Hapus</ButtonCustom>
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
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    color='bg-white border hover:bg-black mr-2 rounded disabled:bg-gray-200'
                                                    text='text-black hover:text-white disabled:text-black'
                                                    bulat='rounded-xl'>
                                                    Previous
                                                </ButtonCustom>
                                                <ButtonCustom
                                                    disabled={currentPage === totalPages}
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
            </div>
        </Fragment >
    )
}

export default DataKriteria

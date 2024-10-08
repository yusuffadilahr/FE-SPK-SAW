import React, { Fragment, useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import { Link, useParams } from 'react-router-dom';
import { deleteAlternatif, getAlternatifData } from '../../../service/data.service';
import Input from '../../element/form/input';
import SearchIcons from '../../element/icons/searchIcons';
import AddIcons from '../../element/icons/addIcons';

const DataAlternatif = () => {
    const { id_alternatif } = useParams()
    const [entriesPerPage, setEntriesPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [getAlternatif, setGetAlternatif] = useState([])

    const headerTable = {
        no: 'No',
        alternatif: 'Alternatif',
        act: 'Action'
    }

    useEffect(() => {
        getAlternatifData((res) => {
            setGetAlternatif(res.data)
        })
    }, [])

    const handleDelete = (id_alternatif) => {
        if (window.confirm('Apakah kamu ingin menghapus data ini?')) {
            deleteAlternatif(id_alternatif, (status, res) => {
                if (status) {
                    const cekData = getAlternatif.find((alt) => alt.id_alternatif === id_alternatif)
                    if (!cekData) {
                        setGetAlternatif(getAlternatif)
                    } else {
                        setGetAlternatif(getAlternatif.filter(i => (i.id_alternatif !== id_alternatif)))
                        window.location.reload()
                    }
                } else {
                    console.error('Gagal', res)
                }
            })
        }
    }

    // const alternatifData = getAlternatif?.map((alt, i) => {
    //     return {
    //         no: i + 1,
    //         id_alternatif: alt.id_alternatif,
    //         alternatif: alt.alternatif
    //     }
    // })

    const totalPages = Math.ceil(getAlternatif.length / entriesPerPage)

    const paginatedData = getAlternatif.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page)
    };

    const handleEntriesChange = (event) => {
        setEntriesPerPage(parseInt(event.target.value));
        setCurrentPage(1)
    };

    return (
        <Fragment>
            <div className='flex'>
                <div className='w-1/6 h-screen bg-gray-100 fixed top-0 left-0'>
                </div>
                <div className='w-5/6 h-screen ml-[16.66%] p-4 bg-white pt-24'>
                    <div className='overflow-x-auto flex justify-center items-center'>
                        <div className='border bg-white shadow rounded-lg p-5 w-[1000px] h-fit mb-10'>
                            <div className='bg-white'>
                                <div className='mb-3'>
                                    <div className='mb-2 w-full p-2 py-2 bg-red-300 text-sm'>
                                        <h1><span className='font-bold mr-1'>Home /</span>Data Alternatif</h1>
                                    </div>
                                    <Link to='/add-alternatif-admin'>
                                        <ButtonCustom bulat='rounded-sm' fontSize='text-xs' text='flex items-center text-black hover:text-white' color='bg-white border hover:bg-black'>
                                            <AddIcons />
                                            Tambah Data Alternatif
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
                                        <thead className='bg-slate-100'>
                                            <tr className='border-b'>
                                                <th className='p-1 border'>{headerTable.no}</th>
                                                <th className='p-1 border'>{headerTable.alternatif}</th>
                                                <th className='p-1 border'>{headerTable.act}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginatedData.map((body, i) => (
                                                <tr key={i} className='hover:bg-slate-50'>
                                                    <td className='p-1 border'>{(currentPage - 1) * entriesPerPage + i + 1}</td>
                                                    <td className='p-1 border'>{body.alternatif}</td>
                                                    <td className='p-1 border'>
                                                        <Link to={`/data-alternatif-admin/${body.id_alternatif}`}>
                                                            <ButtonCustom>Ubah</ButtonCustom>
                                                        </Link>
                                                        <ButtonCustom
                                                            color='bg-red-600 hover:bg-red-700 m-1'
                                                            onClick={() => handleDelete(body.id_alternatif)}>Hapus</ButtonCustom>
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
        </Fragment>
    )
}

export default DataAlternatif
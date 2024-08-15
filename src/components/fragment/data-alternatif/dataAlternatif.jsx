import React, { Fragment, useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import { Link, useParams } from 'react-router-dom';
import { deleteAlternatif, getAlternatifData } from '../../../service/data.service';

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
                    setGetAlternatif(getAlternatif.find((alt) => alt.id_alternatif === id_alternatif))
                    alert(res.message)
                    window.location.reload()
                } else {
                    console.error('gagallllll', res)
                }
            })
        }
    }
    const alternatifData = getAlternatif.map((alt, i) => {
        return {
            no: i + 1,
            id_alternatif: alt.id_alternatif,
            alternatif: alt.alternatif
        }
    })
    const totalPages = Math.ceil(alternatifData.length / entriesPerPage)

    const paginatedData = alternatifData.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

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
                <div className='w-5/6 h-screen ml-[16.66%] p-4 bg-gray-50 pt-24'>
                    <div className='overflow-x-auto flex justify-center items-center'>
                        <div className='border bg-white rounded-lg p-5 w-[1000px] h-fit'>
                            <div className='bg-white'>
                                <div className='mb-3'>
                                    <div className='mb-2 w-full p-2 py-2 bg-blue-300 text-sm'>
                                        <h1><span className='font-bold mr-1'>Home /</span>Data Alternatif</h1>
                                    </div>
                                    <Link to='/add-alternatif-admin'>
                                        <ButtonCustom bulat='rounded-sm' fontSize='text-xs' text='flex items-center text-black hover:text-white' color='bg-white border hover:bg-black'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            Tambah Data Alternatif
                                        </ButtonCustom>
                                    </Link>
                                </div>
                                <div className='w-full border rounded-lg p-5'>
                                    <div className='w-full pb-5 flex items-center justify-between'>
                                        <div className='flex items-center'>
                                            <Label htmlFor='entries-per-page' style='mr-2 text-[11px]'>Show</Label>
                                            <select id='entries-per-page' value={entriesPerPage} onChange={handleEntriesChange} className='border p-1 text-[11px]'>
                                                <option value={5}>5</option>
                                            </select>
                                            <span className='ml-2 text-[11px]'>entries</span>
                                        </div>
                                    </div>
                                    <table className='w-full text-sm text-center'>
                                        <thead className='bg-gray-100'>
                                            <tr className='border-b'>
                                                <th className='p-1 border'>{headerTable.no}</th>
                                                <th className='p-1 border'>{headerTable.alternatif}</th>
                                                <th className='p-1 border'>{headerTable.act}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginatedData.map((body) => (
                                                <tr key={body.id_alternatif} className='hover:bg-gray-50'>
                                                    <td className='p-1 border'>{body.no}</td>
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
import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import SearchIcons from '../../element/icons/searchIcons'
import Input from '../../element/form/input'
import { deleteDataUsers, getUsers, updateUsers } from '../../../service/user.service'

const Users = () => {
    const [isUser, setIsUser] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [entriesPerPage, setEntriesPerPage] = useState(5)

    useEffect(() => {
        getUsers((res) => {
            setIsUser(res.data.data)
        })
    }, [isUser])

    console.log("get user : ", isUser);

    const handleUpdate = (username) => {
        console.log(username)
        updateUsers(username, (res) => {
            if (res.data.statusCode === 200) {
                getUsers((res) => {
                    setIsUser(res.data.data)
                })
                alert(res.data.message)
            } else {
                alert(res.data.message)
            }
        })
    }

    const totalPages = Math.ceil(isUser.length / entriesPerPage)
    const paginatedData = isUser.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleEntriesChange = (e) => {
        setEntriesPerPage(parseInt(e.target.value))
        setCurrentPage(1)
    }

    const handleDelete = (username) => {
        if (window.confirm('Apakah anda yakin ingin menghapus user ini?')) {
            deleteDataUsers(username, (res) => {
                try {
                    if (res.statusCode === 200) {
                        getUsers((res) => {
                            setIsUser(res.data.data)
                        })
                        alert(res.message)
                    }
                    alert(res.message)
                } catch (error) {
                    alert("Ada Error : " + error)
                }
            })
        }
    }

    return (
        <div className='flex'>
            <div className='w-1/6 h-screen bg-gray-100 fixed top-0 left-0'>
            </div>
            <div className='w-5/6 h-screen ml-[16.66%] p-4 bg-white pt-24'>
                <div className='overflow-x-auto flex justify-center items-center'>
                    <div className='border bg-white rounded-lg p-5 w-[1000px] h-fit shadow mb-10'>
                        <div className='bg-white'>
                            <div className='mb-3'>
                                <div className='mb-2 w-full p-2 py-2 bg-red-300 text-sm'>
                                    <h1><span className='font-bold mr-1'>Home /</span>Profile</h1>
                                </div>
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
                                            <th className='p-1 border'>No</th>
                                            <th className='p-1 border'>Username</th>
                                            <th className='p-1 border'>Role</th>
                                            <th className='p-1 border'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedData.map((body, i) => (
                                            <tr key={i} className='hover:bg-gray-50'>
                                                <td className='p-1 border'>{(currentPage - 1) * entriesPerPage + i + 1}</td>
                                                <td className='p-1 border'>{body.username}</td>
                                                <td className='p-1 border'>{body.role}</td>
                                                <td className='p-1 border'>
                                                    <ButtonCustom
                                                        onClick={() => handleUpdate(body.username)}
                                                    >Ubah Role</ButtonCustom>
                                                    <ButtonCustom
                                                        onClick={() => handleDelete(body.username)}
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
    )
}

export default Users

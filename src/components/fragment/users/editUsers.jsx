import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { getUsernameByUsername, updateUsers } from '../../../service/user.service'

const EditUsers = () => {
    const [isGetUsername, setIsGetUsername] = useState([])
    const [isRole, setIsRole] = useState('user')
    const [cekRole, setCekRole] = useState('')
    const { username } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getUsernameByUsername(username, (res) => {
            setIsGetUsername(res.data)
            setCekRole(res.data.role)
            console.log('Ini respon getSingle', res.data);

        })
    }, [username])

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value

        if (cekRole === selectedRole) {
            alert('Anda harus memilih role yang berbeda')
        }
        setIsRole(selectedRole)
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        if (cekRole === isRole) {
            alert('Anda harus memilih role yang berbeda')
            return
        }

        const data = {
            username: isGetUsername.username,
            role: isRole
        }

        updateUsers(username, data, (res) => {
            try {
                console.log(res.data)
                alert(res.data.message)
                navigate('/users')
                if (res.data.role === "admin") {
                    console.log('anda memang admin')
                } else {

                }
            } catch (error) {
                console.error(error)
            }
        })
    }
    return (
        <div className='flex justify-center items-center w-full h-screen absolute'>
            <div className='w-1/6 flex h-screen'>
            </div>
            <div className='w-5/6 h-screen bg-white'>
                <div className='flex justify-center pt-20'>
                    <div className='w-full p-10'>
                        <div className='w-full h-fit pl-5 bg-white border p-2 rounded-lg shadow'>
                            <h1 className='font-bold mt-5'>Ubah Data Pengguna</h1>
                            <div className='flex pt-10 h-full'>
                                <div className='w-2/3'>
                                    <form onSubmit={handleUpdate} className='w-full'>
                                        <Label htmlFor='username'>Data Pengguna</Label>
                                        <Input placeholder={isGetUsername.username} name='username' type='text' value={isGetUsername.username} readOnly
                                        />
                                        <Label htmlFor='role'>Role</Label>
                                        <select onChange={handleRoleChange} name="role" id="role" className='w-full border text-xs mb-5 pl-2 py-1'>
                                            <option value="">-- Select Option --</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                        <div className='flex pb-10 justify-end'>
                                            <ButtonCustom
                                                type='submit'
                                                bulat='rounded-xl'
                                                color='bg-white border hover:bg-black'
                                                text='text-black hover:text-white mr-1'
                                            >Ubah</ButtonCustom>
                                            <Link to='/users'>
                                                <ButtonCustom
                                                    bulat='rounded-xl'
                                                    color='bg-white border ml-1 hover:bg-black'
                                                    text='text-black hover:text-white'
                                                >Batal</ButtonCustom>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUsers

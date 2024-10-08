import React, { useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Link, useNavigate } from 'react-router-dom'
import { createDataKriteria } from '../../../service/data.service'

const AddDataKriteria = () => {
    const [isKet, setIsKet] = useState('benefit')

    const handleOption = (e) => {
        setIsKet(e.target.value)
    }

    const navigate = useNavigate()
    const handleAddKriteria = (e) => {
        e.preventDefault()

        const data = {
            kriteria: e.target.kriteria.value,
            bobot_kriteria: e.target.bobot.value,
            keterangan_kriteria: isKet
        }

        createDataKriteria(data, (status, res) => {
            if (status) {
                alert(res.data.message)
                navigate('/data-kriteria-admin')
            } else {
                alert(res.data.message)
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
                            <h1 className='font-bold mt-5'>Tambah Kriteria</h1>
                            <div className='flex pt-10 h-full'>
                                <div className='w-2/3'>
                                    <form onSubmit={handleAddKriteria}>
                                        <Label htmlFor='kriteria'>Nama Kriteria</Label>
                                        <Input placeholder='Tambah Kriteria' name='kriteria' type='text' />
                                        <Label htmlFor='bobot'>Bobot Kriteria</Label>
                                        <Input placeholder='Tambah Bobot Kriteria' name='bobot' type='number' />
                                        <Label htmlFor='keterangan'>Keterangan</Label>
                                        <select name="keterangan_kriteria" onChange={handleOption} className='w-full border text-sm py-1 pl-2 mb-5'>
                                            <option value="">-- Select Option --</option>
                                            <option value="benefit">benefit</option>
                                            <option value="cost">cost</option>
                                        </select>
                                        <div className='flex pb-10 justify-end'>
                                            <ButtonCustom
                                                type='submit'
                                                bulat='rounded-xl'
                                                color='bg-white border hover:bg-black'
                                                text='text-black hover:text-white mr-1'
                                            >Tambah</ButtonCustom>
                                            <Link to='/data-kriteria-admin'>
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

export default AddDataKriteria

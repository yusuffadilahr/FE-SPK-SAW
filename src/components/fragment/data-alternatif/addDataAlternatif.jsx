import React from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Link, useNavigate } from 'react-router-dom'
import { addAlternatifData } from '../../../service/data.service'

const AddDataAlternatif = () => {

    const navigate = useNavigate()
    const handleAddAlternatif = (e) => {
        e.preventDefault()

        const data = {
            alternatif: e.target.alternatif.value
        }

        addAlternatifData(data, (res) => {
            alert(res.message)
            navigate('/data-alternatif-admin')
        })
    }
    return (
        <div className='flex justify-center items-center w-full h-screen absolute'>
            <div className='w-1/6 flex h-screen'>
            </div>
            <div className='w-5/6 h-screen bg-gray-50'>
                <div className='flex justify-center pt-20'>
                    <div className='w-full p-10'>
                        <div className='w-full h-fit pl-5 bg-white border p-2'>
                            <h1 className='font-bold mt-5'>Tambah Alternatif</h1>
                            <div className='flex pt-10 h-full'>
                                <div className='w-2/3'>
                                    <form onSubmit={handleAddAlternatif} className='w-full'>
                                        <Label htmlFor='alternatif'>Tambah Alternatif</Label>
                                        <Input placeholder='Tambah Produk' name='alternatif' type='text' />
                                        <div className='flex pb-10 justify-end'>
                                            <ButtonCustom
                                                type='submit'
                                                bulat='rounded-xl'
                                                color='bg-white border hover:bg-black'
                                                text='text-black hover:text-white mr-1'
                                            >Tambah Alternatif</ButtonCustom>
                                            <Link to='/data-alternatif-admin'>
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

export default AddDataAlternatif

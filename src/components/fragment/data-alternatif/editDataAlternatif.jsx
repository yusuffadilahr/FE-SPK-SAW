import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { singleAlternatifData, updateData } from '../../../service/data.service'

const EditDataAlternatif = () => {
    const { id_alternatif } = useParams()
    const navigate = useNavigate()
    const [singleAlternatif, setSingleAlternatif] = useState([])

    useEffect(() => {
        singleAlternatifData(id_alternatif, (data) => {
            setSingleAlternatif(data.data.alternatif)
            console.log(data.data.alternatif)
            console.log(id_alternatif)
        })
    }, [id_alternatif])

    const handleUpdate = (e) => {
        e.preventDefault()

        const data = {
            alternatif: e.target.alternatif.value
        }

        updateData(id_alternatif, data, (status, res) => {
            if (status) {
               alert(res.message)
               navigate('/data-alternatif-admin')
            } else {
                alert(res.message)
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
                        <div className='w-full h-fit pl-5 rounded-lg shadow bg-white border p-2'>
                            <h1 className='font-bold mt-5'>Ubah Data Alternatif</h1>
                            <div className='flex pt-10 h-full'>
                                <div className='w-2/3'>
                                    <form onSubmit={handleUpdate} className='w-full'>
                                        <Label htmlFor='alternatif'>Ubah Data Alternatif</Label>
                                        {singleAlternatif &&
                                            <Input placeholder={singleAlternatif} name='alternatif' type='text' />
                                        }
                                        <div className='flex pb-10 justify-end'>
                                            <ButtonCustom
                                                type='submit'
                                                bulat='rounded-xl'
                                                color='bg-white border hover:bg-black'
                                                text='text-black hover:text-white mr-1'
                                            >Ubah</ButtonCustom>
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

export default EditDataAlternatif

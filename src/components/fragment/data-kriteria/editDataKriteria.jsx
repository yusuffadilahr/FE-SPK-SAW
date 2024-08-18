import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getKriteriaById, updateDataKriteria } from '../../../service/data.service'

const EditDataKriteria = () => {
    const [isKet, setIsKet] = useState('benefit')
    const { id_kriteria } = useParams()
    const [kriteriaById, setKriteriaById] = useState([])
    const navigate = useNavigate()

    const handleOption = (e) => {
        setIsKet(e.target.value)
    }

    useEffect(() => {
        getKriteriaById(id_kriteria, (res) => {
            setKriteriaById(res.data)
            console.log(res.data)
        })
    }, [id_kriteria])

    const handleUpdate = (e) => {
        e.preventDefault()

        const data = {
            kriteria: e.target.kriteria.value,
            bobot_kriteria: e.target.bobot.value,
            keterangan_kriteria: isKet
        }

        updateDataKriteria(id_kriteria, data, (status, res) => {
            if (status) {
                alert(res.message)
                navigate('/data-kriteria-admin')
            }
            else {
                alert(res.message)
            }
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
                            <h1 className='font-bold mt-5'>Ubah Kriteria</h1>
                            <div className='flex pt-10 h-full'>
                                <div className='w-2/3'>
                                    <form onSubmit={handleUpdate}>
                                        <Label htmlFor='kriteria'>Ubah Kriteria</Label>
                                        <Input placeholder={kriteriaById.kriteria} name='kriteria' type='text' />
                                        <Label htmlFor='bobot'>Bobot Kriteria</Label>
                                        <Input placeholder={kriteriaById.bobot_kriteria} name='bobot' type='number' />
                                        <Label htmlFor='keterangan'>Keterangan Kriteria</Label>
                                        <select name="keterangan_kriteria" id="keterangan_kriteria" onChange={handleOption} className='w-full py-1 border text-sm pl-2 mb-5'>
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
                                            >Ubah</ButtonCustom>
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

export default EditDataKriteria

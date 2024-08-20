import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { singleDataPenilaian, updatePenilaian } from '../../../service/data.service'


const EditPenilaianAlternatif = () => {
    const { id_nilai_alternatif } = useParams()
    const [kriteria, setKriteria] = useState({})
    const [alternatif, setAlternatif] = useState([])
    const [nilaiAlternatif, setNilaiAlternatif] = useState('')
    const navigate =useNavigate()

    useEffect(() => {
        singleDataPenilaian(id_nilai_alternatif, (res) => {
            setAlternatif(res.data)
            setKriteria(res.data)
            setNilaiAlternatif(res.data.nilai_alternatif)
            console.log("cek 1", res.data.nilai_alternatif)
        })
    }, [id_nilai_alternatif])

    const handleNilai = (e) => {
            setNilaiAlternatif(e.target.value)
    }
    console.log("nilai alternatif : ", nilaiAlternatif);
    const data = {
        nilai_alternatif: nilaiAlternatif
    }


    const handleEdit = (e) => {
        e.preventDefault()

        updatePenilaian(data, id_nilai_alternatif, (status, res) => {
            if (status) {
                console.log(res.data)
                alert('Berhasil mengubah data')
                navigate('/penilaian-alternatif-admin')
            } else {
                console.error(res.data)
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

                            <h1 className='font-bold mt-5'>Ubah Nilai Keputusan</h1>
                            <div className='flex pt-10 h-full'>
                                <form onSubmit={handleEdit} className='w-full'>
                                    <div className='w-full'>
                                        <Label htmlFor='alternatif'>Nama Alternatif</Label>
                                        <div className='w-full border pl-3 p-1 mb-5 text-sm'>
                                            <div className='grid grid-cols-2 pt-4 w-full'>
                                                <Label style='font-semibold text-sm flex items-center mb-3 pl-7' htmlFor='kriteria'>Alternatif</Label>
                                                <Label htmlFor='weight-kriteria'>{kriteria.alternatif}</Label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full pr-10 p-2 border pl-10'>
                                        <div className='grid grid-cols-2 pt-4 w-full'>
                                            <Label htmlFor='kriteria'>Kriteria</Label>
                                            <Label htmlFor='weight-kriteria'>Bobot Kriteria</Label>
                                        </div>
                                        <div>
                                            <div className='grid grid-cols-2 w-full'>
                                                <div className='justify-start flex w-full'>
                                                    <Label htmlFor='kriteria'>{kriteria.kriteria}</Label>
                                                </div>
                                                <div className='justify-end flex w-full'>
                                                    <select id='selectOption' value={nilaiAlternatif.nilai_alternatif} onChange={handleNilai}
                                                        className='w-full border pl-3 p-1 mb-5 text-sm'>
                                                        <option className='w-full border'>-- Select Option --</option>
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                        <option value={9}>9</option>
                                                        <option value={10}>10</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex w-full h-fit pt-5'>
                                        <div className='flex w-full justify-end items-end p-5'>
                                            <ButtonCustom
                                                type='submit'
                                                bulat='rounded-xl'
                                                color='bg-white border hover:bg-black'
                                                text='text-black hover:text-white mr-1'
                                            >Ubah</ButtonCustom>
                                            <Link to='/penilaian-alternatif-admin'>
                                                <ButtonCustom
                                                    bulat='rounded-xl'
                                                    color='bg-white border ml-1 hover:bg-black'
                                                    text='text-black hover:text-white'
                                                >Batal</ButtonCustom>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPenilaianAlternatif

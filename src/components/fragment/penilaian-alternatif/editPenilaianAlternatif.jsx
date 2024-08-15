import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { singleDataPenilaian, updatePenilaian } from '../../../service/data.service'


const EditPenilaianAlternatif = () => {
    const { id_nilai_alternatif } = useParams()
    const [kriteria, setKriteria] = useState({})
    const [alternatif, setAlternatif] = useState([])
    const [nilaiAlternatif, setNilaiAlternatif] = useState({})


    useEffect(() => {
        singleDataPenilaian(id_nilai_alternatif, (res) => {
            setAlternatif(res.data)
            setKriteria(res.data)
            setNilaiAlternatif(res.data)
            console.log(res.data)
        })
    }, [id_nilai_alternatif])

    const handleNilai = (e, i) => {
        setNilaiAlternatif(e.target.value)
        console.log('consol i', i)
    }
    console.log('bwajingann', handleNilai)

    const handleEdit = (e) => {
        e.preventDefault()
console.log('errrrr', nilaiAlternatif)
        const data = {
            alternatif: alternatif.alternatif,
            kriteria: kriteria.kriteria,
            nilai_alternatif: nilaiAlternatif.nilai_alternatif
        }
        console.log('errrr',data)

        updatePenilaian(data, id_nilai_alternatif, (status, res) => {
            if (status) {
                console.log(res.data)
            } else {
                console.error(res.data)
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
                            <h1 className='font-bold mt-5'>Tambah Nilai Keputusan</h1>
                            <div className='flex pt-10 h-full'>
                                <form onSubmit={handleEdit} className='w-full'>
                                    <div className='w-full'>
                                        <Label htmlFor='alternatif'>Tambah Alternatif</Label>
                                        <select name="alternatif" id="alternatif" className='w-full border pl-3 p-1 mb-5 text-sm'>
                                            <option className='w-full border'>-- Select Option --</option>
                                            <Fragment>
                                                <option
                                                    key={alternatif.id_alternatif}
                                                    onChange={(e) => handleSelectAlternatif(alternatif.alternatif, e.target.value)}
                                                    className='w-full border'>{alternatif.alternatif}</option>
                                            </Fragment>
                                        </select>
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
                                                    <select name={`kriteria-${nilaiAlternatif.id_nilai_alternatif}`}
                                                        id={`kriteria-${nilaiAlternatif.id_nilai_alternatif}`}
                                                        onChange={(e) => handleNilai(nilaiAlternatif.nilai_alternatif, e.target.value)}
                                                        className='w-full border pl-3 p-1 mb-5 text-sm'>
                                                        <option className='w-full border'>-- Select Option --</option>
                                                        {[...Array(10).keys()].map(i => (
                                                            <option key={i + 1} value={i + 1} className='w-full border'>{i + 1}</option>
                                                        ))}
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
                                            >Tambah</ButtonCustom>
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



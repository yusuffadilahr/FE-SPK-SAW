import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { bulkCreatePenilaianData, getAlternatifData, getDataKriteria, singleNilaiAlternatif } from '../../../service/data.service'


const AddPenilaianAlternatif = () => {
    const { id_alternatif } = useParams()
    const [kriteria, setKriteria] = useState([])
    const [alternatif, setAlternatif] = useState([])
    const [selectedAlternatif, setSelectedAlternatif] = useState(null)
    const [bobotKriteria, setBobotKriteria] = useState({})
    const [isAlternatif, setIsAlternatif] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getDataKriteria((res) => {
            setKriteria(res.data)
        })
        getAlternatifData((res) => {
            setAlternatif(res.data)
        })
    }, [])

    useEffect(() => {
        if (selectedAlternatif) {  // Pastikan selectedAlternatif memiliki nilai
            singleNilaiAlternatif(selectedAlternatif, (status, res) => {
                if (status) {
                    setIsAlternatif(res.data.data)  // Update state dengan data yang diterima
                    console.log('Data Alternatif:', res.data.data);
                } else {
                    console.log('Error:', res);
                }
            });
        }
    }, [selectedAlternatif]);

    // const updateKriteria = kriteria.map((krits) => {
    //     return {
    //         id_kriteria: krits.id_kriteria,
    //         kriteria: krits.kriteria,
    //         bobot_kriteria: krits.kriteria
    //     }
    // })

    // const updateAlternatif = alternatif.map((alt) => {
    //     return {
    //         id_alternatif: alt.id_alternatif,
    //         alternatif: alt.alternatif
    //     }
    // })

    const handleKriteria = (idKriteria, value) => {
        setBobotKriteria((prevState) => ({
            ...prevState,
            [idKriteria]: value
        }))
    }

    console.log('tesssss:', selectedAlternatif);

    const handleAddPenilaianData = (e) => {
        e.preventDefault()

        if (!selectedAlternatif) {
            alert('Silahkan isi bagian alternatif')
            return
        }

        const data = {
            nilai_alternatif: kriteria.map((krit) => ({
                id_alternatif: parseInt(selectedAlternatif, 10),
                id_kriteria: krit.id_kriteria,
                nilai_alternatif: parseInt(bobotKriteria[krit.id_kriteria] || 0, 10)
            }))
        };

        bulkCreatePenilaianData(data, (status, res) => {
            if (status) {
                alert('Penilaian Berhasil Ditambahkan')
                navigate('/penilaian-alternatif-admin')
            } else {
                alert('Data alternatif ini sudah memiliki nilai', res.message)
                window.location.reload()
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
                                <form onSubmit={handleAddPenilaianData} className='w-full'>
                                    <div className='w-full'>
                                        <Label htmlFor='alternatif'>Tambah Alternatif</Label>
                                        <select onChange={(e) => setSelectedAlternatif(e.target.value)} name="alternatif" id="alternatif" className='w-full border pl-3 p-1 mb-5 text-sm'>
                                            <option className='w-full border'>-- Select Option --</option>
                                            {alternatif.map((alt) => (
                                                <Fragment>
                                                    <option
                                                        key={alt.id_alternatif}
                                                        value={alt.id_alternatif}
                                                        className='w-full border'>{alt.alternatif}</option>
                                                </Fragment>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='w-full pr-10 p-2 border pl-10'>
                                        <div className='grid grid-cols-2 pt-4 w-full'>
                                            <Label htmlFor='kriteria'>Kriteria</Label>
                                            <Label htmlFor='weight-kriteria'>Bobot Kriteria</Label>
                                        </div>
                                        {kriteria.map((krit) => (
                                            <div key={krit.id_kriteria}>
                                                <div className='grid grid-cols-2 w-full'>
                                                    <div className='justify-start flex w-full'>
                                                        <Label htmlFor={`kriteria-${krit.id_kriteria}`}>{krit.kriteria}</Label>
                                                    </div>
                                                    <div className='justify-end flex w-full'>
                                                        <select name={`kriteria-${krit.id_kriteria}`}
                                                            id={`kriteria-${krit.id_kriteria}`}
                                                            onChange={(e) => handleKriteria(krit.id_kriteria, e.target.value)}
                                                            className='w-full border pl-3 p-1 mb-5 text-sm'>
                                                            <option className='w-full border' value={1}>1</option> 
                                                            {/* Helpppp gy */}
                                                            {[...Array(10).keys()].map(i => (
                                                                <option key={i + 1} value={i + 1} className='w-full border'>{i + 1}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

export default AddPenilaianAlternatif



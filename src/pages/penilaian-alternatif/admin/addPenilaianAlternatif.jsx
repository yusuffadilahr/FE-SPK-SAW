import React, { Fragment } from 'react'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'
import AddPenilaianAlternatif from '../../../components/fragment/penilaian-alternatif/addPenilaianAlternatif'

const AddPenilaianAlternatifPage = () => {
    return (
        <Fragment>
            <AddPenilaianAlternatif />
            <Sidebar />
            <NavbarTab judul='Data Alternatif' />
        </Fragment>
    )
}

export default AddPenilaianAlternatifPage
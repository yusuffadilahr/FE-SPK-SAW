import React, { Fragment } from 'react'
import EditPenilaianAlternatif from '../../../components/fragment/penilaian-alternatif/editPenilaianAlternatif'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const EditPenilaianAlternatifPage = () => {
    return (
        <Fragment>
            <EditPenilaianAlternatif />
            <Sidebar />
            <NavbarTab judul='Penilaian Alternatif' />
        </Fragment>
    )
}

export default EditPenilaianAlternatifPage

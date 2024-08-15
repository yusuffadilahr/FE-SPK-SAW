import React, { Fragment } from 'react'
import PenilaianAlternatif from '../../../components/fragment/penilaian-alternatif/penilaianAlternatif'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const PenilaianAlternatifPage = () => {
    return (
        <Fragment>
            <PenilaianAlternatif />
            <Sidebar />
            <NavbarTab judul='Penilaian Alternatif' />
        </Fragment>
    )
}

export default PenilaianAlternatifPage

import React, { Fragment } from 'react'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'
import PenilaianAlternatifUser from '../../../components/fragment/penilaian-alternatif/penilaianAlternatifUser'

const PenilaianAlternatifPageUser = () => {
    return (
        <Fragment>
            <PenilaianAlternatifUser />
            <Sidebar />
            <NavbarTab judul='Penilaian Alternatif' />
        </Fragment>
    )
}

export default PenilaianAlternatifPageUser

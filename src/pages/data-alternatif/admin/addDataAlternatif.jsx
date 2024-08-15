import React, { Fragment } from 'react'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'
import AddDataAlternatif from '../../../components/fragment/data-alternatif/addDataAlternatif'

const AddDataAlternatifPage = () => {
    return (
        <Fragment>
            <AddDataAlternatif />
            <Sidebar />
            <NavbarTab judul='Data Alternatif' />
        </Fragment>
    )
}

export default AddDataAlternatifPage

import React, { Fragment } from 'react'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'
import EditDataKriteria from '../../../components/fragment/data-kriteria/editDataKriteria'

const EditDataKriteriaPage = () => {
    return (
        <Fragment>
            <EditDataKriteria />
            <Sidebar />
            <NavbarTab judul='Data Kriteria' />
        </Fragment>
    )
}

export default EditDataKriteriaPage

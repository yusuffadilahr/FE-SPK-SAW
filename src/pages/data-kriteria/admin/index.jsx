import React, { Fragment } from 'react'
import DataKriteria from '../../../components/fragment/data-kriteria/dataKriteria'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const DataKriteriaPage = () => {
    return (
        <Fragment>
            <DataKriteria />
            <Sidebar />
            <NavbarTab judul='Data Kriteria' />
        </Fragment>
    )
}

export default DataKriteriaPage

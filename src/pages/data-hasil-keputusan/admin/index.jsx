import React, { Fragment } from 'react'
import DataHasilKeputusan from '../../../components/fragment/data-hasil-keputusan/dataHasilKeputusan'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const DataHasilKeputusanPage = () => {
    return (
        <Fragment>
            <DataHasilKeputusan />
            <Sidebar />
            <NavbarTab judul='Data Hasil Keputusan' />
        </Fragment>
    )
}

export default DataHasilKeputusanPage

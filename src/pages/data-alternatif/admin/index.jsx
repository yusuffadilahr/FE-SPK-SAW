import React, { Fragment } from 'react'
import DataAlternatif from '../../../components/fragment/data-alternatif/dataAlternatif'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const DataAlternatifPage = () => {
  return (
    <Fragment>
        <DataAlternatif />
        <Sidebar />
        <NavbarTab judul='Data Alternatif'/>
    </Fragment>
  )
}

export default DataAlternatifPage

import React, { Fragment } from 'react'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'
import DataAlternatifUser from '../../../components/fragment/data-alternatif/dataAlternatifUser'

const DataAlternatifPageUser = () => {
  return (
    <Fragment>
        <DataAlternatifUser />
        <Sidebar />
        <NavbarTab judul='Data Alternatif'/>
    </Fragment>
  )
}

export default DataAlternatifPageUser

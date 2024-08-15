import React, { Fragment } from 'react'
import EditDataAlternatif from '../../../components/fragment/data-alternatif/editDataAlternatif'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const EditDataAlternatifPage = () => {
  return (
    <Fragment>
        <EditDataAlternatif/>
        <Sidebar />
        <NavbarTab judul='Data Alternatif'/>
    </Fragment>
  )
}

export default EditDataAlternatifPage

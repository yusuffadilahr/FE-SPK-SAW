import React, { Fragment } from 'react'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'
import AddDataKriteria from '../../../components/fragment/data-kriteria/addDataKriteria'

const AddDataKriteriaPage = () => {
  return (

        <Fragment>
            <AddDataKriteria />
            <Sidebar />
            <NavbarTab judul='Data Kriteria' />
        </Fragment>
    )
}

export default AddDataKriteriaPage

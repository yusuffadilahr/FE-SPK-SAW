import React, { Fragment } from 'react'
import ProsesPerhitungan from '../../components/fragment/perhitungan/proses-perhitungan'
import Sidebar from '../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../components/element/navigation/navbar/navbar'

const ProsesPerhitunganPage = () => {
  return (
    <Fragment>
        <ProsesPerhitungan/>
        <Sidebar />
        <NavbarTab judul='Proses Perhitungan' />
    </Fragment>
  )
}

export default ProsesPerhitunganPage

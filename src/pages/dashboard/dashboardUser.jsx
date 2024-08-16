import React, { Fragment } from 'react'
import NavbarTab from '../../components/element/navigation/navbar/navbar'
import Sidebar from '../../components/element/navigation/sidebar/sidebar'
import DashboardUser from '../../components/fragment/dashboard/dashboard'

const DashboardUserPage = () => {
  return (
    <Fragment>
      <DashboardUser />
      <Sidebar />
      <NavbarTab judul='Dashboard User'/>
    </Fragment>
  )
}

export default DashboardUserPage

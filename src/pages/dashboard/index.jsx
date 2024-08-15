import React, { Fragment } from 'react'
import NavbarTab from '../../components/element/navigation/navbar/navbar'
import Sidebar from '../../components/element/navigation/sidebar/sidebar'
import DashboardTes from '../../components/fragment/dashboard/dashboard'

const Dashboard = () => {
  return (
    <Fragment>
      <DashboardTes />
      <Sidebar />
      <NavbarTab judul='Dashboard'/>
    </Fragment>
  )
}

export default Dashboard

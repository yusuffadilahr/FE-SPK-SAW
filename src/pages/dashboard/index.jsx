import { Fragment } from 'react';
import NavbarTab from '../../components/element/navigation/navbar/navbar'
import Sidebar from '../../components/element/navigation/sidebar/sidebar'
import Dashboard from '../../components/fragment/dashboard'

const DashboardPage = () => {
  return (
    <Fragment>
      <Dashboard />
      <Sidebar />
      <NavbarTab judul='Dashboard'/>
    </Fragment>
  )
}

export default DashboardPage

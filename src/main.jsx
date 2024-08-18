import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/auth/login'
import DataAlternatifPage from './pages/data-alternatif/admin/index'
import AddDataAlternatifPage from './pages/data-alternatif/admin/addDataAlternatif'
import EditDataAlternatifPage from './pages/data-alternatif/admin/editDataAlternatifPage'
import DataKriteriaPage from './pages/data-kriteria/admin/index'
import AddDataKriteriaPage from './pages/data-kriteria/admin/addDataKriteria'
import EditDataKriteriaPage from './pages/data-kriteria/admin/editDataKriteria'
import PenilaianAlternatifPage from './pages/penilaian-alternatif/admin/index'
import AddPenilaianAlternatifPage from './pages/penilaian-alternatif/admin/addPenilaianAlternatif'
import ErrorPage from './pages/404'
import DataHasilKeputusanPage from './pages/data-hasil-keputusan/admin/index'
import RegisterPage from './pages/auth/register'
import ProsesPerhitunganPage from './pages/perhitungan'
import EditPenilaianAlternatifPage from './pages/penilaian-alternatif/admin/editPenilaianAlternatif'
import DataAlternatifPageUser from './pages/data-alternatif/user'
import DataKriteriaPageUser from './pages/data-kriteria/user'
import PenilaianAlternatifPageUser from './pages/penilaian-alternatif/user'
import ProsesPerhitunganPageUser from './pages/perhitungan/perhitunganUser'
import DataHasilKeputusanPageUser from './pages/data-hasil-keputusan/user'
import DashboardPage from './pages/dashboard'
import DashboardUserPage from './pages/dashboard/dashboardUser'
import UsersPage from './pages/user/admin'
import EditUserPage from './pages/user/admin/editUsers'

const isLoggin = () => {
  return !!localStorage.getItem('secretKey')
}

const PrivatePageAdmin = ({ children }) => {
  return isLoggin() ? children : <Navigate to='/' />
}

const PrivatePageUser = ({ children }) => {
  return isLoggin() ? children : <Navigate to='/' />
}

const BackLoginAdmin = ({ children }) => {
  return isLoggin() ? <Navigate to='/dashboard-admin' /> : children
}

const router = createBrowserRouter([

  // Route Admin
  { path: '/', element: <BackLoginAdmin><LoginPage /></BackLoginAdmin>, errorElement: <ErrorPage /> },
  { path: '/register', element: <BackLoginAdmin><RegisterPage /></BackLoginAdmin>, errorElement: <ErrorPage /> },
  { path: '/dashboard-admin', element: <PrivatePageAdmin><DashboardPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/data-alternatif-admin', element: <PrivatePageAdmin><DataAlternatifPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/data-alternatif-admin/:id_alternatif', element: <PrivatePageAdmin><EditDataAlternatifPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/add-alternatif-admin', element: <PrivatePageAdmin><AddDataAlternatifPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/data-kriteria-admin', element: <PrivatePageAdmin><DataKriteriaPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/data-kriteria-admin/:id_kriteria', element: <PrivatePageAdmin><EditDataKriteriaPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/add-kriteria-admin', element: <PrivatePageAdmin><AddDataKriteriaPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/penilaian-alternatif-admin', element: <PrivatePageAdmin><PenilaianAlternatifPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/ubah-penilaian-admin/:id_nilai_alternatif', element: <PrivatePageAdmin><EditPenilaianAlternatifPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/add-penilaian-alternatif-admin', element: <PrivatePageAdmin><AddPenilaianAlternatifPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/data-hasil-admin', element: <PrivatePageAdmin><DataHasilKeputusanPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/proses-perhitungan-admin', element: <PrivatePageAdmin><ProsesPerhitunganPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/users', element: <PrivatePageAdmin><UsersPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },
  { path: '/users/:username', element: <PrivatePageAdmin><EditUserPage /></PrivatePageAdmin>, errorElement: <ErrorPage /> },

  // Route User
  { path: '/dashboard-user', element: <PrivatePageUser><DashboardUserPage /></PrivatePageUser>, errorElement: <ErrorPage /> },
  { path: '/data-alternatif-user', element: <PrivatePageUser> <DataAlternatifPageUser /></PrivatePageUser>, errorElement: <ErrorPage /> },
  { path: '/data-kriteria-user', element: <PrivatePageUser><DataKriteriaPageUser /></PrivatePageUser>, errorElement: <ErrorPage /> },
  { path: '/penilaian-alternatif-user', element: <PrivatePageUser> <PenilaianAlternatifPageUser /></PrivatePageUser>, errorElement: <ErrorPage /> },
  { path: '/proses-perhitungan-user', element: <PrivatePageUser> <ProsesPerhitunganPageUser /></PrivatePageUser>, errorElement: <ErrorPage /> },
  { path: '/data-hasil-user', element: <PrivatePageUser> <DataHasilKeputusanPageUser /></PrivatePageUser>, errorElement: <ErrorPage /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

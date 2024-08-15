import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/auth/login'
import Dashboard from './pages/dashboard'
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

const isLoggin = () => {
  return !!localStorage.getItem('secretKey')
}

const PrivatePage = ({ children }) => {
  return isLoggin() ? children : <Navigate to='/' />
}

const BackLoginAdmin = ({ children }) => {
  return isLoggin() ? <Navigate to='/dashboard-admin' /> : children
}

const router = createBrowserRouter([

  // Route Admin
  { path: '/', element: <BackLoginAdmin><LoginPage /></BackLoginAdmin>, errorElement: <ErrorPage /> },
  { path: '/register', element: <RegisterPage />, errorElement: <ErrorPage /> },
  { path: '/dashboard-admin', element: <PrivatePage><Dashboard /></PrivatePage>, errorElement: <ErrorPage /> },
  { path: '/data-alternatif-admin', element: <DataAlternatifPage />, errorElement: <ErrorPage /> },
  { path: '/data-alternatif-admin/:id_alternatif', element: <EditDataAlternatifPage />, errorElement: <ErrorPage /> },
  { path: '/add-alternatif-admin', element: <AddDataAlternatifPage />, errorElement: <ErrorPage /> },
  { path: '/data-kriteria-admin', element: <DataKriteriaPage />, errorElement: <ErrorPage /> },
  { path: '/data-kriteria-admin/:id_kriteria', element: <EditDataKriteriaPage />, errorElement: <ErrorPage /> },
  { path: '/add-kriteria-admin', element: <AddDataKriteriaPage />, errorElement: <ErrorPage /> },
  { path: '/penilaian-alternatif-admin', element: <PenilaianAlternatifPage />, errorElement: <ErrorPage /> },
  { path: '/ubah-penilaian-admin/:id_nilai_alternatif', element: <EditPenilaianAlternatifPage />, errorElement: <ErrorPage /> },
  { path: '/add-penilaian-alternatif-admin', element: <AddPenilaianAlternatifPage />, errorElement: <ErrorPage /> },
  { path: '/data-hasil-admin', element: <DataHasilKeputusanPage />, errorElement: <ErrorPage /> },
  { path: '/proses-perhitungan-admin', element: <ProsesPerhitunganPage />, errorElement: <ErrorPage /> },

  // Route User
  // { path: '/data-alternatif-admin', element: <DataAlternatifPage />, errorElement: <ErrorPage /> },
  // { path: '/data-alternatif-admin/:id', element: <EditDataAlternatifPage />, errorElement: <ErrorPage /> },
  // { path: '/add-alternatif-admin', element: <AddDataAlternatifPage />, errorElement: <ErrorPage /> },
  // { path: '/data-kriteria-admin', element: <DataKriteriaPage />, errorElement: <ErrorPage /> },
  // { path: '/data-kriteria-admin/:id', element: <EditDataKriteriaPage />, errorElement: <ErrorPage /> },
  // { path: '/add-kriteria-admin', element: <AddDataKriteriaPage />, errorElement: <ErrorPage /> },
  // { path: '/penilaian-alternatif-admin', element: <PenilaianAlternatifPage />, errorElement: <ErrorPage /> },
  // { path: '/add-penilaian-alternatif-admin', element: <AddPenilaianAlternatifPage />, errorElement: <ErrorPage /> },
  // { path: '/data-hasil-admin', element: <DataHasilKeputusanPage />, errorElement: <ErrorPage /> },
  // { path: '/proses-perhitungan-admin', element: <ProsesPerhitunganPage />, errorElement: <ErrorPage /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

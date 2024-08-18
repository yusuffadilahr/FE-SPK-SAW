import React, { Fragment } from 'react'
import EditUsers from '../../../components/fragment/users/editUsers'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const EditUserPage = () => {
    return (
        <Fragment>
            <EditUsers />
            <Sidebar />
            <NavbarTab judul='Profile' />
        </Fragment>
    )
}

export default EditUserPage

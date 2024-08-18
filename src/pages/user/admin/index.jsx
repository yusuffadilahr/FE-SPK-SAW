import React, { Fragment } from 'react'
import Users from '../../../components/fragment/users/users'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const UsersPage = () => {
    return (
        <Fragment>
            <Users />
            <Sidebar />
            <NavbarTab judul='Profile' />
        </Fragment>
    )
}

export default UsersPage

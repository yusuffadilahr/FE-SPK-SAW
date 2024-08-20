import React, { Fragment } from 'react'
import Sidebar from '../../../components/element/navigation/sidebar/sidebar'
import NavbarTab from '../../../components/element/navigation/navbar/navbar'

const EditUserPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <NavbarTab judul='Profile' />
        </Fragment>
    )
}

export default EditUserPage

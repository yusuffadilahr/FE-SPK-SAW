import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinks = ({url, title, children}) => {
    return (
        <Link to={url}>
            <li className='border-b py-1 px-2 w-full text-sm hover:bg-slate-200 items-center flex mb-5'>
                {children}{title}
            </li>
        </Link>
    )
}

export default NavbarLinks

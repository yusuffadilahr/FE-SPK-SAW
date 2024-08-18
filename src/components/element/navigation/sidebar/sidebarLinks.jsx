import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLinks = ({url, title, children, className='pb-8 flex ml-2 items-center text-gray-700 hover:text-gray-400'}) => {
    return (
        <Link to={url}>
            <li className={className}>
                {children}
                <h1 className='ml-3 text-sm'>{title}</h1>
            </li>
        </Link>
    )
}

export default SidebarLinks

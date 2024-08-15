import React from 'react'

const Label = (props) => {
    const { htmlFor, children, style='font-semibold text-sm flex items-center mb-3' } = props
    return (
        <label htmlFor={htmlFor} className={`${style}`}>
            {children}</label>
    )
}

export default Label

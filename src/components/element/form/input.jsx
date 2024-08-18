import React from 'react'

const Input = (props) => {
    const { type, name, readOnly, placeholder, autoComplete, value, border = 'border', edit = ' w-full px-2 text-xs py-2 mb-5' } = props
    return (
        <input type={type} name={name} className={`${border} ${edit}`}
            placeholder={placeholder}
            required autoComplete={autoComplete} value={value}
            readOnly={readOnly}
        />
    )
}

export default Input

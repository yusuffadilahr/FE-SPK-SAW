import React from 'react'

const Input = (props) => {
    const { type, name, placeholder, autoComplete, value } = props
    return (
        <input type={type} name={name} className='border w-full px-2 text-xs py-2 mb-5'
            placeholder={placeholder}
            required autoComplete={autoComplete} value={value} />
    )
}

export default Input

import React from 'react'

const ButtonCustom = (props) => {
    const { children = 'Submit', bulat ='rounded-lg',
        color = 'bg-blue-700 hover:bg-blue-900',
        text='text-white',
        onClick,
        disabled,
        fontSize ='text-sm',
        type
    } = props
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={`py-1 px-2 ${text} ${bulat} ${color} font-semibold ${fontSize}`}>
            {children}
        </button>
    )
}

export default ButtonCustom

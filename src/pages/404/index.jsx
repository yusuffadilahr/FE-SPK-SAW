import React, { Fragment } from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <Fragment>
            <div className='flex h-screen justify-center items-center'>
                <div className='w-full'>
                    <p className='flex justify-center items-center text-5xl animate-bounce'>
                        {error.status}
                    </p>
                    <p className=' flex justify-center items-center font-semibold animate-pulse'>
                        {error.statusText}
                    </p>
                    <div className='flex justify-center items-center mt-5'>
                        <p className='p-3 mr-2 rounded-full bg-red-600 animate-ping'></p>
                        <p className='p-3 mr-2 rounded-full bg-yellow-300 animate-ping'></p>
                        <p className='p-3 rounded-full bg-green-700 animate-ping'></p>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ErrorPage

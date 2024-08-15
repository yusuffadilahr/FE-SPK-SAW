import React, { Fragment } from 'react'

const SideBarClose = () => {
    return (
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-5 flex ml-60 mt-5 justify-center animate-fade-left absolute items-center text-white bg-slate-950 rounded-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
        </Fragment>
    )
}

export default SideBarClose

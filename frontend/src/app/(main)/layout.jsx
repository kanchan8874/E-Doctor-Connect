import React from 'react'
import Navbar from './Navbar'
import PrelineScript from '@/prelinescript'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout
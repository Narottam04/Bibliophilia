import React from 'react'
import {Navbar} from '../../Components/Navbar'
import {Footer} from '../../Components/Footer'
import Product from '../../Components/Product'
function index() {
    return (
        <>
            <Navbar/> 
            <Product/>   
            <Footer/>   
        </>
    )
}

export default index
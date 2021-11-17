import React from 'react'
import {Navbar} from '../../Components/Navbar'
import {Footer} from '../../Components/Footer'
function index() {
    return (
        <>
            <Navbar/> 
            <aside className="w-full p-6 hidden lg:block dark:bg-coolGray-900 dark:text-coolGray-100">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-coolGray-400">Getting Started</h2>
                        <div className="flex flex-col space-y-1">
                            <a href="#">Installation</a>
                            <a href="#">Plugins</a>
                            <a href="#">Migrations</a>
                            <a href="#">Appearance</a>
                            <a href="#">Mamba UI</a>
                        </div>
                    </div>
                </nav>
            </aside>
            
            <Footer/>   
        </>
    )
}

export default index
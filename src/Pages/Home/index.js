import React from 'react'
import {Navbar} from '../../Components/Navbar'
import {Footer} from '../../Components/Footer'
import FeaturedProduct from '../../Components/FeaturedProduct'
import { Link } from 'react-router-dom'
function index() {
    return (
        <>
            <Navbar/>
            {/* header */}
            <div className="relative flex flex-col-reverse z-0 py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice">
                <path d="M50 0H100L50 100H0L50 0Z"></path>
                </svg>
                <img
                className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                src="https://source.unsplash.com/YLSwjSy7stw"
                alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Brand new
                </p> */}
                <h2 className="mb-5 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    A Platform Where You Can Buy And Sell Your Old Books.
                </h2>
                <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                </p>
                <div className="flex items-center">
                    <Link
                    to="/allbooks"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-blue-400 "
                    >
                    View All Books
                    </Link>
                    <Link to="/sellbook" aria-label="" className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">Become A Seller</Link>
                </div>
                </div>
            </div>
            </div>

            <FeaturedProduct/>
            <div className = "flex justify-center">
                <Link
                    to="/allbooks"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none bg-blue-400  text-white"
                    aria-label="Sign up"
                    title="Sign up"
                    >
                    View More Books
                </Link>
            </div>
            <Footer/>
        </>
    )
}
export default index

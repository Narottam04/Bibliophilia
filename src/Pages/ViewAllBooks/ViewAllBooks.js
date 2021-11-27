import React, { useState } from 'react'
import {Navbar} from '../../Components/Navbar'
import {Footer} from '../../Components/Footer'
import Product from '../../Components/Product'
import Sidebar from '../../Components/Sidebar'
import {commerce} from '../../lib/commerce'
import { Helmet } from 'react-helmet'
function ViewAllBooks() {
    const [filteredProduct, setFilteredProduct] = useState(undefined)
    const [toggle, setToggle] = useState(false)

    const Category = async (e) => {
        const checked = e.target.checked;
        const slug = e.target.id;

        if(checked) {
            const {data} = await commerce.products.list({
                category_slug: [`${slug}`],
            });
            setFilteredProduct(data)
        }
        else {
            setFilteredProduct(undefined)
        }
    }
    return (
        <>
            <Helmet>
                <title>Bibliophilia: View All Books</title>
                <meta name="description" content="Here on Bibliophilia,we connect you, our book lovers, directly to the sellers. In this way, you can assure everything about the book and see for yourself by having a one-to-one interaction with the seller. So what are you waiting for, sign up and boost your reading journey right away!"/>
                <link rel="canonical" href="https://bibliophilia.pages.dev/"/>
                <meta property="og:title" content="A Platform Where You Can Buy And Sell Your Old Books."/>
                <meta property="og:description" content="Here on Bibliophilia,we connect you, our book lovers, directly to the sellers. In this way, you can assure everything about the book and see for yourself by having a one-to-one interaction with the seller. So what are you waiting for, sign up and boost your reading journey right away!"/>
                <meta property="og:image" content="/images/logo.png"/>
                <meta property="og:image:width" content="2500"/>
                <meta property="og:image:height" content="1330"/>
                <meta property="og:site_name" content="Bibliophilia"/>
                <meta property="og:type" content="ecommerce"/>
                <meta name="language" content="EN"/>
                <meta name="country" content="IN"/>
                <meta name="author" content="Bibliophilia"/>
            </Helmet>
            <Navbar/>
            {/* filter mobile view */}
            <div className="lg:hidden">
                <div className = "flex justify-around">
                    <h1 className = " font-semibold text-lg ">FILTERS</h1>
                    <div className={`hamburger ${toggle ?"is-active":""}`} id="hamburger-1" onClick = {()=> setToggle(!toggle)} >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                {toggle &&
                    <div className = "mx-6 my-4">
                        <h2 className = " font-semibold text-lg text-gray-500">Categories</h2>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox"  className=" h-5 w-5 text-gray-600 " onClick = {Category}  id = "Novel"/>
                                <span className="ml-2 text-gray-700">Novel</span>
                            </label>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600" onClick = {Category}  id = "Enginnering"  />
                                <span className="ml-2 text-gray-700">Enginnering</span>
                            </label>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600" onClick = {Category}  id = "IIT-JEE"  />
                                <span className="ml-2 text-gray-700">IIT-JEE</span>
                            </label>
                            {/* <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600" onClick = {Category}  id = "Civil Exams"   />
                                <span className="ml-2 text-gray-700">Civil Exams</span>
                            </label> */}
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600" onClick = {Category}  id = "Autobiography"  />
                                <span className="ml-2 text-gray-700">Autobiography</span>
                            </label>
                        </div>
                    </div>
                }
            </div>
            {/* filter desktop view */}
            <div className="flex justify-center lg:justify-start">
                <aside className = "hidden lg:block sticky self-start  top-4 w-1/5">
                    <div className="space-y-2 mx-12 my-6">
                        <h1 className = " font-semibold text-lg ">FILTERS</h1>
                        <h2 className = " font-semibold text-lg text-gray-500">Categories</h2>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox"  className=" h-5 w-5 text-gray-600 " onClick = {Category}  id = "Novel"/>
                                <span className="ml-2 text-gray-700">Novel</span>
                            </label>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600" onClick = {Category}  id = "Enginnering"  />
                                <span className="ml-2 text-gray-700">Enginnering</span>
                            </label>
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600" onClick = {Category}  id = "IIT-JEE"  />
                                <span className="ml-2 text-gray-700">IIT-JEE</span>
                            </label>
                            {/* <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600" onClick = {Category}  id = "Civil Exams"   />
                                <span className="ml-2 text-gray-700">Civil Exams</span>
                            </label> */}
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className=" h-5 w-5 text-gray-600" onClick = {Category}  id = "Autobiography"  />
                                <span className="ml-2 text-gray-700">Autobiography</span>
                            </label>
                        </div>
                    </div>
                </aside>

                <Product filteredProduct = {filteredProduct}/>   
            </div> 
            <Footer/>   
        </>
    )
}

export default ViewAllBooks
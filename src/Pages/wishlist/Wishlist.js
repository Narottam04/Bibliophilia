import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {commerce} from '../../lib/commerce'
import { Helmet } from 'react-helmet'

function Wishlist() {
    const [wishlist, setwishlist] = useState([])

    useEffect(() => {
        const createCart = async () => {
            const cart = await commerce.cart.retrieve()
            setwishlist(cart.line_items)
        }
        createCart()
    }, [])

    const removeCart = async (id) => {
        try {
            await commerce.cart.remove(id)
            const cart = await commerce.cart.contents()
            setwishlist(cart)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
             <Helmet>
                <title>Bibliophilia: Whislist</title>
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
            <div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class=" inset-0 overflow-hidden">

                <div class="hidden md:block inset-0 bg-opacity-75 transition-opacity" aria-hidden="true">
                    <img className="object-cover h-screen" src="https://source.unsplash.com/ukzHlkoz1IE" alt="cover-img" /> 
                </div>

                <div class="md:fixed inset-y-0 right-0 md:pl-10 max-w-full flex">
                <div class="w-screen h-screen  md:max-w-md">
                    <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                        <div class="flex items-start justify-between">
                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                            Your Wishlist
                        </h2>
                        <Link to = "/" class="ml-3 h-7 flex items-center">
                            <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Close panel</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </Link>
                        </div>

                        <div class="mt-8">
                        <div class="flow-root">
                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                            { 
                                wishlist.map((item) => {
                                    return(
                                        <li key = {item.id} class="py-6 flex">
                                            <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                            <img src={item.image.url} alt={item.name} class="w-full h-full object-center object-contain" />
                                            </div>

                                            <div class="ml-4 flex-1 flex flex-col">
                                            <Link to ={`/products/${item.permalink}/#`}>
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <Link to ={`/products/${item.permalink}/#`}>
                                                    {item.name}
                                                    </Link>
                                                </h3>
                                                <p class="ml-4">
                                                    {item.price.formatted_with_symbol}
                                                </p>
                                                </div>
                                            </Link>
                                            <div class="flex-1 flex items-end justify-between text-sm">
                                                <div class="flex ">
                                                <button onClick = {()=> removeCart(item.id)} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                </div>
                                            </div>
                                            </div>
                                        </li>

                                    )
                                })
                            }
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                            <Link to = "/allbooks" type="button" class="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></Link>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Wishlist

import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {commerce} from '../lib/commerce'

function Product({filteredProduct}) {
    const [products, setproducts] = useState([])
    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setproducts(data);
    }

    useEffect(()=> {
        fetchProducts()
    },[])

    return (
        <div className="bg-white">
        <div className="max-w-2xl  mx-auto py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> 
                {!filteredProduct?
                    products.map((item)=> {
                        return(
                            <Link key = {item.id} to ={`/products/${item.permalink}/#`} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src={item.image.url} alt = {item.name} className="w-1/2 h-1/2 m-auto object-center object-contain lg:w-full lg:h-full" loading = "lazy" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-md mr-2 text-gray-700">
                                    <div >
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {item.name}
                                    </div>
                                    </h3>
                                    <p className="mt-1 text-md text-gray-500">{item.categories[0].name}</p>
                                </div>
                                <p className="text-lg font-bold  text-gray-900">{item.price.formatted_with_symbol}</p>
                                </div>
                            </Link>
                        )
                    })
                    :
                    filteredProduct.map((item)=> {
                        return(
                            <Link key = {item.id} to ={`/products/${item.permalink}/#`} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src={item.image.url} alt = {item.name} className="w-1/2 h-1/2 m-auto object-center object-contain lg:w-full lg:h-full" loading = "lazy" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-md mr-2 text-gray-700">
                                    <div >
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {item.name}
                                    </div>
                                    </h3>
                                    <p className="mt-1 text-md text-gray-500">{item.categories[0].name}</p>
                                </div>
                                <p className="text-lg font-bold  text-gray-900">{item.price.formatted_with_symbol}</p>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div>
        </div>
    )
}

export default Product

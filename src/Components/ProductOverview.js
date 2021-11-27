import React,{useEffect,useState} from 'react'
import {Navbar} from './Navbar'
import {Footer} from './Footer'
import { useParams } from 'react-router-dom';
import {commerce} from '../lib/commerce'
import Spinner from './Spinner';

import {useAuth} from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

function ProductOverview() {
    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {currentUser}= useAuth()
    const navigate = useNavigate()

    const params = useParams();

    
    useEffect(()=> {
        const fetchProduct = async () => {
            try {
                const individualProduct = await commerce.products.retrieve(params.productId,{
                    type:'permalink'
                }) 
                setproduct(individualProduct)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    },[])

    const handleSellerInfo = async () => {
        if(!currentUser) {
            navigate('/login')
        }
        else {
            navigate(`/sellerinfo/${params.productId}`)
        }
    }

    // console.log(product)
    // console.log(params.productId);
    return (
        <div>
            <Navbar/>
            {loading ? <Spinner/> : 
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex justify-center flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/3  w-full object-contain object-center rounded border border-gray-200" src={product.image.url} alt = {product.name}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.categories[0].name}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">{product.name}</h1>
                        
                        <p dangerouslySetInnerHTML={{__html: product.description}} className="leading-relaxed"/>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        
                        </div>
                        <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">{product.price.formatted_with_symbol}</span>
                        <button onClick = {()=> handleSellerInfo()} className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Contact Seller</button>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            }
            <Footer/>
        </div>
        
    )
}

export default ProductOverview


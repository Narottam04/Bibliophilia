import React,{useEffect,useState} from 'react'
import {Navbar} from './Navbar'
import {Footer} from './Footer'
import { useParams } from 'react-router-dom';
import {commerce} from '../lib/commerce'
import Spinner from './Spinner';

import {useAuth} from '../Context/AuthContext'
import { Link,useNavigate } from 'react-router-dom'

function ProductOverview() {
    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {currentUser}= useAuth()
    const navigate = useNavigate()

    const params = useParams();

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

    useEffect(()=> {
        if(!currentUser){
            navigate('/login')
        }
        fetchProduct()
    },[])

    // console.log(product)
    // console.log(params.productId);
    return (
        <div>
            <Navbar/>
            {loading ? <Spinner/> : 
                <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex justify-center flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/3  w-full object-contain object-center rounded border border-gray-200" src={product.image.url} alt = {product.name}/>
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">Novel</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-5">{product.name}</h1>
                        
                        {/* <p dangerouslySetInnerHTML={{__html: product.description}} class="leading-relaxed"/> */}
                        <p>{product.extra_fields[0].name}</p>
                        <p>{product.extra_fields[1].name}</p>
                        <p>{product.extra_fields[2].name}</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        
                        </div>
                        <div class="flex">
                        <span class="title-font font-medium text-2xl text-gray-900">{product.price.formatted_with_symbol}</span>
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


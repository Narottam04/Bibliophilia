import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useAuth} from '../../Context/AuthContext'

function Index() {
    const {currentUser}= useAuth()
    const navigate = useNavigate()
    
    useEffect(()=> {
        if(!currentUser){
            navigate('/login')
        }
    },[])
    return (
        <div>
            <h1>Sell your book</h1>
        </div>
    )
}

export default Index

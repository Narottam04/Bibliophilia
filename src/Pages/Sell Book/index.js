import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../Context/AuthContext'
import {Navbar} from '../../Components/Navbar'
import {Footer} from '../../Components/Footer'
import Email from '../../Assets/svg/E-Mail (Face).svg' 

function Index() {
    const {currentUser}= useAuth()
    const navigate = useNavigate()
    
    useEffect(()=> {
        if(!currentUser){
            navigate('/login')
        }
    },[])
    return (
        <>
            <Navbar/>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Become A Seller!</h2>
                        <div className="py-2 text-xl">Sell Your Old Books To Our Customers. We connect our buyer with Potential seller. Whether you are wholesale retailer to individual seller you can list your product by just emailing us.</div>
                    </div>
                    <img src={Email} alt="" className="p-6 h-96 md:h-full"/>
                </div>
                <form action="https://formsubmit.co/007sahuraj@gmail.com" method="POST" enctype="multipart/form-data" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label htmlFor="name" className="text-sm font-bold">Full Name</label>
                        <input id="name" type="text" name="name" placeholder="" className="w-full p-3 rounded border-2 border-black" required/>
                    </div>
                    <div>
                        <label htmlFor="contact-info" className="text-sm font-bold">Contact Number</label>
                        <input id="contact-info" type="text" name="contact-info" placeholder="" className="w-full p-3 rounded border-2 border-black" required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-bold">Email</label>
                        <input id="email" type="email" name="email" className="w-full p-3 rounded border-2 border-black" required/>
                    </div>
                    <div>
                        <label htmlFor="contact-info" className="text-sm font-bold">Book Name</label>
                        <input id="contact-info" type="text" name="book_name" placeholder="" className="w-full p-3 rounded border-2 border-black" required/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm font-bold">Book Description</label>
                        <textarea id="message" type = "text" name = "message" rows="3" className="w-full p-3 rounded border-2 border-black" placeholder = "Write Description of book in 30 words, you can copy paste the book description from google" required></textarea>
                    </div>
                    <div className = "">
                        <label htmlFor="file-upload" class="custom-file-upload bg-blue-500 text-white">
                            Upload Product Image!
                        </label>
                        <input id="file-upload" name="attachment" accept="image/png, image/jpeg" type="file"/>
                    </div>
                    <input type="hidden" name="_next" value="https://bibliophilia.pages.dev/thankyou"/>
                    <div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-400 text-white hover:bg-blue-500">Send Message</button>
                    </div>
                </form>
            </div>
            

            <Footer/>
        </>
    )
}

export default Index



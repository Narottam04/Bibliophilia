import React from 'react'
import {Navbar} from '../../Components/Navbar'
import {Footer} from '../../Components/Footer'
import Email from '../../Assets/svg/E-Mail (Face).svg' 

function index() {
    return (
        <div>
            <Navbar/>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="">Feel free to drop your concern we will try our level best to reply you as soon as possible</div>
                    </div>
                    <img src={Email} alt="" className="p-6 h-96 md:h-80"/>
                </div>
                <form action="https://formsubmit.co/007sahuraj@gmail.com" method="POST" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm font-bold">Full name</label>
                        <input id="name" type="text" name="name" placeholder="" className="w-full p-3 rounded border-2 border-black" required/>
                    </div>
                    <div>
                        <label for="email" className="text-sm font-bold">Email</label>
                        <input id="email" type="email" name="email" className="w-full p-3 rounded border-2 border-black" required/>
                    </div>
                    <div>
                        <label for="message" className="text-sm font-bold">Message</label>
                        <textarea id="message" type = "text" name = "message" rows="3" className="w-full p-3 rounded border-2 border-black" required></textarea>
                    </div>
                    <input type="hidden" name="_next" value="https://bibliophilia.pages.dev/thankyou"/>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-400 text-white hover:bg-blue-500">Send Message</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default index


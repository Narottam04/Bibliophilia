import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
    return (
        <div className = "flex flex-col justify-center items-center h-screen ">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className = "mb-4"
            >
              <span className=" font-yeseva ml-2 text-center text-3xl font-bold tracking-wide text-gray-800 uppercase">
                Bibliophilia
              </span>
            </Link>
            <h1 className = "text-5xl font-bold text-center">Thank you! Now check your email...</h1>
            <p className = "text-2xl mt-4 text-center">You should get a confirmation email soon from our team as soon as possible.</p>
            <Link to = "/" className="text-center w-40 p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-400 text-white hover:bg-blue-500 mt-10">Home Page</Link>
        </div>
    )
}

export default ThankYou

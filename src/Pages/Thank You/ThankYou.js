import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function ThankYou() {
    return (
        <div className = "flex flex-col justify-center items-center h-screen ">
          <Helmet>
                <title>Bibliophilia: Thank You!</title>
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

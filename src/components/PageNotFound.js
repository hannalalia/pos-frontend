import React from 'react'

function PageNotFound() {
    return (
        <div className=" h-screen text-center flex flex-col items-center justify-center">
            <img alt="Page Not Found" src="not_found.png" className="lg:w-1/3"></img>
            <p className="text-3xl text-gray-700 pb-4 font-semibold" >Ooops! Page Not Found.</p>
            <a href="/" className="text-green-500 hover:text-green-900 text-lg" >Go back</a>
        </div>
    )
}

export default PageNotFound

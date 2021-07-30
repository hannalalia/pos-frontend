import React from 'react'

function Searchbar() {
    return (
        <div className="m-3 flex justify-center">
            <input type="text" className="px-3 py-2 border-b-2 border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent w-full md:w-1/2" placeholder="Search"></input>
        </div>
    )
}

export default Searchbar

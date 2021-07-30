import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
function ProductListView({productList}) {
    
    return (
        <div>
        <Navbar></Navbar> 
        <Searchbar></Searchbar>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
            {productList.map(product=>(
                <div className="card" key={product.id}>
                    <div className="text-center capitalize font-semibold p-3 mx-3 text-gray-800">{product.name}</div>
                    <div className="">
                        <img alt="Product" className="w-auto min-w-full max-h-72 h-auto" src="https://picsum.photos/200/400"></img>
                    </div>
                    <div className="m-3 text-gray-500">
                        <p> ${product.price}</p>
                        <p className="text-sm"> Code: {product.id}</p>                    
                    </div>
                    <div className="m-3 text-gray-800 h-20 custom-scroll">lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum</div>
                    <div className="m-3"><button className="btn">Add Product</button></div>              
                </div>
            ))}           
        </div>      
        </div>
        
    )
}

export default ProductListView

import React,{useRef,useState,useEffect} from 'react'
import {FiMenu} from 'react-icons/fi';
import {FaCashRegister} from 'react-icons/fa';
import {AiFillCloseCircle, AiOutlineVerticalLeft} from 'react-icons/ai'
function Navbar() {
    const navLinks= useRef(); 
    const checkoutBtn= useRef(); 
    const [collapseMenu,setCollapseMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showCheckoutText, setShowCheckoutText] = useState(false);
       
    function handleMenu(){
        setCollapseMenu(!collapseMenu);
    }
   
    //hide links on menu click
    useEffect(() => {      
        return () => {
            if(collapseMenu===true){
                navLinks.current.classList.add('hidden');               
                navLinks.current.classList.remove('flex');
                setShowCheckoutText(false);
            }else{
                navLinks.current.classList.remove('hidden');
                navLinks.current.classList.add('flex');
                setShowCheckoutText(true);
            }
        }
    }, [collapseMenu])

    //on desktop devices/large screen show checkout icon button and on smaller screen device show the checkout text link
    //hide checkout sidebar on window resize
    useEffect(() => {      
        return () => {
            window.addEventListener('resize',function(){
                setShowSidebar(false)
                var sm = window.matchMedia("(min-width: 1024px)")
                    if(sm.matches){
                        setShowCheckoutText(false)                     
                    }else{
                        setShowCheckoutText(true)                 
                    }
            })
        }
    });
    
    return (
        <div className="" >
            {/* Top nav */}
            <nav className="text-lg py-2 px-2 mb-2 bg-gray-100  text-gray-700  grid grid-cols-12">
                {/* menu button*/}
                <button className="lg:hidden link text-2xl lg:col-span-1 col-span-6" onClick={()=>handleMenu()}><FiMenu></FiMenu></button>
                {/* links */}
                <ul ref={navLinks}className="hidden lg:flex flex-col lg:flex-row justify-center items-center col-span-12 sm:col-span-11">
                    <li className="link"><a className="" href="/promo">Promo</a></li>
                    <li className="link"><a className="" href="/main">Main</a></li>
                    <li><a href="/drinks" className="link">Drinks</a></li>
                    <li><a href="/snacks" className="link">Snacks</a></li>
                    <li><a href="/desserts" className="link">Desserts</a></li>
                    <li><a href="/extras" className="link">Extras</a></li>  
                     {/* checkout text link*/}
                    { showCheckoutText?(<li><a ref={checkoutBtn} href="/checkout" className="link">Checkout</a></li>):""}                
                </ul>
                  {/* checkout icon button*/}
                <button onClick={()=>setShowSidebar(true)} className="hidden lg:inline-block link lg:col-span-1"><FaCashRegister className="text-2xl"></FaCashRegister></button>                                    
            </nav>

            {/* Checkout sidebar nav*/}
            {  
                showSidebar?(<div className="w-1/3 p-1  bg-white border-l-2 border-b-2 absolute z-10 top-0 right-0 h-full">
                <div className="p-3 border-b-2 mb-3">
                    <button onClick={()=>setShowSidebar(false)} className="cursor-pointer text-2xl text-gray-500"><AiOutlineVerticalLeft></AiOutlineVerticalLeft></button>
                </div>
                <table className="text-center table-fixed border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="py-1 px-3 font-medium" colSpan="3">Product</th>
                            <th className="py-1 px-3 font-medium" colSpan="2">Price</th>
                            <th className="py-1 px-3 font-medium" colSpan="1">Count</th>
                            <th colSpan="1" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2 border-t-2">
                            <td className="py-1 px-3" colSpan="3">
                                <table className="text-left">
                                    <tbody>
                                        <tr className="break-word"><td>Item 1</td></tr>
                                        <tr className="break-all text-sm text-gray-500"><td>productcode</td></tr>
                                    </tbody>
                                    
                                </table>                          
                            </td>
                            <td className="py-1 px-3 break-all " colSpan="2">$22,227,384.95</td>
                            <td className="py-1 px-3 break-all " colSpan="1">45</td>
                            <td className="py-1 px-3" colSpan="1"><button className="text-gray-500 text-2xl hover:text-gray-600"><AiFillCloseCircle></AiFillCloseCircle></button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="border-t-2">
                            <th className="py-1 px-3 text-left text-lg font-medium">Total:</th>
                            <th className="py-1 px-3 text-left text-lg font-medium">$1000232323</th>                         
                        </tr>
                    </tfoot>
                </table>
                <div className="flex justify-around px-2 py-2 mb-9">
                    <button className="bg-gray-500 hover:bg-gray-600 text-gray-100 px-3 py-2 rounded">Checkout</button>
                    <button className="bg-primary hover:bg-red-500 text-red-100 px-3 py-2 rounded">Remove All</button>
                </div>
            </div>):''
            }
            
        </div>
    )
}

export default Navbar

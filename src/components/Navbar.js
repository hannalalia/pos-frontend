import React,{useRef,useState,useEffect} from 'react'
import {FiMenu, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {FaCashRegister} from 'react-icons/fa';
import {AiFillCloseCircle, AiOutlineVerticalLeft} from 'react-icons/ai';

function Navbar() {
    
    const navLinks= useRef();  
    const [collapseMenu,setCollapseMenu] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const count = 100;
    
    function handleMenu(){
        setCollapseMenu(!collapseMenu);
    }
    //hide links on menu click
    useEffect(() => { 
        let links = navLinks.current;    
        return () => {
            if(collapseMenu===true){
                links.classList.add('hidden');                     
            }else{
                links.classList.remove('hidden');
            }
        }      
    }, [collapseMenu])
    
    //on desktop/large screen devices set menu collapse state back to true
    //hide checkout sidebar on window resize
    useEffect(() => {            
        return () => {
            window.addEventListener('resize',function(){
                setShowSidebar(false)                
                var lg = window.matchMedia("(min-width: 1024px)")
                    if(lg.matches){
                        setCollapseMenu(true);                   
                    }
            })
        }
    });
    
    return (
        <div>
            {/* Top nav */}
            <nav className="text-lg py-2 px-2 mb-2 bg-gray-100  text-gray-700  grid grid-cols-12">
                {/* menu button*/}
                <button className="inline lg:hidden link text-2xl lg:col-span-1 col-span-6" onClick={()=>handleMenu()}>
                    <FiMenu></FiMenu>
                </button>
                {/* links */}
                <ul ref={navLinks} className="flex flex-col lg:flex-row justify-center items-center col-span-12 lg:col-span-11">
                    <li className="link"><a className="" href="/promo">Promo</a></li>
                    <li className="link"><a className="" href="/main">Main</a></li>
                    <li><a href="/drinks" className="link">Drinks</a></li>
                    <li><a href="/snacks" className="link">Snacks</a></li>
                    <li><a href="/desserts" className="link">Desserts</a></li>
                    <li><a href="/extras" className="link">Extras</a></li>  
                    <li><a href="/checkout" className="link inline lg:hidden">Checkout {count>0 ?
                    count<=99 ?
                    <span className="inline lg:hidden badge bg-primary align-baseline mb-2">{count}</span>:
                    <span className="inline lg:hidden badge bg-primary align-baseline mb-2">99+</span>
                    :''
                }    </a></li>                
                </ul>
                <div className="hidden lg:block">
                <button onClick={()=>setShowSidebar(true)}>
                    <FaCashRegister className="text-2xl hidden lg:inline link lg:col-span-1"></FaCashRegister>
                </button>   
                {count>0 ?
                    count<=99 ?
                    <span className="hidden lg:inline badge-counter bg-primary">{count}</span>:
                    <span className="hidden lg:inline badge-counter bg-primary">99+</span>
                    :''
                }                
                </div>                                             
            </nav>

            {/* Checkout sidebar nav*/}
            {  
                showSidebar?(<div className="w-1/3 p-1  bg-white border-l-2 fixed top-0 bottom-0 right-0">
                <div className="p-3 border-b-2 mb-3">
                    <button onClick={()=>setShowSidebar(false)} className="cursor-pointer text-2xl text-gray-500">
                        <AiOutlineVerticalLeft></AiOutlineVerticalLeft>
                    </button>
                </div>
                <div className="overflow-x-auto custom-scroll-with-handle">
                <table className="text-center table-auto border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="py-1 px-3 font-medium">Product</th>
                            <th className="py-1 px-3 font-medium">Price</th>
                            <th className="py-1 px-3 font-medium">Count</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2 border-t-2">
                            <td className="py-1 px-3">
                                <table className="text-left">
                                    <tbody>
                                        <tr className=""><td>Item 1</td></tr>
                                        <tr className="text-sm text-gray-500"><td>productcode</td></tr>
                                    </tbody>                   
                                </table>                          
                            </td>
                            <td className="py-1 px-3 break-all">$22,227,384.95</td>
                            <td className="py-1 px-3 ">
                                <button className="align-bottom pb-1 text-gray-500 hover:text-gray-600"><FiChevronLeft></FiChevronLeft></button>
                                450
                                <button className="align-bottom pb-1 text-gray-500 hover:text-gray-600"><FiChevronRight></FiChevronRight></button>
                                </td>
                            <td className="py-1 px-3">
                                <button className="text-gray-500 hover:text-gray-600 text-2xl">
                                    <AiFillCloseCircle></AiFillCloseCircle>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="border-t-2">
                            <th className="py-1 px-3 text-left text-lg font-medium">Total:</th>
                            <th className="py-1 px-3 text-left text-lg font-medium">$1000232323</th>                         
                        </tr>
                    </tfoot>
                </table>
                </div>
                
                <div className="flex justify-around px-2 py-2 mb-9">
                    <button className="btn">Checkout</button>
                    <button className="bg-primary hover:bg-red-500 text-red-100 px-3 py-2 rounded">Remove All</button>
                </div>
            </div>):''
            }           
        </div>
    )
}

export default Navbar

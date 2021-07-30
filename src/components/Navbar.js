import React,{useRef,useState,useEffect} from 'react'
import {FiMenu} from 'react-icons/fi';
import {FaCashRegister} from 'react-icons/fa';
function Navbar() {

    const navList= useRef(); 
    const checkoutBtn= useRef(); 
    const [collapseMenu,setCollapseMenu] = useState(false);

    function handleMenu(){
        setCollapseMenu(!collapseMenu);
    }
   
    useEffect(() => {      
        return () => {
            if(collapseMenu===true){
                navList.current.classList.add('hidden');
                navList.current.classList.remove('flex');
                checkoutBtn.current.classList.add('hidden');
            }else{
                navList.current.classList.remove('hidden');
                navList.current.classList.add('flex');
                checkoutBtn.current.classList.remove('hidden');
            }
        }
    }, [collapseMenu])
    return (
        <div className="">
            <nav className="text-lg py-2 px-2 mb-2 text-green-500 bg-green-50 grid grid-cols-12">
                <button className="sm:hidden link text-2xl sm:col-span-1 col-span-6" onClick={()=>handleMenu()}><FiMenu></FiMenu></button>
                <ul ref={navList}className="hidden sm:flex flex-col sm:flex-row justify-center items-center col-span-12 sm:col-span-11">
                    <li className="link"><a className="" href="/">Promo</a></li>
                    <li className="link"><a className="" href="/">Main</a></li>
                    <li><a href="/profile" className="link">Drinks</a></li>
                    <li><a href="/portfolio" className="link">Snacks</a></li>
                    <li><a href="/contact" className="link">Desserts</a></li>
                    <li><a href="/contact" className="link">Extras</a></li>                  
                </ul>
                <button ref={checkoutBtn} className="hidden sm:inline-block link sm:col-span-1 col-span-12"><FaCashRegister className="text-2xl hidden sm:inline-block"></FaCashRegister><span className="sm:hidden">Checkout</span></button>                               
            </nav>
        </div>
    )
}

export default Navbar

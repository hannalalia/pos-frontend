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
            window.addEventListener('resize',function(){
                var sm = window.matchMedia("(min-width: 640px)")
                    if(sm.matches){
                        checkoutBtn.current.classList.add('hidden');
                    }else{
                        checkoutBtn.current.classList.remove('hidden');
                    }
            })
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
                    <li className="link"><a className="" href="/promo">Promo</a></li>
                    <li className="link"><a className="" href="/main">Main</a></li>
                    <li><a href="/drinks" className="link">Drinks</a></li>
                    <li><a href="/snacks" className="link">Snacks</a></li>
                    <li><a href="/desserts" className="link">Desserts</a></li>
                    <li><a href="/extras" className="link">Extras</a></li>                  
                </ul>
                <button  className="hidden sm:inline-block link sm:col-span-1 col-span-12"><FaCashRegister className="text-2xl hidden sm:inline-block"></FaCashRegister></button>      
                <a ref={checkoutBtn} href="/checkout" className="hidden link col-span-12 text-center">Checkout</a>                         
            </nav>
        </div>
    )
}

export default Navbar

import React, { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
// image import
import logo from "../../public/logo.png"
// icon import
import { FaUser } from "react-icons/fa";
// icon import
import { FaShoppingBasket } from "react-icons/fa";

import { Link } from "react-router-dom";



const Navber = () => {

     const [isMenuOpen, setisMenuOpen] = useState(false);
     const toggleMenu = () => {
          setisMenuOpen(!isMenuOpen)
     }

     const navItems = [
          {title: "Jewelry & Accessories", path: "/"},
          {title: "Clothing & Shoes", path: "/"},
          {title: "Home & Living", path: "/"},
          {title: "Wedding & Party", path: "/"},
          {title: "Toys & Entertainment", path: "/"},
          {title: "Art & Collectibles", path: "/"},
          {title: "Craft Supplies & Tools", path: "/"},
     ];
     return (
       <header className='max-w-screen-2xl xl:px-28 px:4 absolute top-0 right-0 left-0'>
          <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
             <FaSearch className='text-black w-5 h-5 cursor-pointer hidden md:block'/>

             {/* logo */}
             <a href="/"><img src={logo} alt="" /></a>

             {/* Shopping button */}
             <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
               <a href="/" className='flex items-center gap-2'><FaUser/> Account </a>
               <a href="/" className='flex items-center gap-2'><FaShoppingBasket /> Shoping </a>
             </div>

            {/*  navber for sm divice */}
            <div className='sm:hidden'>
               <button onClick={toggleMenu}>
                    {
                         isMenuOpen ? <FaTimes className="w-5 h-5 text-black"/> : <FaBars className="w-5 h-5"/>
                    }
               </button>
            </div>
          </nav>

          <hr/>


          {/* Category items */}
          <div className='pt-6'>
               <ul className='lg:flex items-center justify-between text-gray-400 hidden'>
                    {
                         navItems.map(({title, path}) => (
                              <li key={title} className='hover:text-orange-500'>
                                   <Link to="/">{title}</Link>
                              </li>
                         ))
               
                    }
               </ul>
          </div>



          {/* Only Mobile menu itemes */}
          <div>
               <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
                    {
                         navItems.map(({title, path}) => (
                              <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                                   <Link to="/">{title}</Link>
                              </li>
                         ))
               
                    }
               </ul>
          </div>
       </header>
     );
};

export default Navber;
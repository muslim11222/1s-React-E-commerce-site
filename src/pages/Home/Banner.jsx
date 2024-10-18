import React from 'react';
import { FaBagShopping } from "react-icons/fa6";
import product from '/images/image-product.png';
const Banner = () => {
     return (
          <div className='bg-primayBG container-full mx-auto py-12 xl:px-28 px-4 text-gray-500'>

               <div className='py-28 container mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-14'>


                    {/* image-area */}
                    <div className='flex'>
                         <img className="self-end" src={product} alt="" />
                    </div> 

                    <div className='md:w-1/2'>
                         <h1 className='text-5xl font-light md-5'> Collections </h1>
                         <p className='text-xl md-7 py-10'> You can explore ans shop many differnt collection
                         from various barands here. </p>
                         <button className='bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'> <FaBagShopping className='inline-flex'/> Shop Now</button>
                    </div>
                    
               </div>

          </div>
     );
};

export default Banner;
import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

     const { id } = useParams();
     const [products, setProducts] = useState({}); // Initialize as an empty object
     
     useEffect(() => { 
         // Fetch data from the backend
         const fetchData = async () => {
             try {
                 const response = await fetch("/products.json");
                 const data = await response.json(); // Just parse the JSON response
                 const product = data.filter((p) => p.id == id); // Filter the product by ID
                 
                 setProducts(product[0]); // Set the first matching product or an empty object if none found
             } catch (error) {
                 console.log("Error fetching data:", error);
             }
         };
     
         fetchData();
         window.scroll({top: 0, behavior: 'smooth'});
     }, [id]);
     
     const { title, category, price, image, status } = products || {}; // Destructure safely
     

     return (
          <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>

               <div className="flex items-center gap-2 pt-8 text-Black/50">
                    <a href="/">Home</a> <a href="/shop" className="font-semibold text-black">/ Shop</a>
               </div>
               <div className='p-3 max-w-7xl m-auto'>
                    <div className='mt-4 sm:mt-10'>
                         <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                              <div className='overflow-hidden rounded-x'>
                                   <img src={image} alt="" className='w-full'/>
                              </div>


                              {/* product details */}
                              <div>
                                   <h1 className='title text-left'>{title}</h1>

                                   <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum necessitatibus nihil nulla. Esse repudiandae repellat alias enim, facere aliquam sit, vitae provident possimus porro consequatur voluptates ipsam nesciunt exercitationem quidem?</p>

                                   <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                                       <FaStar/>
                                       <FaStar/>
                                       <FaStar/>
                                       <FaStar/>
                                       <FaStar/>
                                   </span>

                                   <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${price}</p>


                                   <div className='mt-4'>
                                        <div className='text-left flex flex-col gap-2 w-full'>
                                             <label className='font-semibold'>Qunatity</label>
                                             <input type="number" name='price' id='price' defaultValue={1} required className='border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500' />
                                        </div>

                                        <div className='w-full text-left my-4'>
                                             <button className='flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-salte-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6 '><span>Confirmed Order</span><FaArrowAltCircleRight/></button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>




                    <div className='text-black/75 mt-12'>
                         <p>Customers like the comfort, quality, and appearance of the sweater. They mention it has a soft comfortable feel, the stitching is high-quality, and the hardware is nice. Some appreciate the warmth, material thickness, and weight. However, some customers disagree on the fit.</p>
                         <p>Customers like the quality, comfort, and sexiness of the sweatshirt. They mention it&lsquo;s durable, soft, cozy, and has a touch of timeless style. Some are also happy with the warmth. However, some customers disagree on the fit and material thickness.</p>
                         <p>Upgrade your wardrobe with our Premium Cotton T-Shirt! Crafted from 100% soft, breathable cotton, this T-shirt is designed to offer both style and comfort for everyday wear. Available in a variety of colors and sizes, it’s perfect for any casual outing or as a base layer for your favorite jacket.</p>
                         <p>Upgrade your wardrobe with our Premium Cotton T-Shirt! Crafted from 100% soft, breathable cotton, this T-shirt is designed to offer both style and comfort for everyday wear. Available in a variety of colors and sizes, it’s perfect for any casual outing or as a base layer for your favorite jacket.</p>
                    </div>
               </div>
          </div>
     );
};

export default SingleProduct;
import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa6';
import Cards from '../../components/Cards';




const Product = () => {


     
     const [products, setProducts]  = useState([]);
     const [filteredItems, setFilteredItems] = useState([]);
     const [selectedCategory, setSelectedCategory] = useState("all"); // Default: All
     const [sortOption, setSortOption] = useState("default"); // Default sorting option
     
     useEffect(() => {
       // Fetch data from the backend
       const fetchData = async () => {
         try {
           const response = await fetch("products.json");
           const data = await response.json();
           setProducts(data); // Initially, display all items
           setFilteredItems(data);
         } catch (error) {
           console.error("Error fetching data:", error);
         }
       };
   
       fetchData();
     }, []);

      

     // filtering function 
     const filterItems = (category) => {
          const filtered =
            category === "all" ? (products) : products.filter((item) => item.category === category);
      
          setFilteredItems(filtered);
          setSelectedCategory(category);
        };

     //    Show all product
     const showAll = () => {
          setFilteredItems(products);
          setSelectedCategory("all");
     };


     // Sorting functionality
     const handleSortChange = (option) => {
          setSortOption(option);
      
          // Logic for sorting based on the selected option
          let sortedItems = [...filteredItems];
      
          switch (option) {
            case "A-Z":
              sortedItems.sort((a, b) => a.title.localeCompare(b.title));
              break;
            case "Z-A":
              sortedItems.sort((a, b) => b.title.localeCompare(a.title));
              break;
            case "low-to-high":
              sortedItems.sort((a, b) => a.price - b.price);
              break;
            case "high-to-low":
              sortedItems.sort((a, b) => b.price - a.price);
              break;
            default:
              // Do nothing for the "default" case
              break;
          }
      
          setFilteredItems(sortedItems);
     };
      
      
     
     return (
          <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 md-12'>
               <h2 className='text-3xl font-semibold capitalize text-center my-8 text-gray-600'> Or subscribe to the newsletter </h2>

               {/* Product Area */}
               <div>
                    
                    <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 md-8'>
                         <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                              <button onClick={showAll}>All products</button>
                              <button onClick={() => filterItems("Dress")}>Clothing</button>
                              <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
                              <button onClick={() => filterItems("Bag")}>Bag</button>
                         </div>


                         {/* Shorting Option  */}
                         <div className='flex justify-end md-4 rounded-sm'>
                              <div className='bg-black p-2'>
                                   <FaFilter className='text-white h-4 w-4'/>
                              </div>


                              <select 
                               id="sort"
                               onChange={(e) => handleSortChange(e.target.value)}
                               value={sortOption}
                              
                              
                              className='bg-black text-white px-2 py-1 rounded-sm'>
                                   <option value="default">Default</option>
                                   <option value="A-Z">A-Z</option>
                                   <option value="Z-A">Z-A</option>
                                   <option value="high-to-low">high-to-low</option>
                              </select>
                         </div>
                    </div>


                    <Cards filteredItems={filteredItems}/>
               </div>
          </div>
     );
};

export default Product;
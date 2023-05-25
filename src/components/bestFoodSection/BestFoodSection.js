import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const BestFoodSection = () => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        fetch('https://wolf-meal-server-production.up.railway.app/newmeals')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])
    return (
        <div className='my-20 container'>

        <div className='lg:flex justify-between items-center w-5/6 mx-auto  mb-10'>
           <div className='lg:text-6xl md:text-5xl text-4xl  font-primary lg:text-start text-center'>
            <span>Our <span className='text-orange-600 '>Best Deliverd</span></span>
             <br />
            <h1 className='mt-2'>Food</h1>
           </div>
           <div className='font-third lg:text-start text-center  text-xl'>
            <p>It's not just about bringing food from 
                <br className='lg:block hidden'/>
              restaurents, We deliver you experience</p>
           </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 w-5/6 mx-auto'>
{
    meals.map(element => 
        <div key={element._id} className="flex flex-col items-center ">
            <figure>
                <img className='rounded-full  w-4/5 mx-auto' src={element.strMealThumb} alt="food" /></figure>
                <h2 className="card-title text-2xl text-center mt-2">{element.strMeal}</h2>
                <Link className='text-center text-orange-600 flex justify-center items-center' to={`/conformOrder/${element._id}`}>
                     <p className='text-xl font-bold font-third text-orange-600'>Order Now</p>
                      <FaAngleRight className='h-6 w-6'/>
                </Link>
            </div>
    )
}
        </div>
      
         <div className='w-full mt-10  text-center'>
         <button>
                <Link className='btn btn-outline px-10 py-1' to="/meals">
                See More <FaAngleRight className='h-6 w-6'/>
                </Link>
            </button>
         </div>
    
        </div>
    );
};

export default BestFoodSection;
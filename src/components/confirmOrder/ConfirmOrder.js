
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';

const ConfirmOrder = () => {
const {user} = useContext(AuthContext)
    const meal = useLoaderData();
    const { strMeal, strMealThumb, strInstructions,strArea } = meal;
    const handleForm = (event)=>{
        event.preventDefault();
        const form = event.target;
        const address = form.address.value
        const message = form.message.value
        const phone = form.phone.value
        const email = form.email.value
        const name = form.name.value
        const details = {name, email,strArea, address, message, phone, strMeal,strMealThumb};
    
    fetch("https://wolf-meal-server-production.up.railway.app/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(details)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
           if(data.acknowledged){
            form.reset();
            Swal.fire("Order placed successfully")
           }
        })
        .catch(error=>console.log(error))
    }

    return (
        <div className='lg:w-3/4 md:w-3/4 container lg:px-20 md:px-20 bg-base-100'>
            <div className="shadow-xl">
            <figure><img  className='w-full lg:h-96 h-56' src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strInstructions}</p>
            </div>

            <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">input your information to confirm order</p>
    </div>
    <form onSubmit={handleForm} className="lg:w-2/3 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Name</label>
            <input required type="text" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Email</label>
            <input defaultValue={user.email?user.email: ""} required type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Phone</label>
            <input required type="number" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Address</label>
            <input required name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className='mx-auto'>
            
       <button type='submit' className='btn btn-primary'>
        Confirm Order
       </button>
        </div>
       
      </div>
    </form>
  </div>
</section>

        </div>
        </div>

    );
};

export default ConfirmOrder;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';


const OrdersRow = ({ order, orders,handleDelete,setOrders, setRefresh }) => {
    const { address, email, name, phone, strMealThumb, strMeal, _id } = order;
    const {user} = useContext(AuthContext);
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const address = form.address.value
        const message = form.message.value
        const phone = form.phone.value
        const email = form.email.value
        const name = form.name.value
        const details = { name, email, address, message, phone };

            fetch(`https://wolf-meal-server.vercel.app/orders/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(details)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount> 0){
                        setRefresh(pre=>!pre)
                        console.log(data);
                    }
            
                })
                .catch(error => console.log(error))
        
    }
    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                strMealThumb &&
                                <img src={strMealThumb} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {strMeal}
            </td>
            <td>

                <span className="">{address}</span>
            </td>
            <td>

                <span className="">{email}</span>
            </td>
            <td>{phone}</td>
            <th>
                <button className="btn btn-ghost btn-xs">
                    <label htmlFor="my-modal-5">Update</label>
                </button>
            </th>
           <div>
           <form onSubmit={handleUpdate}>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h1 className='text-2xl my-2 uppercase font-bold text-center'>Update your order details</h1>
                        <div  className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Name</label>
                                        <input defaultValue={name} required type="text" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Email</label>
                                        <input defaultValue={user?.email} required type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label defaultValue={order.phone} className="leading-7 text-sm text-gray-600">Phone</label>
                                        <input required type="number" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Address</label>
                                        <input required name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className='mx-auto'>
                                </div>

                            </div>
                        </div>

                        <div className="modal-action">
                            <button type="submit">
                            <label htmlFor="my-modal-5" className="btn">Update</label>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
           </div>
            
        </tr>
    );

};


export default OrdersRow;
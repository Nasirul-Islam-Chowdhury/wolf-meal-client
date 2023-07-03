import React, { useContext, useEffect, useState } from 'react';
import OrdersRow from './OrdersRow';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2';


const Orders = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const handleDelete = (id) => {
        fetch(`https://wolf-meal-server.vercel.app/orders/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 1) {
                    const remaining = orders.filter(order=> order._id !== id);
                    setOrders(remaining)
                    Swal.fire("Order Deleted successfully")
                }
            })
    }
    useEffect(() => {
        fetch(`https://wolf-meal-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setRefresh(true)
                setOrders(data)
            })
    }, [refresh, user?.email])
    return (
        <div className='container min-h-[700px]'>
            {
                orders.length > 0 && <div >
                    <h1 className='text-center text-2xl py-5 font-semibold' > Total Orders {orders.length}</h1>
                    <div className="overflow-x-auto w-full" >
                        <table className="table w-full" >
                            <thead >
                                <tr className='text-center' >

                                    <th> </th>
                                    <th > Name </th>
                                    <th> Food Name </th>
                                    <th> Address </th>
                                    <th> Email </th>
                                    <th> Phone </th>
                                    <th> Action </th>
                                </tr >
                            </thead>
                            <tbody className='text-center items-center' >
                                {
                                    orders?.map(order => < OrdersRow handleDelete={handleDelete}
                                        order={order} setRefresh={setRefresh} setOrders={setOrders} orders={orders} key={order._id} />)
                                }
                            </tbody>
                        </table >
                    </div>
                </div >
            }
            {
                orders.length === 0 && <div>
                    <h1 className='text-center my-10 text-4xl font-semibold'>You have no order</h1>
                </div>
            }


        </div>
    );
};

export default Orders;
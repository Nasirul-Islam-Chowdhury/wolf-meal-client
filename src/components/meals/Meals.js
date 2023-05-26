import React, { useContext, useEffect, useState } from 'react';
import Meal from '../meal/Meal';
import { AuthContext } from '../contexts/AuthProvider';

const Meals = () => {
    const { setLoading} = useContext(AuthContext)
    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState("");
    const [search, setSearch] = useState(meals);
    const [foundItems, setFoundItems] = useState(0);
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    const pages = Math.ceil(count / size)
    
    useEffect(() => {
        fetch(`https://wolf-meal-server-production.up.railway.app/meals?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMeals(data.meals)
                setCount(data.count)
                setFoundItems(data.meals.length)
            })
    }, [page, size,setLoading]);

    const handleSearch = (e) => {
        const newMeals = meals.filter(meal => meal.strMeal.includes(e.target.value));
        setSearch(newMeals);
        setFoundItems(newMeals.length)
        setSearchText(e.target.value)
    }

    return (
        <div className='container  md:px-10 px-2'>
            <div>
                <div className='mx-auto md:w-2/5 lg:w-3/5 w-4/5 shadow-lg'>
                    <input onChange={(e) => handleSearch(e)} className='w-full outline-0 text-sm text-black  p-3 mt-2 border rounded' placeholder='search your favorite food here' type="text" />
                </div>
            </div>

            {
                meals.length > 0 &&
                <div>

                    <div>
                        <h1 className='my-5 text-xl italic'>
                            Total Items Found {foundItems}
                        </h1>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
                        {
                            search.length > 0 ?
                                search.map(meal => <Meal key={meal.idMeal} meal={meal} />)
                                :
                                searchText.length == 0 ?
                                    
                                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
                                    :
                                    <div className='min-h-screen col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center'>
                                        <h1 className='text-center text-4xl font-bold '>
                                            No Item Found</h1>
                                    </div>
                        }
                    </div>
                </div>
            }
            <div className='flex flex-wrap justify-center items-center lg:gap-10 
            md:gap-6 gap-4
            my-10'>
            <h1 className='cursor-pointer' onClick={()=>setPage(page - 1)}> Previous</h1>
                {
                    [...Array(pages).keys()].map(n => <button
                        className={`btn bg-blue-900 ${page === n && "bg-red-900"}  `}
                        onClick={() => setPage(n)} key={n}
                    >{n + 1}</button>)
                }
                <h1 className='cursor-pointer' onClick={()=>setPage(page + 1)}> Next</h1>
                <select  onChange={e => setSize(e.target.value) }>
                    <option o  defaultValue={6} value="6">6</option>
                    <option  value="9" >9</option>
                    <option  value="12">12</option>

                </select>
            </div>
        </div>
    );
};



export default Meals;
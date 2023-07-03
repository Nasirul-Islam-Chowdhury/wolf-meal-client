import React, { useContext, useEffect, useState } from "react";
import Meal from "../meal/Meal";
import { AuthContext } from "../contexts/AuthProvider";

const Meals = () => {
  const [loader, setLoader] = useState(true)
  const [meals, setMeals] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const pages = Math.ceil(count / size);


  useEffect(() => {
    fetch(
      `https://wolf-meal-server.vercel.app/meals?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
      
        setLoader(false)
        setMeals(data.meals);
        setCount(data.count);
      });
  }, [page, size]);

  if(loader){
    return <div className="min-h-[100vh] flex justify-center items-center">
  <progress className="progress w-56"></progress>
    </div>
}

  return (
    <div className="container  md:px-10 px-2 my-8">
      {meals.length > 0 && (
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
            {meals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </div>
      )}
      <div
        className="flex flex-wrap justify-center items-center lg:gap-10 
            md:gap-6 gap-4
            my-10"
      >
        <h1 className="cursor-pointer" onClick={() => setPage(page - 1)}>
       
          Previous
        </h1>
        {[...Array(pages).keys()].map((n) => (
          <button
            className={`btn bg-blue-900 ${page === n && "bg-black"}  `}
            onClick={() => setPage(n)}
            key={n}
          >
            {n + 1}
          </button>
        ))}
        <h1 className="cursor-pointer" onClick={() => setPage(page + 1)}>
      
          Next
        </h1>
        <select onClick={()=>setPage(0)} onChange={(e) => setSize(e.target.value)}>
          <option defaultValue={6} value="6">
            6
          </option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  );
};

export default Meals;

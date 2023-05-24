import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const {strMeal, strMealThumb, strInstructions, _id}= meal;
    return (
        <div className="card w-75 bg-base-100 shadow-xl">
            <figure><img className='w-full h-60' src={strMealThumb} alt="food" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strInstructions.slice(0,100)}...</p>
                <div className="card-actions justify-end">
                   <button className='btn btn-primary'>
                        <Link to={`/conformOrder/${_id}`}> Order Now </Link>
                   </button>
                </div>
            </div>
            </div>
        
    );
};

export default Meal;
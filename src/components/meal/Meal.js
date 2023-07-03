import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const {strMeal, strMealThumb, strInstructions, _id}= meal;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className='w-full h-60 object-cover' src={strMealThumb} alt="food" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strInstructions.slice(0,100)}...</p>
                <div className="card-actions justify-end">
                   <button className='btn'>
                        <Link to={`/conformOrder/${_id}`}> Order Now </Link>
                   </button>
                </div>
            </div>
            </div>
        
    );
};

export default Meal;
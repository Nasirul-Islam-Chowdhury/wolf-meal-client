import React from 'react';
import  img from '../../assets/images/bnfd.jpg'
const Pride = () => {
    return (
        <div className='lg:flex justify-between gap-10 w-5/6 mx-auto py-10 container'>
            <div className='lg:w-1/2 '>
<img className='rounded-md' src={img} alt="" />
            </div>
            <div className='lg:w-1/2'>
                <h1 className='lg:text-5xl mt-2 text-3xl font-bold font-fourth text-orange-600'>We Pride Ourselves with making real food from best ingredients</h1>
                <p className='mt-10 text-xl '>Welcome to our food website! Our mission is to inspire and empower individuals to explore the wonderful world of food, to appreciate its diversity, and to foster a love for cooking and sharing meals with others. We believe that food is not just sustenance; it is a universal language that brings people together, transcending cultural boundaries and creating memorable experiences.
</p>
<br/>
<p className='text-xl lg:mt-6'>
Our website is a hub for all things food-related, where you can find a wide array of recipes, cooking tips, culinary techniques, and food-related articles. Whether you're a seasoned chef or a beginner in the kitchen, we aim to provide resources that cater to all skill levels and interests. 
</p>            </div>
        </div>
    );
};

export default Pride;
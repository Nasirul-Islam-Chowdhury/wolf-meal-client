import React from 'react';
import  img from '../../assets/images/bnfd.jpg'
const Pride = () => {
    return (
        <div className='lg:flex justify-between gap-10 w-5/6 mx-auto py-10 container'>
            <div className='lg:w-1/2 '>
<img className='rounded-md' src={img} alt="" />
            </div>
            <div className='lg:w-1/2'>
                <h1 className='lg:text-5xl mt-2 text-4xl font-bold font-fourth text-orange-600'>We Pride Ourselves with making real food from best ingredients</h1>
                <p className='mt-6 text-xl font-semibold'>our mission is to serve best food for you guys. we will not stop so far. we believe we will become the best online shopping in bangladesh.we believe we already become the best food seller in bangladesh</p>
            </div>
        </div>
    );
};

export default Pride;
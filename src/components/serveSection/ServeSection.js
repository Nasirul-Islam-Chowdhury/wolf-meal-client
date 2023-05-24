import React from 'react';
import  img1  from '../../assets/images/box.webp';
import  img2  from '../../assets/images/love.jpg';
import  img3  from "../../assets/images/hto.webp";
const ServeSection = () => {
    return (
        <div className='my-20'>

            <div className='text-center container mb-10 '>
                <h1 className='lg:text-5xl text-3xl font-primary mb-20'>
                    How We <span className='text-orange-600 '>Serve</span>You
                </h1>
                <div className='md:flex text-center flex-wrap justify-between items-center w-5/6 mx-auto'>
                    <div>
                        <img className='w-72 h-64 rounded-full mx-auto mt-2' src={img1} alt="" />
                        <h1 className='text-xl font-bold my-3'>Automated packaging</h1>
                        <h1>100% environment friendly</h1>
                        <h1>Packaging</h1>
                    </div>
                    <div>
                        <img className='w-72 h-64 rounded-full mx-auto mt-2'  src={img2} alt="" />
                        <h1 className='text-xl font-bold my-3'>Packed with love</h1>
                        <h1>We Deliver The Best</h1>
                        <h1>Experiences</h1>
                    </div>
                    <div>
                        <img className='w-72 h-64 rounded-full  mx-auto mt-2' src={img3} alt="" />
                        <h1 className='text-xl font-bold my-3'>Serve Hot Appetite</h1>
                        <h1>Promise to deliver Within</h1>
                        <h1>30 minutes</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServeSection;
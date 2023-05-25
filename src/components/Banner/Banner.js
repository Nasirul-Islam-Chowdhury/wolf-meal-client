import React from 'react';
import bannerImg from '../../assets/images/bnfd.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='bg-cover' style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className=' lg:h-screen md:lg:h-screen h-full lg:p-36 md:p-20 p-10'>
                <div className='flex  flex-col font-primary  gap-3  text-white lg:text-8xl md:text-6xl text-4xl'>
                    <h1>Fastest</h1>
                    <h1>Delivery &</h1>
                    <h1>Easy Pickup</h1>
                </div>
                <div className='lg:w-2/4 mt-10 text-white z-10 lg:flex md:flex justify-start items-center gap-5'>
                    <div className='flex items-center  justify-start gap-5'>
                        <img className='lg:w-10 md:w-10  lg:h-10 w-8 h-8 rounded-xl' src="https://static.wixstatic.com/media/83524445ca90408594501cacb2567307.jpg/v1/crop/x_229,y_18,w_2488,h_2584/fill/w_546,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83524445ca90408594501cacb2567307.jpg" alt="" />
                        <p className=' font-third '>
                            when you are too lazy to cook,
                            <br className='lg:block hidden'/>
                            We Are Just a click away
                        </p>
                    </div>
                    <button className=' lg:text-1xl rounded-lg rounded-se-none rounded-es-none bg-black  z-10 lg:px-14 px-6  outline-double outline-3 outline-offset-2 mt-5 lg:p-2'>
                        <Link to="/meals">
                            Order Now
                        </Link>
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import bannerImg from '../../assets/images/bnfd.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative container'>
            <div className='absolute flex flex-col font-primary gap-3 lg:top-10 md:top-20 top-0 left-10 md:left-20 lg:left-20 text-white lg:text-8xl md:text-6xl text-3xl z-10'>
                <h1>Fastest</h1>
                <h1>Delivery &</h1>
                <h1>Easy Pickup</h1>
            </div>
            <div className='absolute left-10 lg:left-20 lg:bottom-40 md:bottom-48 bottom-8 lg:w-2/4 text-white z-10 lg:flex md:flex justify-start items-center gap-5'>
                <div className='flex items-center  justify-start gap-5'>
                <img className='lg:w-10 md:w-10  lg:h-10 w-8 h-8 rounded-xl' src="https://static.wixstatic.com/media/83524445ca90408594501cacb2567307.jpg/v1/crop/x_229,y_18,w_2488,h_2584/fill/w_546,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83524445ca90408594501cacb2567307.jpg" alt="" />
               <p className='tracking-wider font-third'>
                when you are too lazy to cook, 
                <br />
                We Are Just a click away
               </p>
                </div>
               <button className=' lg:text-1xl rounded-lg rounded-se-none rounded-es-none bg-black  z-10 lg:px-14 px-6  outline-double outline-3 outline-offset-2 mt-3 lg:p-2'>
                <Link to="/meals">
                Order Now
                </Link>
            </button>
            </div>
           
            <div>
                <figure>
                    <img className='w-screen lg:h-screen brightness-50 container ' src={bannerImg} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import ManImg from '../img/man-hero.png';
import {Link} from 'react-router-dom';


const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-orange-500 mr-3'></div>New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH 
          <br/> <span className='font-semibold'>MENS</span></h1>
          <Link 
          to={'/'} 
          className='self-start uppercase font-semibold border-b-2 border-primary'>
          Discover More</Link>
        </div>
        <div className='hidden lg:block'>
          <img className='h-[700px] w-[400px] object-cover w-full h-full' src={ManImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

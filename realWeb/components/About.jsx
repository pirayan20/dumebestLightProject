import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#c9c018]'>
            About
          </p>
          <h2 className='py-4'>Who are We</h2>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ipsum reiciendis officia earum. Tempore cumque earum voluptatibus, doloribus, explicabo quibusdam saepe reiciendis architecto sequi commodi facilis excepturi cum ex ab vel consectetur deleniti nesciunt modi dolorum ad. Sapiente, ea molestias! Temporibus quaerat aperiam blanditiis voluptas nam culpa quisquam assumenda laudantium?
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia hic alias iure repellat eveniet est voluptatibus aut velit veritatis consequatur delectus, repellendus totam commodi, laborum aliquid laudantium animi voluptas aperiam.
          </p>
          <Link href='/resume'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out our resume
            </p>
          </Link>
          <Link href = 'https://github.com/pirayan20/dumebestLightProject'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
            Our Github repositories
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
      
    </div>
  );
};

export default About;

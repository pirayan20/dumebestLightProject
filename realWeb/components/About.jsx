import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/groupPhoto.jpg';

const About = () => {
  return (
    <div id='about' className='w-screen md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] w-4/5 m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#c9c018]'>
            About
          </p>
          <h2 className='py-4'>Who are We</h2>
          <p className='py-2 text-gray-600'>
            We are a group of Computer Engineering student at Chulalongkorn university in Thailand, 
            in our sophomore year, this is our final project in the Embedded system laboratory class.
          </p>
          <p className='py-2 text-gray-600'>
            This is a very breakthrough achivement for all of us, this is the work that we&#39;re not familiar with 
            and it&#39;s very satisfying when the application can work flawlessly. The thing is we can use this 
            knowledge for the future and use it to make some project of our own in the future as well!.
          </p>
          <Link href='/resume'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out our Role
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

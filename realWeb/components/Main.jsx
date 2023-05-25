import Link from 'next/link';
import React from 'react';
import {AiFillSetting} from 'react-icons/ai'

const Main = () => {

  return (
    <div id='home' className='w-screen h-screen text-center'>
      <div className='max-w-[70] w-5/6 h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S LIGHT SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Welcome! to the <span className='text-[#c9c018]'>dumbestLightProject</span>
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
           we&#39;re focused on building a light that will make some people lives easier and 
           make some profit of our own if that&#39;s possible
          </p>
          <div className='flex items-center justify-between max-w-[50px] m-auto py-4'>
            <Link href='#howto'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillSetting />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Role</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

     
      <div className='max-w-[940px] w-6/7 mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Role</h2>

        {/* -------------------------eiampoo-------------------------------------- */}
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Eiampoo Vongpradit</h2>
          <div className='flex'>
            <a
              href='https://github.com/nattoshi'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Front-end <span className='px-1'>|</span> Web Development
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          We decided to use Next JS and Tailwind CSS for the front-end developing, this makes
          implementing this web application go smoother and we can all keep track of the file easily,
          since the functionality of this stack would suits us and the application the most.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Stack</h5>
          <p className='py-2'>
            <span className='px-2'></span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
        </div>


         {/* -------------------------pirayan-------------------------------------- */}
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Pirayan Rananand</h2>
          <div className='flex'>
            <a
              href='https://github.com/pirayan20'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Back-end <span className='px-1'>|</span> Web Development
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Using firebase with this application is the best way in our opinion, real-time database
          is necessary for keeping trak of all the parameter such as the brightness and the temperature,
          then we can send all the data that&#39;s associated with the firebase and the embedded system to
          the system and use it.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Stack</h5>
          <p className='py-2'>
            <span className='px-2'></span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
        </div>

        {/* -------------------------wish-------------------------------------- */}
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Wish Marukapitak</h2>
          <div className='flex'>
            <a
              href='https://github.com/wish-eq'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              System architecture <span className='px-1'>|</span> SYstem design
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          The part where designing the application and its functionality is the part that associated
          with this part the most, system design is very new to us and we decided to use STM32 and 
          Arduino IDE for the stack, because of how well both can integrated and communicate to each other
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Stack</h5>
          <p className='py-2'>
            <span className='px-2'></span> Arduino
            <span className='px-2'>|</span>STM32
            <span className='px-2'>|</span>Firebase
          </p>
        </div>


        {/* -------------------------tanawin-------------------------------------- */}
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Tanawin Visanuyothin</h2>
          <div className='flex'>
            <a
              href='https://github.com/tanawinvisa'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Integrating the system
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          After the designing of the system, the implementing of the system are the hard part. Since we are
          not familiar with the embedded system and all the sensor. But the design is somehow straightforward and 
          can be done in a lot of simple step, little setback but we&#39;ve done it.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Stack</h5>
          <p className='py-2'>
            <span className='px-2'></span>Arduino
            <span className='px-2'>|</span>STM32
            <span className='px-2'>|</span> Firebase
          </p>
        </div>

      </div>
    </>
  );
};

export default resume;

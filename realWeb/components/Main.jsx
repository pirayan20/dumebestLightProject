import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {AiFillSetting} from 'react-icons/ai'
import {BsFillLightbulbFill } from 'react-icons/bs';
import ToggleButton from './ToggleButton';
import {getDatabase, ref,set, onValue} from 'firebase/database'
import firebase from '../lib/firebase'

const Main = () => {

  const [buttonState, setButtonState] = useState(null);

  const handleButtonToggle = () => {
    const newButtonState = !buttonState;
  
    // Update the state variable
    setButtonState(newButtonState);
  
    // Update the Firebase data
    const database = getDatabase();
    const buttonStateRef = ref(database, '/test/buttonState');
    set(buttonStateRef, newButtonState ? 1 : 0);
  };

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[70] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S LIGHT SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Welcome! to the <span className='text-[#c9c018]'>dumbestLightProject</span>
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
           we&#39;re focused on building a dumbest thing that no people would want to use it and
           make money out of it for no reason
          </p>
          <div className='flex items-center justify-between max-w-[150px] m-auto py-4'>
            <ToggleButton buttonState={buttonState} handleButtonToggle={handleButtonToggle} />
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

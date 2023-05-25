import React, { useState, useEffect } from 'react';
import {getDatabase, ref, set, onValue} from 'firebase/database'
import firebase from '../lib/firebase'
import {BsSunFill, BsMoonFill} from 'react-icons/bs'
import {MdMotionPhotosOff, MdMotionPhotosOn} from 'react-icons/md'
import ToggleParent from './ToggleParent'

const Howto = () => {
  const [brightnessData, setBrightnessData] = useState(null);
  const [temperatureData, setTemperatureData] = useState(null);
  const [stateData, setStateData] = useState(null);
  const [buttonStateData, setButtonStateData] = useState(null);
  const [humidData, setHumidData] = useState(null);


  useEffect(() => {
    const database = getDatabase(firebase)

    // Fetch data from the "/test/brightness" path
    const brigtnessRef = ref(database,"/test/brightness") 
    const brightnessUnsubscribe = onValue(brigtnessRef, (snapshot) => {
      const data = snapshot.val();
      setBrightnessData(data);
    });

    // Fetch data from the "/test/temperature" path
    const temperatureRef = ref(database, "/test/temperature");
    const temperatureUnsubscribe = onValue(temperatureRef, (snapshot) => {
      const data = snapshot.val();
      setTemperatureData(data);
    });

    // Fetch data from the "/test/State" path
    const stateRef = ref(database, "/test/State");
    const stateUnsubscribe = onValue(stateRef, (snapshot) => {
      const data = snapshot.val();
      setStateData(data);
    });

    // Fetch data from the "/test/buttonState" path
    const buttonRef = ref(database, "/test/buttonState");
    const buttonStateUnsubscribe = onValue(buttonRef, (snapshot) => {
      const data = snapshot.val();
      setButtonStateData(data);
    });

    // Fetch data from the "/test/humid" path
    const humidRef = ref(database,"/test/humid") 
    const humidUnsubscribe = onValue(humidRef, (snapshot) => {
      const data = snapshot.val();
      setHumidData(data);
    });

    // Clean up the listeners on unmount
    return () => {
      brightnessUnsubscribe();
      temperatureUnsubscribe();
      stateUnsubscribe();
      buttonStateUnsubscribe();
      humidUnsubscribe();
    };
  }, []); 

  const formattedBrightnessData = brightnessData !== null ? brightnessData.toFixed(2) : "N/A";
  const formattedTempData = temperatureData !== null ? temperatureData.toFixed(2) : "N/A";

  return (
    <div id='howto' className='w-full h-screen text-center'>
      <div className='max-w-[70] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            How to use our <span className='text-[#c9c018]'> Light</span>
          </h1>
          
          <div className='py-2 text-gray-600'>
            <li>
              You can turn on/off the light via the button.
            </li>
            <li>
              If it&#39;s not dark yet, the lights will not turn on. Even if you press the button or not.
            </li>
            <li>If it&#39;s not bright, you can turn off the lights.</li>
            <li>If you turn on the light when it&#39;s bright, the light will not turn on until it&#39;s dark.</li>
            <li>And when it&#39;s dark, the light will turn on according to the motion sensor</li>
          </div>

          {/* Render data from Firebase */}
          <div className='flex items-center justify-between max-w-[250px] m-auto py-4'>

            <ToggleParent />

            <div
              className={`rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 ${
                stateData == 10 ? 'bg-blue-500' : 'bg-[#fffff]'
              }`}
            >
            {stateData == 10 ? (
              <MdMotionPhotosOn />
            ) : (
              <MdMotionPhotosOff/>
            )}
            </div>

            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            {formattedBrightnessData > 25 ? (
              <BsSunFill className='text-yellow-500' />
            ) : (
              <BsMoonFill className='text-blue-500' />
            )}
            </div>

          </div>

          <div className='flex items-center justify-between max-w-[250px] m-auto py-4'>
            <div>
              <h4>Temperature (C)</h4>
              <p>{formattedTempData}</p>
            </div>

            <div>
              <h4>Humidity (%)</h4>
              <p>{humidData}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Howto

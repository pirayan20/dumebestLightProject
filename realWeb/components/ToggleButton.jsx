import React from 'react';
import { BsFillLightbulbFill } from 'react-icons/bs';

const ToggleButton = ({ buttonState, handleButtonToggle }) => {
  return (
    <div
      className={`rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 ${
        buttonState ? 'bg-[#c9c018]' : 'bg-gray-500'
      }`}
      onClick={handleButtonToggle}
    >
      <BsFillLightbulbFill />
    </div>
  );
};

export default ToggleButton;

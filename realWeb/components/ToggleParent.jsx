import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import {getDatabase, ref, set} from 'firebase/database'

const ToggleParent = () => {
  const [buttonState, setButtonState] = useState(false);

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
    <div>
      <ToggleButton buttonState={buttonState} handleButtonToggle={handleButtonToggle} />
    </div>
  );
};

export default ToggleParent;

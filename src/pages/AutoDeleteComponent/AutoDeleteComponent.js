import React, { useState } from 'react';
import WarningSign from '../WarningSign/WarningSign';
import './AutoDeleteComponent.scss';

function AutoDeleteComponent({ getData, getAutoDelData }) {
  const [inputValue, setInputValue] = useState(0);
  const [displayPencil, setDisplayPencil] = useState(true);
  const [handleWarning, setHandleWarning] = useState(false);
  const MAX_INPUT = 10;
  const possibleMax = Math.min(MAX_INPUT, getData.length);

  const handleInputChange = e => {
    const input = Math.floor(e.target.value);

    if (input <= 0 || input > possibleMax) {
      setHandleWarning(true);
      setTimeout(() => setHandleWarning(false), 2000);
      return;
    }
    setInputValue(input);
    setDisplayPencil(false);
    setTimeout(() => getAutoDelData(inputValue), 0);
  };

  // const handleInputChange = e => {
  //   const input = Math.floor(e.target.value);

  //   if (input <= 0 || input > possibleMax) {
  //     setHandleWarning(true);
  //     setTimeout(() => setHandleWarning(false), 2000);
  //     return;
  //   }
  //   setInputValue(input);
  //   setDisplayPencil(false);
  //   getAutoDelData(input);
  // };

  const onReset = e => {
    if (e.key === 'Backspace' || e.type === 'mouseleave') {
      setInputValue('');
      setDisplayPencil(true);
    }
  };

  const onIncrease = () => {
    setInputValue(prevNum => {
      return prevNum + 1 <= possibleMax ? Number(prevNum + 1) : Number(prevNum);
    });
    getAutoDelData(inputValue);
  };
  // console.log(inputValue);

  const onDecrease = () => {
    setInputValue(prevNum => {
      return Number(prevNum - 1) >= 0 ? Number(prevNum - 1) : 0;
    });
    getAutoDelData(inputValue);

    // const onIncrease = () => {
    //   setInputValue(prevNum => {
    //     return prevNum + 1 <= possibleMax ? prevNum + 1 : prevNum;
    //   });
    // };

    // const onDecrease = () => {
    //   if (inputValue <= 0) {
    //     setInputValue(0);
    //   } else {
    //     setInputValue(prevNum => prevNum - 1);
    //   }
  };
  return (
    <div>
      {handleWarning && <WarningSign possibleMax={possibleMax} />}
      <div className='TotalContainer'>
        <h3 className='TotalDataQuantity'>Auto delete</h3>
        <div className='TotalDataQuantityWrapper'>
          <div className='AutoDeleteInputContainer'>
            <div className='circleDelete'>
              {displayPencil ? (
                <label
                  htmlFor='numInput'
                  onMouseEnter={() => setDisplayPencil(false)}
                />
              ) : (
                <>
                  <input
                    id='numInput'
                    type='number'
                    placeholder={0}
                    step={1}
                    min={0}
                    max={possibleMax}
                    onChange={handleInputChange}
                    value={inputValue}
                    onKeyDown={onReset}
                    onBlur={onReset}
                  />
                  <div className='btnContainer'>
                    <button className='increase' onClick={() => onIncrease()}>
                      +
                    </button>
                    <button className='decrease' onClick={() => onDecrease()}>
                      -
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoDeleteComponent;

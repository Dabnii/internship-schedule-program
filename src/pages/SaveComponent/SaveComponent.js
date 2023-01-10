import React from 'react';
import './SaveComponent.scss';

function SaveComponent() {
  return (
    <div>
      <div className='TotalContainer'>
        <h3 className='TotalDataQuantity'>Save Data!</h3>
        <div className='TotalDataQuantityWrapper'>
          <div className='circle'>
            <img className='saveIcon' src='image/save.svg' alt='save icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveComponent;

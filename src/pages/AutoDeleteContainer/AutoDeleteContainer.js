import React from "react";
import "./AutoDeleteContainer.scss";

function AutoDeleteContainer({ getData }) {
  return (
    <div>
      <div className="TotalContainer">
        <h3 className="TotalDataQuantity">Total Schedule</h3>
        <div className="TotalDataQuantityWrapper">
          <div className="circle">{getData.length}</div>
        </div>
      </div>
    </div>
  );
}

export default AutoDeleteContainer;

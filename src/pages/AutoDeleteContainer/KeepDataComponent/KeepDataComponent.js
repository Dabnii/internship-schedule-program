import React from "react";
import "./KeepDataComponent.scss";

function KeepDataComponent({ getAutoDelValue, getData }) {
  const total = getData.length;
  const keep = Number(total - getAutoDelValue);

  return (
    <div>
      <div className="TotalContainer">
        <h3 className="TotalDataQuantity">Keep Data</h3>
        <div className="TotalDataQuantityWrapper">
          <div className="circle">{keep}</div>
        </div>
      </div>
    </div>
  );
}

export default KeepDataComponent;

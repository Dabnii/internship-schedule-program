import React from "react";
import "./WarningSign.scss";

function WarningSign({ possibleMax }) {
  return (
    <div className="warningPopup">
      <p>📢</p>
      <h2>Please Enter less than {possibleMax}, Greater than 0</h2>
    </div>
  );
}

export default WarningSign;

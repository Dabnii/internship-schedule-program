// import React, { useEffect, useState } from "react";
// import "./index.scss";

// const ScheduleAutoDeleteViewOption = ({
//   model,
//   prediction,
//   createCount,
//   retrainingKeepModel,
//   setRetrainingKeepModel,
//   predictionKeepModel,
//   setPredictionKeepModel,
// }) => {
//   const [deleteCount, setDeleteCount] = useState(0);
//   const [preDeleteCount, setPreDeleteCount] = useState(0);

//   const MAX_KEEP = 6;
//   const possibleMax = Math.min(MAX_KEEP, createCount);

//   useEffect(() => {
//     if (createCount >= retrainingKeepModel) {
//       setDeleteCount(createCount - retrainingKeepModel);
//     }
//   }, [createCount, retrainingKeepModel]);

//   useEffect(() => {
//     if (createCount >= predictionKeepModel) {
//       setPreDeleteCount(createCount - predictionKeepModel);
//     }
//   }, [createCount, predictionKeepModel]);

//   return (
//     <>
//       {model && (
//         <div className="auto-del-box">
//           <div className="total-wrap">
//             <span className="total-wrap-text">Total Scheduled Models</span>
//             <span className="total-wrap-num">{createCount}</span>
//           </div>
//           <div className="keep-wrap">
//             <span className="keep-wrap-text">Keeping Latest Models</span>
//             <input
//               type="number"
//               className="delQuality"
//               placeholder={1}
//               id="delQuality"
//               step={1}
//               min={1}
//               max={possibleMax}
//               value={retrainingKeepModel}
//               onChange={e => setRetrainingKeepModel(Number(e.target.value))}
//             />
//           </div>
//           <div className="current-wrap">
//             <span className="current-text">Current</span>
//             <span className="current-num">{deleteCount}</span>
//             <span className="current-text">Models will be deleted</span>
//           </div>
//         </div>
//       )}
//       {prediction && (
//         <div className="auto-del-box">
//           <div className="total-wrap">
//             <span className="total-wrap-text">
//               Total Scheduled Predictions per Model
//             </span>
//             <span className="total-wrap-num">{createCount}</span>
//           </div>
//           <div className="keep-wrap">
//             <span className="keep-wrap-text">Keeping Latest Predictions</span>
//             <input
//               type="number"
//               className="delQuality"
//               placeholder={1}
//               id="delQuality"
//               step={1}
//               min={1}
//               max={possibleMax}
//               value={predictionKeepModel}
//               onChange={e => setPredictionKeepModel(Number(e.target.value))}
//             />
//           </div>
//           <div className="current-wrap">
//             <span className="current-text">Current</span>
//             <span className="current-num">{preDeleteCount}</span>
//             <span className="current-text">Predictions will be deleted</span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ScheduleAutoDeleteViewOption;

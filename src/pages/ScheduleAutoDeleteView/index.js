// import React, { useEffect, useState } from "react";
// import { FormattedMessage } from "react-intl";
// import { Toggle } from "../../../../../components/Controls";
// import ScheduleAutoDeleteViewOption from "./ScheduleAutoDeleteViewOption";
// import messages from "../ScheduleMethodView/messages";
// import "./index.scss";

// const ScheduleAutoDeleteView = ({
//   scheduleType,
//   schedulingOptions,
//   createModel,
//   setRetrainingOptions,
//   setPredictionOptions,
// }) => {
//   // retraining
//   const [retrainingAutoDeletion, setRetrainingAutoDeletion] = useState(false);
//   const [retrainingKeepModel, setRetrainingKeepModel] = useState(1);
//   // prediction
//   const [predictionAutoDeletion, setPredictionAutoDeletion] = useState(false);
//   const [predictionKeepModel, setPredictionKeepModel] = useState(1);

//   // model
//   useEffect(() => {
//     setRetrainingOptions(prev => ({
//       ...prev,
//       retrainingAutoDeletion,
//       retrainingKeepModel,
//     }));
//   }, [retrainingAutoDeletion, retrainingKeepModel]);

//   // prediction
//   useEffect(() => {
//     setPredictionOptions(prev => ({
//       ...prev,
//       predictionAutoDeletion,
//       predictionKeepModel,
//     }));
//   }, [predictionAutoDeletion, predictionKeepModel]);

//   return (
//     <div className="studio-del-container">
//       <div className="studio-block_wrapper">
//         <h4 className="studio-block__title dark bold">
//           <span>
//             <FormattedMessage {...messages.autoDeleteOption} />
//           </span>
//         </h4>

//         {scheduleType && scheduleType.includes("retraining") ? (
//           <div className="studio-container_auto_del">
//             <div className="title-wrap">
//               <span className="title-wrap-text">Enable Model Auto-delete</span>
//               <Toggle
//                 checked={retrainingAutoDeletion}
//                 onChange={() =>
//                   setRetrainingAutoDeletion(!retrainingAutoDeletion)
//                 }
//               />
//             </div>
//             {retrainingAutoDeletion && (
//               <ScheduleAutoDeleteViewOption
//                 model={scheduleType.includes("retraining")}
//                 createCount={createModel}
//                 retrainingKeepModel={retrainingKeepModel}
//                 setRetrainingKeepModel={setRetrainingKeepModel}
//               />
//             )}
//           </div>
//         ) : (
//           <></>
//         )}
//         {scheduleType && scheduleType.includes("batch") ? (
//           <div className="studio-container_auto_del">
//             <div className="title-wrap">
//               <span className="title-wrap-text">
//                 Enable Prediction Auto-delete
//               </span>
//               <Toggle
//                 checked={predictionAutoDeletion}
//                 onChange={() =>
//                   setPredictionAutoDeletion(!predictionAutoDeletion)
//                 }
//               />
//             </div>
//             {predictionAutoDeletion && (
//               <ScheduleAutoDeleteViewOption
//                 prediction={scheduleType.includes("batch")}
//                 createCount={schedulingOptions.createCount}
//                 predictionKeepModel={predictionKeepModel}
//                 setPredictionKeepModel={setPredictionKeepModel}
//               />
//             )}
//           </div>
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ScheduleAutoDeleteView;

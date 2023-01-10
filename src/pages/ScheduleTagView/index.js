// import React from 'react';
// import './index.scss';

// class ScheduleTagView extends React.Component {
//   state = {
//     matchingTag: '',
//     retrainingTag: '',
//     batchPredictionTag: '',
//   };

//   mapApiData = () => {
//     const { scheduleDetails } = this.props;
//     const scheduleType = scheduleDetails.type;
//     const scheduleTags = scheduleDetails.tags;

//     if (scheduleType === 'retraining_batch') {
//       // eslint-disable-next-line array-callback-return
//       scheduleTags.map(item => {
//         if (item.type === 'retraining') {
//           this.setState({ retrainingTag: item.tag });
//         }
//         if (item.type === 'batch_prediction') {
//           this.setState({ batchPredictionTag: item.tag });
//         }
//       });
//     } else {
//       // eslint-disable-next-line array-callback-return
//       scheduleTags.map(item => {
//         this.setState({ matchingTag: item.tag });
//       });
//     }
//   };

//   componentDidMount = () => {
//     this.mapApiData();
//   };

//   render() {
//     // const { scheduleDetails } = this.props;
//     return (
//       <div className='studio-container'>
//         <div className='studio-block_wrapper'>
//           <h4 className='studio-block__title dark bold'>
//             <span>ScheduleTag</span>
//           </h4>
//           <div className='studio-container_border'>
//             <p>
//               Use the latest dataset which has this tag when executing the
//               schedule
//             </p>
//             <div className='ant-form-item-control-wrapper'>
//               {/* {scheduleDetails.type === "retraining_batch" ? ( */}
//               <>
//                 <input
//                   className='tagInput'
//                   name='name'
//                   type='text'
//                   placeholder={this.state.retrainingTag}
//                   readOnly
//                 />
//                 <input
//                   className='tagInput'
//                   name='name'
//                   type='text'
//                   placeholder={this.state.batchPredictionTag}
//                   readOnly
//                 />
//               </>
//               ) : (
//               <input
//                 className='tagInput'
//                 name='name'
//                 type='text'
//                 placeholder={this.state.matchingTag}
//                 readOnly
//               />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ScheduleTagView;

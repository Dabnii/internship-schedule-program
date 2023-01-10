// /* eslint-disable jsx-a11y/label-has-for */
// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
// import { change } from 'redux-form';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import _ from 'lodash';
// import TabToggle from 'components/Controls/TabToggle';
// import { getWorkspaceDatasetsRequest } from 'containers/Projects/actions';
// import { getUniconnectDatasetsRequest } from 'containers/Datasets/actions';
// import { makeSelectWorkspaceDatasets } from 'containers/Projects/selectors';
// import { makeSelectUniconnectDatasets } from 'containers/Datasets/selectors';
// import { DISPLAY_MODES } from './constants';
// import messages from './messages';
// import LocalUploadTab from './LocalUploadTab';
// import StagingUploadTab from './StagingUploadTab';
// import ExitingUploadTab from './ExistingUploadTab';
// import './styles.scss';

// class TabsMenu extends React.PureComponent {
//   state = {
//     countStaging: null,
//     countExisting: null,
//   };

//   componentDidMount() {
//     const { workspaceId } = this.props;
//     const data = { page_size: 5 };
//     this.props.changeTypeValue(DISPLAY_MODES.local);
//     this.props.getWorkspaceDatasetsRequest({ workspaceId, data });
//     this.props.getUniconnectDatasetsRequest();
//   }

//   componentWillReceiveProps(nextProps) {
//     const { stagingDatasets, existingDatasets } = nextProps;
//     const { countStaging, countExisting } = this.state;
//     if (
//       stagingDatasets &&
//       _.isArray(stagingDatasets) &&
//       stagingDatasets.length !== countStaging
//     ) {
//       this.setState({ countStaging: stagingDatasets.length });
//     }
//     if (existingDatasets && existingDatasets.count !== countExisting) {
//       this.setState({ countExisting: existingDatasets.count });
//     }
//   }

//   changeDisplayMode = displayMode => {
//     this.props.handleDisplayMode(displayMode);
//     this.props.changeTypeValue(displayMode);
//   };

//   render() {
//     const { workspaceId, isExisingEmpty, displayMode } = this.props;
//     const { countStaging, countExisting } = this.state;

//     return (
//       <div className="tabs">
//         <div className="tabs-menu">
//           <label className="tabs__title">
//             <FormattedMessage {...messages.dataFileText} />
//           </label>
//           <div className="tabs-button-wrap">
//             <TabToggle
//               active={displayMode === DISPLAY_MODES.staging}
//               text={
//                 <div className="tab-text">
//                   <FormattedMessage {...messages.stagingDirectoryText} />
//                   <span className="tab-text__counter">{countStaging}</span>
//                 </div>
//               }
//               onClick={() => this.changeDisplayMode(DISPLAY_MODES.staging)}
//             />
//             <TabToggle
//               active={displayMode === DISPLAY_MODES.local}
//               text={
//                 <div className="tab-text">
//                   <FormattedMessage {...messages.localComputerText} />
//                 </div>
//               }
//               onClick={() => this.changeDisplayMode(DISPLAY_MODES.local)}
//             />
//             <TabToggle
//               active={displayMode === DISPLAY_MODES.existing}
//               text={
//                 <div className="tab-text">
//                   <FormattedMessage {...messages.existingDatasetsText} />
//                   <span className="tab-text__counter">{countExisting}</span>
//                 </div>
//               }
//               onClick={() => this.changeDisplayMode(DISPLAY_MODES.existing)}
//             />
//           </div>
//         </div>
//         {displayMode === DISPLAY_MODES.staging && <StagingUploadTab />}
//         {displayMode === DISPLAY_MODES.local && <LocalUploadTab />}
//         {displayMode === DISPLAY_MODES.existing && (
//           <ExitingUploadTab
//             workspaceId={workspaceId}
//             isExisingEmpty={isExisingEmpty}
//           />
//         )}
//       </div>
//     );
//   }
// }

// TabsMenu.propTypes = {
//   displayMode: PropTypes.string,
//   workspaceId: PropTypes.any,
//   isExisingEmpty: PropTypes.bool,
// };

// const mapStateToProps = createStructuredSelector({
//   stagingDatasets: makeSelectUniconnectDatasets(),
//   existingDatasets: makeSelectWorkspaceDatasets(),
// });

// const mapDispatchToProps = dispatch => ({
//   getWorkspaceDatasetsRequest: data => {
//     dispatch(getWorkspaceDatasetsRequest(data));
//   },
//   getUniconnectDatasetsRequest: () => {
//     dispatch(getUniconnectDatasetsRequest({}));
//   },
//   changeTypeValue: value => {
//     dispatch(change('UploadDatasetForm', 'dataset_loading_type', value));
//   },
// });

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export default compose(withConnect)(TabsMenu);

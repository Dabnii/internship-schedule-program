// /* eslint-disable indent */
// import React from "react";
// import PropTypes from "prop-types";
// import { IconClose } from "components/Svgs";
// import {
//   InputField,
//   LabeledField,
//   WorkspaceProjectMenuField,
// } from "components/Fields";
// import { SimpleButton, BlueButton, Toggle } from "components/Controls";
// import { TextAreaField } from "redux-form-antd";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { hideContainingModal } from "components/Modals/СontainingModal/actions";
// import { intlShape, injectIntl, FormattedMessage } from "react-intl";
// import { change, reduxForm, Field } from "redux-form/immutable";
// import { required, maxLength50 } from "utils/validations";
// import classNames from "classnames";
// import ScheduleTagField from "../../Fields/ScheduleTagField";
// import { DISPLAY_MODES } from "./TabsMenu/constants";
// import messages from "./messages";
// import api from "../../../utils/api";
// import TabsMenu from "./TabsMenu";
// import "./styles.scss";

// class DatasetEditForm extends React.Component {
//   state = {
//     displayMode: DISPLAY_MODES.local,
//     isStagingStatiscticInfoShown: false,
//     isStagingSchedulingTableShown: false,
//     responseType: "retraining",
//     schedulingTagList: [],
//     keyDataFromChild: [],
//     invalidCheck: true,
//   };

//   componentWillMount = () => {
//     if (!this.props.isStaging) {
//       this.props.initialize({ calculate: true });
//     }
//   };

//   handleDisplayMode = mode => {
//     this.setState({ displayMode: mode });
//   };

//   renderSwitch = props => (
//     <Toggle
//       checked={props.input.value}
//       defaultChecked
//       onChange={v => props.input.onChange(v)}
//       disabled={props.displayMode === DISPLAY_MODES.existing}
//     />
//   );

//   toggleStagingStatiscticView = () => {
//     this.setState(({ isStagingStatiscticInfoShown }) => ({
//       isStagingStatiscticInfoShown: !isStagingStatiscticInfoShown,
//     }));
//   };

//   togglesStagingSchedulingTag = () => {
//     this.setState(({ isStagingSchedulingTableShown }) => ({
//       isStagingSchedulingTableShown: !isStagingSchedulingTableShown,
//     }));
//     this.sortTagsApi();
//   };

//   renderTabs = displayMode => {
//     const { workspaceId } = this.props;
//     return (
//       <div className="form__item">
//         <TabsMenu
//           workspaceId={workspaceId}
//           displayMode={displayMode}
//           handleDisplayMode={this.handleDisplayMode}
//         />
//       </div>
//     );
//   };

//   sortTagsApi = async () => {
//     const { workspaceId, projectId } = this.props;
//     const { responseType } = this.state;

//     await api({
//       url: `workspaces/${workspaceId}/projects/${projectId}/tags/type/${responseType}/`,
//       method: "get",
//       headers: { "content-type": "application/json" },
//     }).then(response => {
//       const { data } = response;
//       this.setState({ schedulingTagList: data.results });
//     });
//   };

//   uploadTagCreate = async () => {
//     const { workspaceId, projectId } = this.props;
//     const { keyDataFromChild } = this.state;

//     await api({
//       url: `workspaces/${workspaceId}/projects/${projectId}/tags/dataset/2/`,
//       method: "post",
//       headers: { "content-type": "application/json" },
//       data: {
//         tag_id: keyDataFromChild[0],
//       },
//     });
//   };

//   render() {
//     const {
//       isStaging,
//       intl,
//       invalid,
//       handleSubmit,
//       onCancel,
//       workspaceId,
//       projectId,
//     } = this.props;
//     const {
//       displayMode,
//       isStagingStatiscticInfoShown,
//       isStagingSchedulingTableShown,
//       responseType,
//       invalidCheck,
//     } = this.state;

//     const desctiptionLabel = (
//       <div>
//         {intl.formatMessage(messages.datasetDescriptionLabel)}
//         <span className="light-grey">
//           <FormattedMessage {...messages.optionalFieldText} />
//         </span>
//       </div>
//     );

//     const typeList = [
//       {
//         label: "Retraining",
//         value: "retraining",
//       },
//       { label: "Batch Prediction", value: "batch_prediction" },
//     ];

//     const getKeyData = value => {
//       this.setState({ keyDataFromChild: value });
//       this.state.keyDataFromChild !== []
//         ? this.setState({ invalidCheck: false })
//         : this.setState({ invalidCheck: true });
//     };

//     const onClickButton = () => {
//       this.uploadTagCreate();
//     };
//     return (
//       <>
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="form__item">
//             <LabeledField
//               labelText={intl.formatMessage(messages.datasetNameLabel)}
//               name={isStaging ? "name" : "dataset_name"}
//               component={InputField}
//               validate={[required, maxLength50]}
//               placeholder={
//                 isStaging
//                   ? intl.formatMessage(messages.newDatasetNamePlaceholder)
//                   : intl.formatMessage(messages.datasetNamePlaceholder)
//               }
//             />
//           </div>
//           <div className="form__item">
//             <LabeledField
//               labelText={desctiptionLabel}
//               name={isStaging ? "description" : "dataset_description"}
//               component={TextAreaField}
//               className="form__field form__field_text"
//               placeholder={
//                 isStaging
//                   ? intl.formatMessage(
//                       messages.newDatasetDescriptionPlaceholder
//                     )
//                   : intl.formatMessage(messages.datasetDescriptionPlaceholder)
//               }
//             />
//           </div>
//           {!isStaging && (
//             <React.Fragment>
//               <div className="form__item dataset-switch-field">
//                 <h6 className="dataset-switch-field__section-title dark">
//                   <FormattedMessage {...messages.statisticsInformation} />
//                 </h6>
//                 <Field
//                   component={this.renderSwitch}
//                   name="calculate"
//                   displayMode={displayMode}
//                 />
//               </div>
//               {this.renderTabs(displayMode)}
//             </React.Fragment>
//           )}
//           <div className="form__item scheduling-switch-field">
//             <span
//               id="Scheduling-tab"
//               className="tabs__title scheduling-switch-field"
//             >
//               <FormattedMessage {...messages.schedulingTag} />
//             </span>
//             <Toggle
//               checked={isStagingSchedulingTableShown}
//               onChange={() => this.togglesStagingSchedulingTag()}
//             />
//           </div>

//           {isStagingSchedulingTableShown && (
//             <React.Fragment>
//               <div className="tabs_menu">
//                 <div className="tabs-menu-wrap">
//                   <div className="tabs-menu__item">
//                     {typeList.map(item => (
//                       <button
//                         key={item.value}
//                         type="button"
//                         className={classNames("tab-menu__link", {
//                           "tab-menu__link_active":
//                             item.value === this.state.responseType,
//                         })}
//                         value={item.value}
//                         onClick={() => {
//                           this.setState({ responseType: item.value }, () =>
//                             this.sortTagsApi()
//                           );
//                         }}
//                       >
//                         <div className="tab-text">
//                           <span className={`button-menu__link + ${item.value}`}>
//                             <span>{item.label}</span>
//                           </span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <ScheduleTagField
//                 workspaceId={workspaceId}
//                 projectId={projectId}
//                 responseType={responseType}
//                 sortTagsApi={this.sortTagsApi}
//                 schedulingTagList={this.state.schedulingTagList}
//                 getKeyData={getKeyData}
//               />
//             </React.Fragment>
//           )}
//           {isStaging && (
//             <React.Fragment>
//               <div className="form__item dataset-switch-field">
//                 <h6 className="dataset-switch-field__section-title dark">
//                   <FormattedMessage {...messages.statisticsInformation} />
//                 </h6>
//                 <Toggle
//                   checked={isStagingStatiscticInfoShown}
//                   onChange={() => this.toggleStagingStatiscticView()}
//                 />
//               </div>
//               <WorkspaceProjectMenuField
//                 changeFieldValue={this.props.changeFieldValue}
//               />
//             </React.Fragment>
//           )}
//           <div className="buttons buttons_right form__buttons">
//             <div className="buttons__item">
//               <SimpleButton
//                 type="submit"
//                 onClick={onCancel}
//                 className="button button_gray-black--inverted button_uppercase"
//               >
//                 <FormattedMessage {...messages.cancelButtonText} />
//               </SimpleButton>
//             </div>
//             <div className="buttons__item">
//               <BlueButton
//                 type="submit"
//                 className="button_uppercase"
//                 disabled={invalid || invalidCheck}
//                 onClick={onClickButton}
//               >
//                 <FormattedMessage {...messages.uploadButtonText} />
//               </BlueButton>
//             </div>
//           </div>
//           <button className="popup-close-btn" type="button" onClick={onCancel}>
//             <IconClose style={{ width: 20, height: 20 }} />
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// DatasetEditForm.propTypes = {
//   intl: intlShape.isRequired,
//   invalid: PropTypes.bool,
//   isStaging: PropTypes.bool,
//   clearSubmitErrors: PropTypes.func,
//   handleSubmit: PropTypes.func,
// };

// DatasetEditForm.defaultProps = {
//   isStaging: false,
// };

// const mapDispatchToProps = dispatch => ({
//   hideContainingModal() {
//     dispatch(hideContainingModal());
//   },
//   changeFieldValue(field, value) {
//     dispatch(change("UploadDatasetForm", field, value));
//   },
// });

// const withConnect = connect(null, mapDispatchToProps);

// const withForm = reduxForm({
//   form: "UploadDatasetForm",
// });

// export default compose(injectIntl, withConnect, withForm)(DatasetEditForm);

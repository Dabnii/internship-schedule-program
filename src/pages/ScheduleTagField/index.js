// import React from "react";
// import { Table } from "antd";
// import { getFormattedDateTimeTable } from "utils/helpers/dateHelpers";
// import "./index.scss";

// class ScheduleTagField extends React.Component {
//   state = {
//     selectedRowKeys: [],
//     keys: [],
//   };

//   selectRow = record => {
//     // eslint-disable-next-line react/no-access-state-in-setstate
//     const selectedRowKeys = [...this.state.selectedRowKeys];
//     if (selectedRowKeys.indexOf(record.key) >= 0) {
//       selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
//     } else {
//       selectedRowKeys.push(record.key);
//     }
//     this.setState({ selectedRowKeys });
//   };

//   onSelectedRowKeysChange = selectedRowKeys => {
//     this.setState({ selectedRowKeys });
//   };

//   onRowKeysChange = keys => {
//     this.setState({ keys });
//     const { getKeyData } = this.props;
//     getKeyData(keys);
//   };

//   render() {
//     const { schedulingTagList } = this.props;

//     const columns = [
//       {
//         title: "SCHEDULE NAME",
//         dataIndex: "schedule_name",
//         key: "schedule_name",
//         className: "tag-columns-custom",
//       },
//       {
//         title: "SCHEDULE TAG",
//         dataIndex: "tag",
//         key: "tag",
//         className: "tag-columns-custom",
//       },
//       {
//         title: "CREATED",
//         dataIndex: "created_at",
//         key: "created_at",
//         render: text => getFormattedDateTimeTable(text),
//         className: "tag-columns-custom",
//       },
//     ];

//     return (
//       <Table
//         columns={columns}
//         dataSource={schedulingTagList}
//         rowSelection={{
//           type: "radio",
//           selectedRowKeys: this.state.keys,
//           onChange: this.onRowKeysChange,
//         }}
//         rowKey={record => record.id}
//         onRow={record => ({
//           onClick: () => {
//             this.selectRow(record);
//           },
//         })}
//       />
//     );
//   }
// }
// export default ScheduleTagField;

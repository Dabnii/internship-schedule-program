import React, { useState } from 'react';
import { Table } from 'antd';
import '../DatasetTable/DatasetTable.scss';

function DatasetTable({ getData }) {
  const [selectRow, setSelectRow] = useState([]);

  const columns = [
    {
      title: 'SCHEDULE NAME',
      dataIndex: 'SCHEDULE_NAME',
      key: 'SCHEDULE_NAME',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.key - b.key,
    },
    {
      title: 'SCHEDULE TAG',
      dataIndex: 'SCHEDULE_TAG',
      key: 'SCHEDULE_TAG',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.key - b.key,
    },
    {
      title: 'CREATED',
      dataIndex: 'CREATED',
      key: 'CREATED',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.key - b.key,
    },
  ];

  return (
    <section className='tableContainer'>
      <Table
        className='table'
        columns={columns}
        dataSource={getData}
        onRow={record => ({
          onClick: () => {
            setSelectRow(record);
          },
        })}
        // rowSelection={{
        //   type: "radio",
        // selectedRowKeys: this.state.keys,
        // onChange: this.onRowKeysChange,
        // onChange: record,
        // }}
        pagination={{
          pageSize: 4,
        }}
      />
    </section>
  );
}

export default DatasetTable;

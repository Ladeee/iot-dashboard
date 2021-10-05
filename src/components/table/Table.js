import React from 'react'
import { Table, Tag, Radio, Select } from 'antd';
import 'antd/dist/antd.css'; 

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => 2,

  },

  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
  
  {
    title: 'Types',
    key: 'tags',
    dataIndex: 'tags',
    filters:[
      {text: "flow", value: "flow"},
      {text: "pressure", value: "pressure"}
    ],
    render: tag => (
      <span>
        <Tag color={tag.length > 5 ? 'geekblue' : 'green'} key={tag}>
          {tag.toUpperCase()}
        </Tag>
      </span>
    ),
  },

  {
    title: 'Sensor',
    dataIndex: 'sensor',
    key: 'sensor',
    filters:[
      { text: 1, value: 1},
      { text: 2, value: 2},
      { text: 3, value: 3},
      { text: 4, value: 4},
      { text: 5, value: 5},
      { text: 5, value: 5}
    ]
  },
];

const data = [
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'pressure',
    sensor: 1,
  },
  {
    id: 'dg45ff',
    value: 42.55,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 2,
  },
  {
    id: 'dg45ff',
    value: 10.60,
    date: '02/12/2000',
    tags: 'pressure',
    sensor: 3,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 4,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 5,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 6,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 7,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'pressure',
    sensor: 8,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 9,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'pressure',
    sensor: 10,
  },  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'pressure',
    sensor: 1,
  },
  {
    id: 'dg45ff',
    value: 42.55,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 2,
  },
  {
    id: 'dg45ff',
    value: 10.60,
    date: '02/12/2000',
    tags: 'pressure',
    sensor: 3,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 4,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 5,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 6,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 7,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'pressure',
    sensor: 8,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'flow',
    sensor: 9,
  },
  {
    id: 'dg45ff',
    value: 10.20,
    date: '02/12/2000',
    tags: 'pressure',
    sensor: 10,
  },
  
];

export default class Demo extends React.Component {
  state = {
    top: 'topLeft',
    bottom: 'bottomRight',
  };

  render() {
    return (
      <div>
        <div>
          <Radio.Group
            style={{ marginBottom: 10 }}
            onChange={e => {
              this.setState({ top: e.target.value });
            }}
          />
        </div>
        <Radio.Group
          style={{ marginBottom: 10 }}
          onChange={e => {
            this.setState({ bottom: e.target.value });
          }}
        />
        <Table
          columns={columns}
          pagination={{
            defaultCurrent: 1,
            total: 20
         }}
          dataSource={data}
        />
      </div>
    );
  }
}

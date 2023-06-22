import { Row, Table, Tag, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { formatDate } from 'utils/helpers/commonMethods';

function RecentSupplyOrdersTable() {
  const navigate = useNavigate();

  const dataSource = [
    {
      id: 'a1b2c3d4e5f6g7h8',
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      date: '2023-06-06T12:32:55.345Z',
      orderId: 'ORD-1',
      status: 'Order received',
    },
    {
      id: '2i3j4k5l6m7n8o9',
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      date: '2023-06-02T12:32:55.345Z',
      orderId: 'ORD-2',
      status: 'Document  received',
    },
    {
      id: 'p0q1r2s3t4u5v6w7',
      key: '3',
      name: 'Sarah',
      age: 28,
      address: '123 Main Street',
      date: '2023-06-06T12:32:55.345Z',
      orderId: 'ORD-3',
      status: 'Vendor notified',
    },
    {
      id: '8x9y0z1a2b3c4d5',
      key: '4',
      name: 'Emily',
      age: 35,
      address: '456 Elm Street',
      date: '2022-06-06T12:32:55.345Z',
      orderId: 'ORD-4',
      status: 'Vendor notified',
    },
    {
      id: 'e6f7g8h9i0j1k2l3',
      key: '5',
      name: 'David',
      age: 40,
      address: '789 Oak Street',
      date: '2020-06-06T12:32:55.345Z',
      orderId: 'ORD-5',
      status: 'Vendor notified',
    },
    {
      id: 'm4n5o6p7q8r9s0t1',
      key: '6',
      name: 'Jessica',
      age: 27,
      address: '987 Pine Street',
      date: '2021-06-06T12:32:55.345Z',
      orderId: 'ORD-6',
      status: 'Vendor notified',
    },
    {
      id: 'u2v3w4x5y6z7a8b9',
      key: '7',
      name: 'Daniel',
      age: 45,
      address: '321 Cedar Street',
      date: '2022-06-06T12:32:55.345Z',
      orderId: 'ORD-7',
      status: 'Vendor notified',
    },
    {
      id: 'c0d1e2f3g4h5i6j7',
      key: '8',
      name: 'Sophia',
      age: 31,
      address: '654 Maple Street',
      date: '2023-06-04T12:32:55.345Z',
      orderId: 'ORD-8',
      status: 'Vendor notified',
    },
    {
      id: 'k8l9m0n1o2p3q4r5',
      key: '9',
      name: 'Liam',
      age: 33,
      address: '789 Birch Street',
      date: '2023-06-10T12:32:55.345Z',
      orderId: 'ORD-9',
      status: 'Vendor notified',
    },
    {
      id: 's6t7u8v9w0x1y2z3',
      key: '10',
      name: 'Olivia',
      age: 29,
      address: '987 Walnut Street',
      date: '2023-02-06T12:32:55.345Z',
      orderId: 'ORD-10',
      status: 'Vendor notified',
    },
  ];

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text, row) => formatDate(row.date),
    },
    {
      title: 'OrderId',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Status',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text, row) => (
        <Tag key={text} className="idea">
          {row.status?.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const handleRowClick = (record) => {
    navigate({
      pathname: `/supply-order/${record.id}`,
      state: { data: record },
    });
  };

  return (
    <>
      <Row align="middle" justify="space-between">
        <Typography.Title className="mb-0 title-fs20" level={3}>
          Recent Supply Orders
        </Typography.Title>
        <Link className="fs-16 fw-bold" to="/supply-order">
          See all
        </Link>
      </Row>
      <Table
        className="dashboard-table"
        columns={columns}
        dataSource={dataSource}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        pagination={false}
      />
    </>
  );
}

export default RecentSupplyOrdersTable;

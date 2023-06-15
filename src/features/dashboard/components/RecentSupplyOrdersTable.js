import { Row, Table, Typography } from 'antd';
import { Link } from 'react-router-dom';

function RecentSupplyOrdersTable() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      date: '15/06/2023',
      orderId: 'ORD-1',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      date: '15/06/2023',
      orderId: 'ORD-2',
    },
    {
      key: '3',
      name: 'Sarah',
      age: 28,
      address: '123 Main Street',
      date: '01/01/2023',
      orderId: 'ORD-3',
    },
    {
      key: '4',
      name: 'Emily',
      age: 35,
      address: '456 Elm Street',
      date: '02/01/2023',
      orderId: 'ORD-4',
    },
    // Add more dummy data objects as needed
    {
      key: '5',
      name: 'David',
      age: 40,
      address: '789 Oak Street',
      date: '03/01/2023',
      orderId: 'ORD-5',
    },
    {
      key: '6',
      name: 'Jessica',
      age: 27,
      address: '987 Pine Street',
      date: '04/01/2023',
      orderId: 'ORD-6',
    },
    {
      key: '7',
      name: 'Daniel',
      age: 45,
      address: '321 Cedar Street',
      date: '05/01/2023',
      orderId: 'ORD-7',
    },
    {
      key: '8',
      name: 'Sophia',
      age: 31,
      address: '654 Maple Street',
      date: '06/01/2023',
      orderId: 'ORD-8',
    },
    {
      key: '9',
      name: 'Liam',
      age: 33,
      address: '789 Birch Street',
      date: '07/01/2023',
      orderId: 'ORD-9',
    },
    {
      key: '10',
      name: 'Olivia',
      age: 29,
      address: '987 Walnut Street',
      date: '08/01/2023',
      orderId: 'ORD-10',
    },
  ];

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'OrderId',
      dataIndex: 'orderId',
      key: 'orderId',
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
        pagination={false}
      />
    </>
  );
}

export default RecentSupplyOrdersTable;

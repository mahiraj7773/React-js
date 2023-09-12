import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Col, Row } from 'antd';
import AddUser from "./AddUser";
import { useSelector } from "react-redux";

const UserList = () =>{
const [showModal, setShowModal] = useState(false)
const myState = useSelector((state) => state.AddUserData )
console.log("🚀 ~ file: Users.js:10 ~ UserList ~ myState:", myState)

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
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
      
      return(
          <>
            <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      {/* Col */}
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      {/* Col */}
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Button onClick={() => setShowModal(true)} type="primary">Add User</Button>
    </Col>
  </Row>
  <AddUser
  showModal={showModal}
  setShowModal={setShowModal}
  />
          <Table dataSource={dataSource} columns={columns} />
          </>
   )
}

export default UserList;
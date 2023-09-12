import React, { useState } from 'react';
import { Button, Col, Input, Modal, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { AddData } from '../actions';

const AddUser = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch()
  const [Add, setAdd] = useState({
    name: '',
    email: '',
    age: '',
    address: ''
  });

  // Define a state variable to store user data
  const [data, setData] = useState([]);
  console.log("🚀 ~ file: AddUser.js:14 ~ AddUser ~ data:", data)

  const SaveData = () => {
    const userData = { ...Add };

    // Add the user data to the data array
    setData([...data, userData]);

    // Clear the form inputs
    setAdd({
      name: '',
      email: '',
      age: '',
      address: ''
    });

    // Close the modal
    setShowModal(false);
    console.log(data)
    if(data.length){
        dispatch(AddData(data))
    } 
  };

  return (
    <>
      <Modal
        closable
        title="Add User"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input
              placeholder=' Full Name'
              name='name'
              value={Add.name}
              onChange={(e) => setAdd({ ...Add, name: e.target.value })}
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder='Email Address'
              name='email'
              type='email'
              value={Add.email}
              onChange={(e) => setAdd({ ...Add, email: e.target.value })}
            />
          </Col>
          <Col span={12}>
            <Input
              type='number'
              placeholder='Age'
              name='age'
              value={Add.age}
              onChange={(e) => setAdd({ ...Add, age: e.target.value })}
            />
          </Col>
          <Col span={12}>
            <Input
              type='text'
              placeholder='Address'
              name='address'
              value={Add.address}
              onChange={(e) => setAdd({ ...Add, address: e.target.value })}
            />
          </Col>
          <Col span={6}>
            <Button onClick={SaveData} type="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AddUser;

import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import createDonations from '../../redux/Donations/createDonations';
const { Title } = Typography;
const { Text } = Typography;
const { TextArea } = Input;

const Formadd = () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const redux = useSelector((state: any) => state);
  console.log(redux.loginRequest.data.data.user._id, 'redux');

  const dispatch = useDispatch();
  var formData = new FormData();
  const onFinish = (values: any) => {
    const reqtype = ['image/jpg', 'image/gif', 'image/jpeg'];
    const reqsize = '20000';
    var file = values.images.fileList;
    var filecoverimage = values.imageCover.fileList;

    const valdfile = (file: any, reqtype: string[], reqsize: string) => {
      let res = true;
      file.map((element: any) => {
        if (element.size < reqsize) {
          message.error('check size of files');
          res = false;
        }
        if (reqtype.indexOf(element.type) == -1) {
          message.error('check type of files');
          res = false;
        }
      });
      return res;
    };
    if (valdfile(file, reqtype, reqsize) && valdfile(filecoverimage, reqtype, reqsize)) {
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('contact', values.contact);
      formData.append('imageCover', values.imageCover.file.originFileObj);
      formData.append('author', redux.loginRequest.data.data.user._id);
      formData.append('visitor', 'false');
      formData.append('images', values.images.file.originFileObj);
      dispatch(createDonations.createDonationsRequest({ formData }));
      
      message.success('upload successfully.');
    }

    //  calls.createDonations.call({data:formData})
    // console.log(Array.from(formData));
    //  axios.post("https://hopeigc-api.herokuapp.com/api/v1/donations", formData)
    // .then(function (response) {
    //   console.log(response);
    // })
    //  .catch(function (error) {
    //    console.log(error);
    // }
    //     )
  };
  return (
    <div>
      <Title>Form</Title>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="title"
          name="name"
          rules={[
            {
              min: 10,
              message: 'check length of title',
            },
            { required: true, message: 'Please input your  title' },
          ]}
        >
          <Input placeholder="Basic usage" />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[
            {
              min: 10,
              message: 'check length of description',
            },
            { required: true, message: 'Please input your description' },
          ]}
        >
          <TextArea placeholder="description" allowClear />
        </Form.Item>

        <Form.Item
          label="contact"
          name="contact"
          rules={[
            {
              min: 10,
              message: 'Please input your contact',
            },
            { required: true, message: 'Please input your username!' },
          ]}
        >
          <Input placeholder="contact" />
        </Form.Item>
        <Form.Item
          label="coverimage"
          name="imageCover"
          rules={[{ required: true, message: 'Please import image' }]}
        >
          <Upload>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item label="image" name="images">
          <Upload>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Formadd;

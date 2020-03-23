import React, { useEffect, useState } from 'react';
import classes from './Formadd.module.scss';
import { Form, Input } from 'antd';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;
const { Text } = Typography;
const { TextArea } = Input;

const Formadd = () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  return (
    <div>
      <Title>Form</Title>
      <Form {...layout}>
        <Form.Item label="Username" name="username">
          <Input placeholder="Basic usage" />
        </Form.Item>

        <Form.Item label="title" name="title">
          <Input placeholder="Basic usage" />
        </Form.Item>

        <Form.Item label="description" name="description">
          <TextArea placeholder="description" allowClear />
        </Form.Item>

        <Form.Item label="contact" name="contact">
          <Input placeholder="contact" />
        </Form.Item>
        <Form.Item label="cover image" name="cover image">
          <Upload>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item label="image" name="image">
          <Upload> git checkout <feature_branch>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Formadd;

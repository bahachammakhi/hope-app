import React from 'react';
import classes from './Donatecard.module.scss';
import image from '../../assets/rb.jpg';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const { Text } = Typography;
const { Paragraph } = Typography;
interface LabeledValue {
  image?:string[];
  startDates?:string[];
  _id?: string;
  name?: string;
  contact?: string;
  description?: string;
  author?:any;
  imageCover?:string;
  id?: string;
}

interface donation {
  data?: LabeledValue;
}

const Donatecard = ({ data }:donation) => {
  
  return (
    <div className={classes.card}>
      <Row align="middle" justify="center" gutter={[12, 12]}>
        <Col flex="10%" className={classes.img}>
          <img src={data?.imageCover} style={{ width: '150px', height: '150px' }} />
        </Col>
        <Col flex="80%">
          {' '}
          <Title level={3} style={{ color: '#A5B3CB' }}>
            {data?.name}
          </Title>
          <Text>  <Paragraph ellipsis={{ rows: 5, expandable: false }}> {data?.description} </Paragraph></Text>
          <Title level={4} style={{ margin: '0px' }}>
            {data?.author.name}
          </Title>
          <Text>{data?.contact}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default Donatecard;

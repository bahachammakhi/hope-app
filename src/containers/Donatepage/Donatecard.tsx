import React from 'react';
import classes from './Donatecard.module.scss';
import DeleteDonation from './DeleteDonation';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Badge } from 'antd';
import { CrownOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Text } = Typography;
const { Paragraph } = Typography;

interface LabeledValue {
  image?: string[];
  startDates?: string[];
  _id?: string;
  name?: string;
  contact?: string;
  description?: string;
  author?: author;
  imageCover?: imageCover;
  id?: string;
}

interface donation {
  data?: LabeledValue;
}
interface author {
  role: string;
  _id: string;
  name: string;
  email: string;
  __v: Number;
}

interface imageCover {
  secure_url: string;
  public_id: string;
}

interface props {
  data?: any;
  id_user?: string;
}

const Donatecard = ({ data, id_user }: props) => {
  return (
    <div className={classes.card}>
      <Link to={{ pathname: `/Donateinfo/${data?._id}` }}>
        <Row align="middle" justify="center" gutter={[12, 12]}>
          <Col flex="10%">
            <img src={data?.imageCover?.secure_url} className={classes.img} />
          </Col>
          <Col flex="80%">
            {' '}
            <Title level={3} style={{ color: '#A5B3CB' }}>
              {data?.name}
              {data?.author?._id === id_user && (
                <CrownOutlined style={{ fontSize: '25px', color: '#096dd9', marginLeft: '10px' }} />
              )}
            </Title>
            <Text>
              {' '}
              <Paragraph ellipsis={{ rows: 5, expandable: false }}> {data?.description} </Paragraph>
            </Text>
            <Title level={4} style={{ margin: '0px' }}>
              {data?.author?.name}
            </Title>
            <Text>{data?.contact}</Text>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default Donatecard;

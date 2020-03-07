import React from 'react';
import classes from './services.module.scss';
import { Row, Col } from 'antd';
import ServiceCard from '../serviceCard/ServiceCard';
interface Props {
  data: Service[];
}
interface Service {
  img: any;
  title: string;
  parag: string;
}
const Services = ({ data }: Props) => {
  const card = data.map((el, index) => (
    <Col span={7} offset={index === 0 ? 1 : 0}>
      <ServiceCard {...el} />
    </Col>
  ));
  return <Row className={classes.wrapper}>{card}</Row>;
};

export default Services;

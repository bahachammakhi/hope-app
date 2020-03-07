import React from 'react';
import { Row, Col } from 'antd';
import StoneCard from '../mileStoneCard/StoneCard';

const dataArray = [
  {
    moneyleft: 100,
    neededMoney: 280,
    src: 'https://www.donorschoose.org/teacher/photo/u7137717?size=sm&t=1582735068741',
    title: 'Please provide some food for this poor kids we need your help heree !',
    description:
      'Help me give my students an exciting day on an educational working farm. They would greatly benefit from this worthwhile hands-on experience on a country farm.',
  },
  {
    moneyleft: 100,
    neededMoney: 280,
    src: 'https://www.donorschoose.org/teacher/photo/u7137717?size=sm&t=1582735068741',
    title: 'Please provide some food for this poor kids we need your help heree !',
    description:
      'Help me give my students an exciting day on an educational working farm. They would greatly benefit from this worthwhile hands-on experience on a country farm.',
  },
  {
    moneyleft: 100,
    neededMoney: 280,
    src: 'https://www.donorschoose.org/teacher/photo/u7137717?size=sm&t=1582735068741',
    title: 'Please provide some food for this poor kids we need your help heree !',
    description:
      'Help me give my students an exciting day on an educational working farm. They would greatly benefit from this worthwhile hands-on experience on a country farm.',
  },
];
interface Props {
  data?: Data[];
}
interface Data {
  src: string;
  description: string;
  moneyleft: number;
  title: string;
  neededMoney: number;
}
const StoneGrid = ({ data }: Props) => {
  const StoneElemnts = dataArray.map(el => {
    return (
      <Col span={6}>
        <StoneCard {...el} />
      </Col>
    );
  });
  return <Row>{StoneElemnts}</Row>;
};

export default StoneGrid;

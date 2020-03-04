import React from 'react';
import classes from './stonecard.module.scss';
import { Card, Icon, Avatar, Switch, Skeleton, Progress } from 'antd';
const { Meta } = Card;

interface Props {
  src: string;
  description: string;
  moneyleft: number;
  title: string;
  neededMoney: number;
}

const StoneCard = ({ src, description, moneyleft, neededMoney, title }: Props) => {
  const CalculPercent = () => {
    return (moneyleft / neededMoney) * 100;
  };
  return (
    <>
      <Card
        hoverable
        loading={false}
        className={classes.card}
        cover={
          <div className={classes.cover}>
            <p className={classes.title}>{title}</p>
            <img className={classes.img} alt="example" src={src} />
          </div>
        }
      >
        <Meta className={classes.description} description={description} />

        <Progress strokeColor="#001526" className={classes.progress} percent={CalculPercent()} showInfo={false} />
        <span className={classes.money}>${moneyleft} still needed</span>
      </Card>
    </>
  );
};

export default StoneCard;

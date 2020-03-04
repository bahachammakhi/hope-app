import React from 'react';
import classes from './stonecard.module.scss';
import { Card, Icon, Avatar, Switch, Skeleton, Progress } from 'antd';
const { Meta } = Card;

const StoneCard = () => {
  return (
    <>
      <Card
        hoverable
        loading={false}
        className={classes.card}
        cover={
          <div className={classes.cover}>
            <p className={classes.title}>Please provide some food for this poor kids we need your help heree !</p>
            <img
              className={classes.img}
              alt="example"
              src="https://www.donorschoose.org/teacher/photo/u7137717?size=sm&t=1582735068741"
            />
          </div>
        }
      >
        <Meta
          className={classes.description}
          description="   Help me give my students an exciting day on an educational working farm. They would greatly benefit from this worthwhile hands-on experience on a country farm."
        />

        <Progress strokeColor="#001526" className={classes.progress} percent={50} showInfo={false} />
        <span className={classes.money}>$104 still needed</span>
      </Card>
    </>
  );
};

export default StoneCard;

import React from 'react';
import classes from './card.module.scss';
import { Card, Icon, Avatar, Switch, Skeleton } from 'antd';
import donation from '../../assets/help.png';
const { Meta } = Card;

const CardComponents = ({ img, title, parag }: any) => {
  return (
    <>
      <Card hoverable className={classes.card}>
        <div>
          <img className={classes.logo} src={img}></img>
        </div>
        <h2 className={classes.vol}>{title}</h2>
        <p className={classes.par}>{parag}</p>
      </Card>
    </>
  );
};
export default CardComponents;

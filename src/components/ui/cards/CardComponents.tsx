import React from 'react';
import classes from 'card.module.scss';
import { Card, Icon, Avatar, Switch, Skeleton } from 'antd';
const { Meta } = Card;
const CardComponents = () => {
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<Icon type="setting" key="setting" />, <Icon type="edit" key="edit" />, <Icon type="ellipsis" key="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  );
};

export default CardComponents;

import React from 'react';
import classes from './Donatecard.module.scss';
import image from '../../assets/rb.jpg';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const { Text } = Typography;

const Donateconatainer= ()=> {
    return(
    <div className={classes.card}>
        <Row  align="middle" justify="center" gutter={[8, 8]} >
    <Col flex="10%" className={classes.img}  ><img src={image}  style={{width:"140px",height:"140px"}}/></Col>
    <Col flex="80%">  <Title level={3} style={{color:"#A5B3CB"}}>Osmo Makes Math and Literacy a Game</Title> 
   
    <Text>Help me give my students headphones in order for them to be successful and to stay focused when working on tasks on their laptop.
    Help me give my students headphones in order for them to be successful and to stay focused when working on tasks on their laptop.
    </Text>
    <Title level={4} style={{margin:"0px"}} >Ant Design</Title>
    <Text>
    Fulks Run Elementary School•Fulks Run, VA
    </Text>
</Col>
  </Row>
  
  </div>

    )
}

export default Donateconatainer;
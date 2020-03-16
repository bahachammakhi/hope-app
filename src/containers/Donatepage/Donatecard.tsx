import React from 'react';
import classes from './Donatecard.module.scss';
import image from '../../assets/rb.jpg';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const { Text } = Typography;
 interface LabeledValue {
   image?:string[];
   startDates?:string[];
   _id?:string;
   name?:string;
   contact?:string;
   description?:string;
   author?:string;
   id?:string;
   }

  interface donation {
  data?:LabeledValue;
   }
  
const Donateconatainer= ({data}:donation )=> {

      
    return(
    <div className={classes.card}>
            <Row  align="middle" justify="center" gutter={[8, 8]} >
    <Col flex="10%" className={classes.img}  ><img src={image}  style={{width:"140px",height:"140px"}}/></Col>
    <Col flex="80%">  <Title level={3} style={{color:"#A5B3CB"}}>{data?.name}</Title> 
   
    <Text>{data?.description}
    </Text>
    <Title level={4} style={{margin:"0px"}} >{data?.author}</Title>
    <Text>
    {data?.contact}
    </Text>
</Col>
  </Row>
  </div>

    )
}

export default Donateconatainer;

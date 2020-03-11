import React from 'react';
import Donatecard from "./Donatecard"
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';
import classes from './Donateconatainer.module.scss';
import { Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Text } = Typography;
const Donateconatainer= ()=> {
    return(
    <div style={{margin:"30px"}}>
        
        <Row>
        <Col  flex="1 1 150px">
     <Title level={3}>ZTEEZTE</Title>
     <Checkbox.Group >

     <Checkbox value="a">Applied Learning</Checkbox>
     <br />
     <Checkbox value="c">Health & Sports</Checkbox>
     <br />
     <Checkbox value="v">History & Civics</Checkbox>
     <br />
     </Checkbox.Group >
    </Col>
            <Col  flex="0 1 1100px" >
            <div className={classes.addnew}>
        <Title style={{color:"#fff"}}>Like what you’re seeing? Support classrooms monthly!</Title>
           
           <Text style={{color:"#fff"}}>Sign up to automatically donate once a month, then handpick the projects you want to support.</Text>
            <br/>
            <Button ghost size="large" style={{margin:"10px"}}> Support classrooms monthly</Button>

     </div>
    <Donatecard />
    <Donatecard />
    <Donatecard />
    <Donatecard />
 
    </Col>
   
  
  
  
    </Row>

    </div>
    )
}

export default Donateconatainer;
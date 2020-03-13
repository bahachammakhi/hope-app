import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Donatecard from "./Donatecard"
import donationActions from '../../redux/Donations/donations';
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';
import classes from './Donateconatainer.module.scss';
import { Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Text } = Typography;


const Donateconatainer= ()=> {
    const dispatch = useDispatch();
    const redux = useSelector((state: any) => state);
 console.log("5")
 console.log(redux.donation.data.data.donations)
 console.log("5")

    useEffect(()=>{
     dispatch(donationActions.donationRequest())    
    },[])

    const Items = redux.donation.data.data.donations.map((item:any) =>
   <Donatecard props={item}/>
  );


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
{Items} 
    </Col>
   
  
  
  
    </Row>

    </div>
    )
}

export default Donateconatainer;
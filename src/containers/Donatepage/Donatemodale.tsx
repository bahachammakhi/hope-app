import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import donationActions from '../../redux/login/loginRequest';

import { Modal, Button } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const { Text } = Typography;
 



const Form = ()=> {
  return(
    <div>FORM</div>
  );
}



const Login = ()=> {
  return(
    <div>LOGIN</div>
  );
}

 
  
const Donatemodale= ()=> {
    const [visible,setvisible] = useState(false)  
    //redux
    const [data,setData] = useState([])
     const dispatch = useDispatch();
     const redux = useSelector((state: any) => state);
 
    useEffect(()=>{
        
    dispatch(donationActions.loginRequest())    
    setData(redux.donation.data.data.donations)
     },[])
 
    
     
    return(
    <div>
<Button type="primary"  onClick={() => setvisible(true)}>
          Open Modal
        </Button>


        <Modal
          title="Basic Modal"
          visible={visible}  
          onCancel={() => setvisible(false)} 
        >
{ true?<Form />:<Login />}
            </Modal>
           
  </div>

    )
}

export default Donatemodale;
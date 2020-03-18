import React, { useEffect, useState } from 'react';
import { Modal,Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from 'antd';
import Login from '../../components/ui/loginform/LoginForm'
import Formadd from './Formadd';
const { Title } = Typography;
const { Text } = Typography;
const Donatemodale= ()=> {
    const [visible,setvisible] = useState(false)  
    const [test,settest] = useState(true)  
    const dispatch = useDispatch();
    const redux = useSelector((state: any) => state);
console.log(redux.loginRequest.data,"1515151");

    return(
    <div>
<Button  ghost size="large" style={{ margin: '10px' }}  onClick={() => setvisible(true)}>
Support classrooms monthly
        </Button>


        <Modal
          title="Add new item"
          visible={visible}  
          onCancel={() => setvisible(false)}
            footer={null} 
        >


{redux.loginRequest.data? <Formadd />: <Login />} 
          
          
            </Modal>
           
  </div>

    )
}

export default Donatemodale;
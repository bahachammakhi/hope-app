import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import donationActions from '../../redux/login/loginRequest';
import { Modal, Input, Button, message } from 'antd';
import { Typography } from 'antd';
import useForm from '../../hooks/useForm';
import loginActions from '../../redux/login/login';
import loginActionsRequest from '../../redux/login/loginRequest';
import Formadd from './Formadd';
const { Title } = Typography;
const { Text } = Typography;
const Donatemodale= ()=> {
    const [visible,setvisible] = useState(false)  
    const [test,settest] = useState(false)  
    const Login = ()=> {
      const redux = useSelector((state: any) => state);
      const dispatch = useDispatch();
      const initialValues = {
        email: '',
        password: '',
      };
      const { handleChange, form, handleReset } = useForm({ initialValues });
      const ModalHandler = () => {
        dispatch(loginActions.modalHandler({ name: 'login' }));
      };
      useEffect(() => {
        if (redux.loginRequest.loaded && redux.loginRequest.name === 'login') {
          handleReset();
          dispatch(loginActions.modalHandler({ name: 'login' }));
          message.success(`Welcome ${redux.loginRequest.data.data.user.name} Logged in successfully`);
        }
      }, [redux.loginRequest.loaded, redux.loginRequest.name === 'login']);
      return(
        <div> 
          <Title level={4}>login</Title>
              <Input  onChange={handleChange} name="email" placeholder="email" />
          <Input.Password
            name="password"
       
            onChange={handleChange}
            placeholder="password"
          />
          
          <Button
         
         onClick={() => settest(true)}
            type="primary"
            loading={false}
          >
            Login
          </Button>
          <Title>you can add new article whit out login </Title>
        </div>
      );
    }

    return(
    <div>
<Button  ghost size="large" style={{ margin: '10px' }}  onClick={() => setvisible(true)}>
Support classrooms monthly
        </Button>


        <Modal
          title="Add new item"
          visible={visible}  
          onCancel={() => setvisible(false)} 
        >
{test? <Formadd />: <Login />}
            </Modal>
           
  </div>

    )
}

export default Donatemodale;
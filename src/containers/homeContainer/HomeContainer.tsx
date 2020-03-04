import React from 'react';
import classes from './homeContainer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu, Breadcrumb, Card, Modal, Form, Input, Button, Checkbox } from 'antd';
import Conter from '../../components/counter/Counter';
import NumberSection from '../../components/numbersSection/NumberSection';
import StoneCard from '../../components/ui/mileStoneCard/StoneCard';
import StoneGrid from '../../components/ui/stonegrid/StoneGrid';
import loginActions from '../../redux/login/login';
import loginActionsRequest from '../../redux/login/loginRequest';
import useForm from '../../hooks/useForm';
const { Header, Content, Footer } = Layout;

const HomeContainer = () => {
  const redux = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const { handleChange, form } = useForm({ initialValues });
  const ModalHandler = () => {
    dispatch(loginActions.modalHandler());
  };
  return (
    <>
      <NumberSection />
      <StoneGrid />
      <Modal title="Login modal" visible={redux.login.modalOpened} onOk={ModalHandler} onCancel={ModalHandler}>
        <Input onChange={handleChange} name="email" placeholder="default size" />
        <Input.Password name="password" onChange={handleChange} placeholder="input password" />
        <Button onClick={() => dispatch(loginActionsRequest.loginRequest(form))} type="primary" loading={false}>
          Loading
        </Button>
      </Modal>
    </>
  );
};

export default HomeContainer;

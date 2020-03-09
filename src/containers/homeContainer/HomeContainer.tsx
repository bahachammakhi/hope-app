import React from 'react';
import classes from './homeContainer.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu, Breadcrumb, Card, Modal, Form, Input, Button, Checkbox } from 'antd';
import Conter from '../../components/ui/counter/Counter';
import NumberSection from '../../components/ui/numbersSection/NumberSection';
import StoneCard from '../../components/ui/mileStoneCard/StoneCard';
import StoneGrid from '../../components/ui/stonegrid/StoneGrid';
import loginActions from '../../redux/login/login';
import loginActionsRequest from '../../redux/login/loginRequest';
import CardComponents from '../../components/ui/cards/CardComponents';
import useForm from '../../hooks/useForm';
import image1 from '../../assets/rb.jpg';
import image2 from '../../assets/aa.png';
import image3 from '../../assets/help.png';
import img1 from '../../res/hope.jpg';
import DonationBackground from '../../components/ui/donationBackground/DonationBackground';
import Services from '../../components/ui/services/Services';
import Sponsors from '../../components/ui/sponsor/Sponsors';
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
  const data = [
    {
      title: 'Become a volunteer',
      parag:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: image1,
    },
    {
      title: 'Become a volunteer',
      parag:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: image1,
    },
    {
      title: 'Become a volunteer',
      parag:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: image1,
    },
  ];
  return (
    <>
      <DonationBackground />
      <div className={classes.stone}>
        <StoneGrid />
      </div>
      <div className={classes.services}>
        <Services data={data} />
      </div>
      <NumberSection />
      <Sponsors />
      <Modal title="Login modal" visible={redux.login.modalOpened} onOk={ModalHandler} onCancel={ModalHandler}>
        <Input onChange={handleChange} name="email" placeholder="default size" />
        <Input.Password name="password" onChange={handleChange} placeholder="input password" />
        <Button onClick={() => dispatch(loginActionsRequest.loginRequest(form))} type="primary" loading={false}>
          Login
        </Button>
      </Modal>
    </>
  );
};

export default HomeContainer;

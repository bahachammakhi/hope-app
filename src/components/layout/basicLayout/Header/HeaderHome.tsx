import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, message } from 'antd';
import classes from './header.module.scss';
import loginActions from '../../../../redux/login/login';
import loginActionsRequests from '../../../../redux/login/loginRequest';
import LoginForm from '../../../../components/ui/loginform/LoginForm';
import Signup from '../../../../components/ui/signupform/Signup';
interface Props {
  menu: string[];
}
const HeaderHome = ({ menu }: Props) => {
  const dispatch = useDispatch();
  const redux = useSelector((state: any) => state.loginRequest);
  const menusItems = menu.map((element, index) => {
    if (element === 'login' && redux && redux.data && redux.data.token) element = 'logout';
    if (element === 'signup' && redux && redux.data && redux.data.token) return <></>;
    return (
      <Menu.Item
        onClick={() => {
          switch (element) {
            case 'login': {
              dispatch(loginActions.modalHandler({ name: 'login' }));
              break;
            }
            case 'logout': {
              dispatch(loginActionsRequests.logout());
              message.warning(`Login the next time you gonna donate !`);
              break;
            }
            case 'signup': {
              dispatch(loginActions.modalHandler({ name: 'signup' }));
            }
          }
        }}
        className={classes.navmenuitem}
        key={index}
      >
        {element}
      </Menu.Item>
    );
  });
  return (
    <>
      <div className={classes.logo}>
        {/* <img src={logo} className={classes.logoimg} alt="logo" /> */}
        <h1 className={classes.logotitle}>Hope-APP</h1>
      </div>
      <Menu
        className={classes.menu}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px' }}
      >
        {menusItems}
      </Menu>
      <h1 className={classes.name}>
        {redux && redux.data && redux.data.data && redux.data.data.user && redux.data.data.user.name}
      </h1>
      <LoginForm />
      <Signup />
    </>
  );
};

export default HeaderHome;

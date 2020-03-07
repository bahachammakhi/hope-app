import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import classes from './header.module.scss';
import logo from '../../../../assets/logo.png';
import loginActions from '../../../../redux/login/login';
const { Header, Content, Footer } = Layout;

interface Props {
  menu: string[];
}
const HeaderHome = ({ menu }: Props) => {
  const dispatch = useDispatch();
  const menusItems = menu.map((element, index) => {
    return (
      <Menu.Item
        onClick={() => {
          if (element === 'login') dispatch(loginActions.modalHandler());
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
    </>
  );
};

export default HeaderHome;

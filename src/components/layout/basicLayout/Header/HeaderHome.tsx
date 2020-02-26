import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import classes from './header.module.scss';
import logo from '../../../../assets/logo.png';
const { Header, Content, Footer } = Layout;

const HeaderHome = () => {
  return (
    <Header className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} className={classes.logoimg} alt="logo" />
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderHome;

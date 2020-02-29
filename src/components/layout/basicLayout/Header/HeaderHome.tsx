import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import classes from './header.module.scss';
import logo from '../../../../assets/logo.png';
const { Header, Content, Footer } = Layout;
const menus = ['home', 'about', 'sevices', 'causes', 'contact'];

const HeaderHome = () => {
  const menusItems = menus.map((element, index) => {
    return (
      <Menu.Item className={classes.navmenuitem} key={index}>
        {element}
      </Menu.Item>
    );
  });
  return (
    <Header className={classes.navbar}>
      <div className={classes.logo}>
        {/* <img src={logo} className={classes.logoimg} alt="logo" /> */}
        <h1 className={classes.logotitle}>Hope-APP</h1>
      </div>
      <Menu className={classes.menu} theme="light" mode="horizontal" defaultSelectedKeys={['0']} style={{ lineHeight: '64px' }}>
        {menusItems}
      </Menu>
    </Header>
  );
};

export default HeaderHome;

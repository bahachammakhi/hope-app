import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import classes from './header.module.scss';
import logo from '../../../../assets/logo.png';
const { Header, Content, Footer } = Layout;
const menus = ['home', 'aboutus', 'sevices', 'causes', 'contact'];

const HeaderHome = () => {
  const [selecteditem, setSelectedItem] = useState(0);
  const handleClicked = (props: any) => {
    setSelectedItem(props.key);
  };
  const menusItems = menus.map((element, index) => {
    return (
      <Menu.Item className={selecteditem === index ? classes.selecteditem : classes.navmenuitem} key={index}>
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
      <Menu
        className={classes.menu}
        onClick={props => handleClicked(props)}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[selecteditem.toString()]}
        style={{ lineHeight: '64px' }}
      >
        {menusItems}
      </Menu>
    </Header>
  );
};

export default HeaderHome;

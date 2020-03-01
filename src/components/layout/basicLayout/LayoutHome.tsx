import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import classes from './layout.module.scss';
// Components
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderHome from './Header/HeaderHome';
import FooterHome from './Footer/FooterHome';
const { Header, Content, Footer } = Layout;

interface Props extends RouteProps {
  sidebar?: boolean;
}

const LayoutHome = ({ sidebar, ...props }: Props) => {
  return (
    <Layout className={classes.layout}>
      <Header className={classes.navbar}>
        <HeaderHome />
      </Header>

      <Content className={classes.wrapperContent}>
        <Route {...props} />
      </Content>
      <Footer className={classes.footerWrapper}>
        <FooterHome />
      </Footer>
    </Layout>
  );
};

export default LayoutHome;

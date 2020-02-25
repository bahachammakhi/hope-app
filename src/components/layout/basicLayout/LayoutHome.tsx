import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import classes from 'layout.module.scss';
// Components
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderHome from './Header/HeaderHome';
const { Header, Content, Footer } = Layout;

interface Props extends RouteProps {
  sidebar?: boolean;
}

const LayoutHome = ({ sidebar, ...props }: Props) => {
  return (
    <Layout>
      <HeaderHome />
      <Content>
        <Route {...props} />
      </Content>
    </Layout>
  );
};

export default LayoutHome;

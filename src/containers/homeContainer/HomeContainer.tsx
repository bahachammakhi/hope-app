import React from 'react';
import classes from './homeContainer.module.scss';

import { Layout, Menu, Breadcrumb } from 'antd';
import Conter from '../../components/counter/Counter';
import NumberSection from '../../components/numbersSection/NumberSection';
const { Header, Content, Footer } = Layout;

const HomeContainer = () => {
  return (
    <>
      <h1>Test</h1>
      <NumberSection />
    </>
  );
};

export default HomeContainer;

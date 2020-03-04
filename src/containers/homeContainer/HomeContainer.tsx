import React from 'react';
import classes from './homeContainer.module.scss';

import { Layout, Menu, Breadcrumb, Card } from 'antd';
import Conter from '../../components/counter/Counter';
import NumberSection from '../../components/numbersSection/NumberSection';
import StoneCard from '../../components/ui/mileStoneCard/StoneCard';
const { Header, Content, Footer } = Layout;

const HomeContainer = () => {
  return (
    <>
      <h1>Test</h1>
      <NumberSection />
      <StoneCard />
    </>
  );
};

export default HomeContainer;

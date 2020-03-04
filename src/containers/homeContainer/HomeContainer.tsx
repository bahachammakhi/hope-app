import React from 'react';
import classes from './homeContainer.module.scss';
import image1 from '../../assets/rb.jpg';
import image2 from '../../assets/aa.png';
import image3 from '../../assets/help.png';
import img1 from '../../res/hope.jpg';
import { Layout, Menu, Breadcrumb, Card } from 'antd';
import Conter from '../../components/counter/Counter';
import NumberSection from '../../components/numbersSection/NumberSection';
import CardComponents from '../../components/ui/cards/CardComponents';
const { Header, Content, Footer } = Layout;
const HomeContainer = () => {
  return (
    <>
      <h1>Test</h1>
      <NumberSection />
      <br />
      <CardComponents
        title="Become a volunteer"
        parag="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        img={image1}
      />
      {/* <CardComponents
        title="Become a gamer"
        parag="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        img={image2}
      /> */}
      {/* <CardComponents
        title="Na3am?"
        parag="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        img={image3}
      /> */}
    </>
  );
};

export default HomeContainer;

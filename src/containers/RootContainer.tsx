import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import Test from '../components/ui/Test';
import HomeContainer from './homeContainer/HomeContainer';
import Donateconatainer from './Donatepage/Donateconatainer';
import LayoutHome from '../components/layout/basicLayout/LayoutHome';
import StoneContainer from './StoneContainer';

const RootContainer = () => {
  return (
    <Switch>
      <LayoutHome exact path="/" component={HomeContainer} />
      <LayoutHome path="/donates" component={Donateconatainer} />
      <LayoutHome path="/stones" component={StoneContainer} />
    </Switch>
  );
};

export default RootContainer;

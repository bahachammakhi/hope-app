import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import Test from '../components/ui/Test';
import HomeContainer from './homeContainer/HomeContainer';
import Donateconatainer from './Donatepage/Donateconatainer';
import LayoutHome from '../components/layout/basicLayout/LayoutHome';
import StoneContainer from './StoneContainer';
import Donateinfo from './Donatepage/Donateinfo'

const RootContainer = () => {
  return (
    <Switch>
      <LayoutHome exact path="/" component={HomeContainer} />
      <LayoutHome path="/dontations" component={Donateconatainer} />
      <LayoutHome path="/stones" component={StoneContainer} />
      <LayoutHome path="/Donateinfo" component={Donateinfo} />
    </Switch>
  );
};

export default RootContainer;

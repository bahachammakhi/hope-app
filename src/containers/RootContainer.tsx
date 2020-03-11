import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import Test from '../components/ui/Test';
import HomeContainer from './homeContainer/HomeContainer';
import Donateconatainer from './Donatepage/Donateconatainer';
import LayoutHome from '../components/layout/basicLayout/LayoutHome';

const RootContainer = () => {
  return (
    <Switch>
      <LayoutHome exact path="/"  component={HomeContainer} />
      <LayoutHome path="/donates" component={Donateconatainer} />
    </Switch>
  );
};

export default RootContainer;

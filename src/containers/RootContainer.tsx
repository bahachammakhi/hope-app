import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import Test from '../components/ui/Test';
import HomeContainer from './homeContainer/HomeContainer';
import LayoutHome from '../components/layout/basicLayout/LayoutHome';

const RootContainer = () => {
  return (
    <Switch>
      <LayoutHome path="/" exact component={HomeContainer} />
    </Switch>
  );
};

export default RootContainer;

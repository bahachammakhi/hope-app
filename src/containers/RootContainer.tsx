import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import Test from "../components/ui/Test";

const RootContainer = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Test} />
      </Switch>
    </div>
  );
};

export default RootContainer;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shipment from './pages/Shipment';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/shipment/:shipment" component={Shipment} />
    </Switch>
  );
}

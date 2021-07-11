import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage.component.jsx";
import Shop from "./pages/shop/Shop.component.jsx";

import "./App.css";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;

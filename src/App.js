import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage.component.jsx";
import Shop from "./pages/shop/Shop.component.jsx";
import Header from "./components/Header/Header.component.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;

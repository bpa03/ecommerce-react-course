import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage.component.jsx";
import Shop from "./pages/shop/Shop.component.jsx";
import Login from "./pages/login/Login.component.jsx";
import Header from "./components/Header/Header.component.jsx";

import { auth } from "./firebase/firebase";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const unsubscribeAuth = useRef(null);

  useEffect(() => {
    unsubscribeAuth.current = auth.onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    })
  }, [])

  useEffect(() => {
    return () => {
      unsubscribeAuth.current();
    }
  }, [])

  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

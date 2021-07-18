import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from "./pages/homepage/Homepage.component.jsx";
import Shop from "./pages/shop/Shop.component.jsx";
import Login from "./pages/login/Login.component.jsx";
import Header from "./components/Header/Header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

function App({ setCurrentUser }) {
  const [user, setUser] = useState(null);
  const unsubscribeAuth = useRef(null);

  useEffect(() => {
    unsubscribeAuth.current = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, [setCurrentUser])
  
  useEffect(() => {
    return () => {
      unsubscribeAuth.current();
    }
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchProps)(App);

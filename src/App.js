import React, { useEffect, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from "./pages/homepage/Homepage.component.jsx";
import Shop from "./pages/shop/Shop.component.jsx";
import Login from "./pages/login/Login.component.jsx";
import Header from "./components/Header/Header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

function App({ setCurrentUser, user }) {
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

  const conditionalRender = () => user ? <Redirect to="/"/> : <Login />

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" render={conditionalRender} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user: user.user
})

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchProps)(App);

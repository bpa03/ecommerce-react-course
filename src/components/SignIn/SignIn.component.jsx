import React, { useState } from "react";

import "./signIn.styles.scss";
import Input from "../Input/Input.component";
import Button from "../Button/Button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input 
          name="email"
          value={email}
          required
          type="email"
          label="email"
          onChange={handleChange} 
        />
        <Input 
          name="password"
          value={password}
          required
          type="password"
          label="password"
          onChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

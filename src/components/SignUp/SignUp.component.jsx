import React, { useState } from 'react'

import './signUp.styles.scss';

import Input from "../Input/Input.component";
import Button from "../Button/Button.component";

import { auth, createUserProfileDocument } from '../../firebase/firebase';

const SignUp = () => {
  const [values, setValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = values;

  const handleChange = (e) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert ("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });
      
      setValues({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span> Sign up with your email and password </span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        >
        </Input>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        >
        </Input>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        >
        </Input>
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        >
        </Input>
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  )
}

export default SignUp

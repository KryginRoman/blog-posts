import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import './Login.scss';

export default ({ onSubmit }) => {
  const [loginField, setLoginField] = useState("");
  const [emailField, setEmailField] = useState("");

  const onChangeLoginFieldHandler = ({ target }) => {
    setLoginField(target.value);
  }
  const onChangePassFieldHandler = ({ target }) => {
    setEmailField(target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    onSubmit(loginField, emailField);
  }

  return (
    <div className="login">
      <Form className="login-form" onSubmit={submitHandler}>
          <h2 className="login-title">
            Login Information
          </h2>
          <Form.Group>
            <Form.Label>Login</Form.Label>
            <Form.Control 
              type="text" 
              value={loginField} 
              onChange={onChangeLoginFieldHandler} 
              placeholder="Enter login"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              value={emailField}
              onChange={onChangePassFieldHandler}
            />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Sign in
          </Button>
          <Link to="/registration">
            <Button variant="outline-primary">
              Registration
            </Button>
          </Link>
        </Form>
      </div>
  )
}
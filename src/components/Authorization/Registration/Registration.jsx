import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';


import './Registration.scss';

export default ({ onSubmit }) => {
  const [loginField, setLoginField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [nameField, setNameField] = useState("");
  const [surNameField, setSurNameField] = useState("");

  const onChangeLoginFieldHandler = ({ target }) => {
    setLoginField(target.value);
  }
  const onChangePassFieldHandler = ({ target }) => {
    setEmailField(target.value);
  }
  const onChangeNameFieldHandler = ({ target }) => {
    setNameField(target.value);
  }
  const onChangeSurNameFieldHandler = ({ target }) => {
    setSurNameField(target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    onSubmit(loginField, emailField, nameField, surNameField);
  }

  return (
    <div className="registration">
      <Form className="registration-form" onSubmit={submitHandler}>
          <h2 className="registration-title">
            Registration Information
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
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Your name"
              value={nameField}
              onChange={onChangeNameFieldHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surname</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Your surname"
              value={surNameField}
              onChange={onChangeSurNameFieldHandler}
            />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Registration
          </Button>
        </Form>
      </div>
  )
}
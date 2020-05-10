import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import './AddPostPanel.scss';

export default ({ onSubmit }) => {
  const [titleField, setTitleField] = useState("");
  const [textField, setTextField] = useState("");

  const onChangeTitleHandler = ({ target }) => setTitleField(target.value);
  const onChangeTextHandler = ({ target }) => setTextField(target.value);
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmit(titleField.trim(), textField.trim());
    setTitleField("");
    setTextField("");
  }

  return (
    <div className="post-panel">
      <Form onSubmit={onSubmitHandler}>
        <Form.Group>
          <Form.Label>Post title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Title" 
            value={titleField} 
            onChange={onChangeTitleHandler} 
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Post text</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Text" 
            value={textField} 
            onChange={onChangeTextHandler} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add post
        </Button>
      </Form>
    </div>
  )
}
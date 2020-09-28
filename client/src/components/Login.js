import React, { useRef } from 'react'
import { Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { v4 } from 'uuid'

export const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(v4());
  }

  return (
    <Container
      fluid="sm"
      className="align-items-center d-flex" style={{ height: '100vh' }}
    >
      <Form
        onSubmit={handleSubmit}
        className="w-100"
      >
        <Form.Group>
          <Form.Label>
            Enter your id
          </Form.Label>
          <Form.Control
            type="text"
            ref={idRef}
            required
          >
          </Form.Control>
        </Form.Group>
        <Button
          className="mr-2"
          type="submit">
          Login
        </Button>
        <Button
          onClick={createNewId}
          variant="secondary">
          Create a new Id
        </Button>
      </Form>
    </Container>
  )
};

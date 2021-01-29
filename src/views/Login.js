import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operation from '../redux/operation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispath = useDispatch();

  const hendleInputChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const hendleOnSubmit = e => {
    e.preventDefault();
    dispath(operation.loginUser({ email, password }));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={hendleOnSubmit}>
      <Form.Group controlId="formBasicLogin">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="off"
          onChange={hendleInputChange}
          name="email"
          value={email}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="off"
          onChange={hendleInputChange}
          name="password"
          value={password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const userName = useSelector(state => state.registerUser.user.name);
  return (
    <nav className="nav-bar-conteiner">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/register">
            Registration
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/contacts">
            Contacts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Form className="logout-form">
        <Navbar.Brand>{userName}</Navbar.Brand>
        <Button variant="outline-primary">Loguot</Button>
      </Form>
    </nav>
  );
}

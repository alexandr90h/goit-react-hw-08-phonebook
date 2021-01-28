import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
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
    </nav>
  );
}

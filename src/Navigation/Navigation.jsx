import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import * as operation from '../redux/operation';
// import Avatar from 'react-colorful-avatar';
import LetteredAvatar from 'lettered-avatar';
import { getIsLoggedIn, getRegisterUserName } from '../redux/selectors';

export default function Navigation() {
  const userName = useSelector(getRegisterUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <nav className="nav-bar-conteiner">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
        </Nav.Item>
        {!isLoggedIn && (
          <Nav.Item>
            <Nav.Link as={NavLink} to="/register">
              Registration
            </Nav.Link>
          </Nav.Item>
        )}
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link as={NavLink} to="/contacts">
              Contacts
            </Nav.Link>
          </Nav.Item>
        )}
        {!isLoggedIn && (
          <Nav.Item>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>
      {isLoggedIn && (
        <Form className="logout-form">
          <LetteredAvatar
            name={userName}
            options={{
              size: 30,
              twoLetter: true,
              shape: 'round',
              bgColor: '',
              href: '',
              target: '_blank',
              tooltip: false,
              tooltipTitle: 'CEO Avatar',
              imgClass: 'image-responsive user-image',
              imgWidth: 100,
              imgHeight: 100,
            }}
          />
          <Navbar.Brand>
            {'Welcome,  '} {userName}
          </Navbar.Brand>
          <Button
            variant="outline-primary"
            onClick={() => dispatch(operation.logoutUser())}
          >
            Loguot
          </Button>
        </Form>
      )}
    </nav>
  );
}

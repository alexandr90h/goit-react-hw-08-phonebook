import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <Nav variant="tabs" defaultActiveKey="/register">
      <Nav.Item>
        <Nav.Link href="/register">Registration</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/contacts" href="/contacts">
          Contacts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

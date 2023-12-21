import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './index.css'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="" expand="sm">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="toggle-list">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about" target='_blank'>about</Nav.Link>
            <Nav.Link href="#carrers">carrers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
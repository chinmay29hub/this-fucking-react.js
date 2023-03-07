import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

function Top() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Apps Using Nasa Api (Mars)</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Curiosity Rover</Nav.Link>
            <Nav.Link as={Link} to="/opportunity">Opportunity Rover (Very Less Images)</Nav.Link>
            <Nav.Link as={Link} to="/spirit">Spirit Rover (Very Less Images)</Nav.Link>
            <Nav.Link as={Link} to="/allphotos">Photos By Date</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Top;
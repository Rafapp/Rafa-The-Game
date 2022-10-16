import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RafaIcon from "../Img/RafaIcon.png"

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" fixed='top' style={{background:"linear-gradient(to bottom, #1e2124 50%, #282b30 100%)"}}>
      <Container>
          <img
            src={RafaIcon}
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{marginLeft:0, marginRight: "5vh"}}
          />
        <Navbar.Brand href="#home">Rafael Padilla Perez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;

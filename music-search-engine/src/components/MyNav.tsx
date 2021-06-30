import '../styles/style.css'
import { Component } from 'react';
import { Container, Navbar, Row } from 'react-bootstrap';
import { SiApplemusic } from 'react-icons/si';


class MyNav extends Component {
  state = {};

  render() {
    return (
      <Container className="nav-main">
        <Row>
          <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">
              
                <SiApplemusic className="job-logo" />{' '}
             
            </Navbar.Brand>
            <span className="nav-title">Music Search Engine</span>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default MyNav;

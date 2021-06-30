import '../styles/style.css';
import { Component } from 'react';

import { GiMusicalNotes } from 'react-icons/gi';

import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

class Searching extends Component {
  state = {
    results: [],
    query: '',
  };

  getMusic = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=bonobo '
      );
      let res = await response.json();
      let results = res.data;

      this.setState({ results: results });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={12}>
              <InputGroup size="lg" className="search-desc">
                <InputGroup.Text id="inputGroup-sizing-lg">
                  {' '}
                  <GiMusicalNotes className="search-bar-icon" />
                </InputGroup.Text>
                <FormControl
                  aria-label="Large"
                  placeholder="Type your music here"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>{' '}
            </Col>
          </Row>
          <div className="main-cont">
            {this.state.results.map((result) => (
              <>
                <Row>
                  <Col md={2}> </Col>
                </Row>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={result.album.cover_big} />
                  <Card.Body>
                    <Card.Title>Song title: "{result.title}"</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Artist: {result.artist.name}</ListGroupItem>
                    <ListGroupItem>
                      <img src={result.artist.picture} alt="artist" />
                    </ListGroupItem>
                    <ListGroupItem>{result.artist.link}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </>
            ))}
          </div>
        </Container>
      </>
    );
  }
}

export default Searching;

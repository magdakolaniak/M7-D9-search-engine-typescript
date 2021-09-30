import '../styles/style.css';

import { GiMusicalNotes } from 'react-icons/gi';
import AllList from './AllList';

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { ChangeEvent, useState } from 'react';
import { Result } from '../types/interfaces';
import { useEffect } from 'react';

function Searching() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Result[]>([]);
  const [placeholder, setPlaceholder] = useState<string>('Set your music here');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleClick = () => {
    getMusic(query);
    setPlaceholder('try again');
    console.log(placeholder);
  };

  const getMusic = async (query: string) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      let res = await response.json();
      let resp = res.data;
      console.log(resp);
      setResults(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <InputGroup size="lg" className="search-desc">
              <InputGroup.Text id="inputGroup-sizing-lg">
                {' '}
                <GiMusicalNotes className="search-bar-icon" />
              </InputGroup.Text>

              <FormControl
                aria-label="Large"
                placeholder={placeholder}
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleChange}
              />
              <Button variant="secondary" onClick={handleClick}>
                Go!
              </Button>
            </InputGroup>{' '}
          </Col>
        </Row>
        <AllList songs={results} />
      </Container>
    </>
  );
}

export default Searching;

import { Result } from '../types/interfaces';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.css';

interface AllListProps {
  songs: Result[];
}

const AllList = ({ songs }: AllListProps) => {
  return (
    <>
      <h4>HI</h4>
      <br />
      <Row>
        {songs.map((song) => (
          <Col sm={4} key={song.id} className="px-3 ">
            <Card style={{ width: '18rem' }} className="shadow-style">
              <Card.Img
                variant="top"
                src={song.album.cover_big}
                className="card-image-style"
              />
              <Card.Body>
                {/* <Link to={`/song/${song.id}`}> */}
                <Card.Title>Your title: {song.title}</Card.Title>
                {/* </Link> */}
                <span>
                  <span className="subtitle">Artist:</span> {song.artist.name}{' '}
                  <br></br>
                  <img
                    src={song.artist.picture}
                    alt="artist"
                    className="artist-image"
                  />
                </span>
                <div>
                  <span className="subtitle">From album:</span>{' '}
                  {song.album.title}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllList;

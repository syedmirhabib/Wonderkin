import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import Marquee from "react-fast-marquee";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Popular = () => {
  const [recepies, setRecepies] = useState([]);

  fetch('https://project-murighonto-server-sumonashimu.vercel.app/recepies')
    .then(response => response.json())
    .then(data => {
      setRecepies(data);
    })
    .catch(error => console.error(error));

  let newrecepe;
  if (recepies) newrecepe = recepies.slice(0, 6);

  return (
    <Container className='text-center my-5 py-5'>
      <h1 className='banner-title my-4'>Popular on Our Site</h1>
      <p className='py-3'>The ultimate destination to explore the authentic and mouthwatering traditional recipes of Bangladeshi cuisine.</p>

      <Row xs={2} md={3} className="g-4 mt-5 border-0">
        {newrecepe.map(item => (
          <Col key={item.id} className='recepe-card'>
            <Card className='h-100 border-0'>
              <Card.Img variant="top" src={item.picture} className='popular-img mx-auto' />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <FaStar color={'orange'} />
                  <FaStar color={'orange'} />
                  <FaStar color={'orange'} />
                  <FaStar color={'orange'} />
                  {item.rating >= 4.5 ? <FaStarHalfAlt color={'orange'} /> : null}
                  <small>( {item.rating} )</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Link to='/recepies'>
        <Button variant='warning' className='mt-5'>Show All Recepies</Button>
      </Link>
    </Container>
  );
};

export default Popular;

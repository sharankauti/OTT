import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../Users/Componets/User.module.css'
import PlaceItem from './PlaceItem';
import Alert from 'react-bootstrap/Alert';



const PlaceList = (props) => {
  const [show, setShow] = useState(true);
  if (props.items.length === 0 && show) {
    return(
      <Alert className={styles.customAlert + " " + 'mx-auto w-75 py-2'} variant='info' onClose={() => setShow(false)} dismissible>
        <Card.Body>
          <h6 className='mb-4'>No Places Found! create Places by click below Button</h6>
          <Button variant="outline-success">Share Place</Button>
        </Card.Body>
      </Alert>
    )
  }
  return (
    <Row>
      {
        props.items.map((places)=>{
          return <Col className='mb-4 mb-lg-2' sm={12} md={6} lg={4}>
              <PlaceItem 
                key={places.id}
                id={places.id}
                image={places.imageSrc}
                title={places.title}
                discription= {places.discription}
                address= {places.address}
                creatorId = {places.creator}
                coordinates = {places.location}
          />
          </Col>
        })
      }
    </Row>
  )
}

export default PlaceList
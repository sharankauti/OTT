import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Modals from '../../Shared/Componets/UI Elements/Modals';
import styles from '../../Users/Componets/User.module.css'
import Maps from '../../Shared/Componets/UI Elements/Maps';
const PlaceItem = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    <Modals 
      size={'lg'}
      show={show} 
      onHide={handleClose} 
      title={props.address}
      footerButtons={<Button variant='outline-dark' onClick={handleClose}>Close</Button>}
      backdrop="static"
      keyboard={false}
    >
        <div style={{width:'100%',height:'400px'}}>
          <Maps center={props.coordinates} zoom={4} />
        </div>
    </Modals>
      <Card className={styles.customCard} key={props.id} id={props.id}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
            <Card.Title><h3>{props.title}</h3></Card.Title> 
            <h5>{props.address}</h5>
            <p>{props.discription}</p>
          <div className='Actions d-flex align-items-center justify-content-between'>
            <Button variant="outline-danger" onClick={handleShow}>View On Maps</Button>
            <Link to={`/places/${props.id}`}><Button variant="secondary">Edit</Button></Link>
            <Button variant="danger">Delete</Button>
          </div>
      </Card.Body>
  </Card>
</>
  )
}

export default PlaceItem
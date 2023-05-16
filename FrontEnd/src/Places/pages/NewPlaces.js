import React,{useState} from 'react'
import styles from '../../Places/Componets/Places.module.css'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const NewPlaces = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit =(event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true)
  }
  return (
  <section className={styles.placesSection}>
    <Container className={`${styles.formBox} py-4`}>
      <Form className={styles.customForm} noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Col} sm={10} md={10}  lg={12}  controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control required 
              type='text'
              placeholder='Enter Title of Place' 
            />
            <Form.Control.Feedback className={styles.invalid} type='invalid'>This Field Required</Form.Control.Feedback>
          </Form.Group>
          <Button className='my-4' type="submit" variant='outline-success'>Submit form</Button>
      </Form>
    </Container>
  </section>
  )
}

export default NewPlaces
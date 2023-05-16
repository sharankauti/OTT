import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styles from '../../Users/Componets/User.module.css'
const UserItem = (props) => {
  return (
                    <Card className={styles.customCard} key={props.id} id={props.id}>
                        <Card.Img variant="top" src={props.image} />
                        <Card.Body>
                            <Link to ={`${props.id}/places}`}> 
                                    <Card.Title>{props.name}</Card.Title> 
                            </Link>
                            <Card.Text>
                                {props.placeCount}{props.placeCount > 1 ? 'places' : 'place'} 
                            </Card.Text>
                        </Card.Body>
                    </Card>
               
        
   
  )
}

export default UserItem
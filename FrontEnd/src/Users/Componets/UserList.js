import React,{useState} from 'react'
import UserItem from './UserItem'
import styles from '../../Users/Componets/User.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';



const UserList = (props) => {
  const [show, setShow] = useState(true);
    if (props.items.length === 0 && show) {
        return( <Alert className={styles.customAlert + " " + 'mx-auto w-25 py-2'} variant='info ' onClose={() => setShow(false)} dismissible>
             <div className={styles.message}>No Users Found!!1</div>
        </Alert>)
    }
  return (
 
    <Row>
               {props.items.map((users)=>{
                    return <Col className='mb-4 mb-lg-2' sm={12} md={6} lg={4}>
                        <UserItem 
                          key={users.id}
                          id={users.id}
                          name={users.name}
                          image={users.imageSrc}
                          placeCount={users.placeCount}
                        />
                    </Col>
                   
                })} 
        </Row>
   
  )
}

export default UserList
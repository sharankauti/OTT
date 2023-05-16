import React from 'react'
import styles from '../../../Shared/Componets/Navigation/MainHeader.module.css'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
const NavLinks = (props) => {
  return (
        <ul className={styles.navList}>
            <li className='mx-3'>
                <NavLink to='/' exact activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.33)',padding:'5px',borderRadius:'4px'}}>Home</NavLink>
            </li>
            <li className='mx-3'>
                <NavLink to='/' activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.33)',padding:'5px',borderRadius:'4px'}}>Shows</NavLink>
            </li>
            <li className='mx-3'>
                <NavLink to='/'>Movie</NavLink>
            </li>
            <li className='mx-3'>
                <NavLink to='/'>Comedy</NavLink>
            </li>
            <li className='mx-3'>
                <NavLink to='/'>News</NavLink>
            </li>
            <li className='mx-3'>
                <Form className="d-flex">
                    <Form.Control type="search"
                                  placeholder="Search"
                                  className="me-2"
                                  aria-label="Search">
                    </Form.Control>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </li>
            <li className='ms-5 me-3'>
                <Form className="d-flex">
                   <Button variant="outline-light" className='me-2'>Subscribe</Button>
                   <Button variant="outline-light">Login</Button>
                </Form>
            </li>
            
        </ul>
  )
}

export default NavLinks
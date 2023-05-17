import React, {useState} from 'react'
import styles from '../../../Shared/Componets/Navigation/MainHeader.module.css'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
const NavLinks = (props) => {

  return (
    <>

        <ul className={styles.navList}>
            <li className='mx-3'>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className='mx-3'>
                <NavLink to='/' >Shows</NavLink>
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
            {/* <li className='ms-3 me-3 ms-lg-5 mobileShow'>
                <Form className="d-flex">
                   <Button variant="outline-light" className='me-2'>Subscribe</Button>
                   <Button variant="outline-light" onClick={handleShow}>Login</Button>
                </Form>
            </li> */}
            
        </ul>
        </>
  )
}

export default NavLinks
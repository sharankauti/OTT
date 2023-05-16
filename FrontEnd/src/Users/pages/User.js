import React from 'react'
import UserList from '../Componets/UserList'
import Container from 'react-bootstrap/Container'
import styles from '../../Users/Componets/User.module.css'
const UserArray = [
  {
    id:'u1',
    name:'Maxmilan',
    imageSrc:'http://cdn.mcauto-images-production.sendgrid.net/fb6f814557de197c/d919a3ad-e928-4992-ae6c-61a5fb6a7931/127x140.png',
    placeCount:4,
  },
  {
    id:'u2',
    name:'Stokes',
    imageSrc:'http://cdn.mcauto-images-production.sendgrid.net/fb6f814557de197c/172bf6f4-e3fc-4b1d-8dd8-3b4064525e3d/127x140.jpg',
    placeCount:1,
  },
  {
    id:'u3',
    name:'Malan',
    imageSrc:'http://cdn.mcauto-images-production.sendgrid.net/fb6f814557de197c/d919a3ad-e928-4992-ae6c-61a5fb6a7931/127x140.png',
    placeCount:10,
  }
]
const user = () => {
  return (
    <section className={styles.userSection}>
      <Container>
        <UserList items={UserArray}/>
      </Container>
    </section>
    
  )
}

export default user
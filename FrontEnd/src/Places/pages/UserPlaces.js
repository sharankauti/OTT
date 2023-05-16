import React from 'react'
import PlaceList from '../Componets/PlaceList'
import styles from '../../Places/Componets/Places.module.css'
import Container from 'react-bootstrap/esm/Container'
import {useParams} from 'react-router-dom'
const dummayPlaceArray = [
  {
    id:Math.random(),
    title:'Siganduru',
    discription:'Sigandur or Sigandooru is a village in the Indian state of Karnataka. The village is known for the Sigandur Chowdeshwari Temple, a Hindu pilgrimage site that attracts hundreds daily.',
    address:'Sigandur 577421',
    imageSrc:'http://cdn.mcauto-images-production.sendgrid.net/fb6f814557de197c/cc5c1f01-f2b2-472b-bad5-552276bd7042/208x130.jpg',
    location:{
      lat:14.0759339,
      lng:74.8640721
    },
    creator:'u1'
  },
  {
    id:Math.random(),
    title:'Kodachadri Hill',
    discription:'Established trails cut through forest cover on this lush peak known for its waterfalls & temples',
    address:'Kodachadri, Karnataka 577452',
    imageSrc:'http://cdn.mcauto-images-production.sendgrid.net/fb6f814557de197c/172f224a-9f21-4c99-b201-36995170dd25/1024x768.jpeg',
    location:{
      lat:13.8572394,
      lng:74.867367
    },
    creator:'u2'
  },

]
const UserPlaces = () => {
  const {userId} = useParams()
  const loadedPlaces = dummayPlaceArray.filter((places)=> places.creator === userId);
  return (
    <section className={styles.placesSection}>
      <Container>
        <PlaceList items={loadedPlaces}/>
      </Container>
    </section>
   
  )
}

export default UserPlaces
import React from 'react'

import styles from '../../../Shared/Componets/Navigation/MainHeader.module.css'
const MainHeader = (props) => {
  return (
    <header className={styles.customHeader}>
   
            {props.children}
      
    </header>
  )
}

export default MainHeader
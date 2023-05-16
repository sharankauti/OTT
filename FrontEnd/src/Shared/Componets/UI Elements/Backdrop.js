import React from 'react'
import ReactDOM from 'react-dom';
import styles from '../UI Elements/Backdrop.module.css'
const Backdrop = () => {
    return ReactDOM.createPortal(
        <div className={styles.backdrop}></div>,
        document.getElementById('Backdrop_Body')
      );
}

export default Backdrop
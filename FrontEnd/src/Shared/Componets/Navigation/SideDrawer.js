import React from 'react'
import  ReactDOM  from 'react-dom'
import {CSSTransition} from 'react-transition-group'
import styles from '../../../Shared/Componets/Navigation/MainHeader.module.css'
const SideDrawer = (props) => {
  
    const sideDrawerContent = (<CSSTransition in={props.show} timeout={500} classNames='slide-in-left' mountOnEnter unmountOnExit>
        <aside className={styles.SideDrawer} onClick={props.onClick}>
            {props.children}
        </aside></CSSTransition>)
    return ReactDOM.createPortal(sideDrawerContent,document.getElementById('Drawer_Body'))
}

export default SideDrawer
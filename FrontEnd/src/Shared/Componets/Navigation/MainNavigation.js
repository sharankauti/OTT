import React,{useState} from 'react'
import MainHeader from './MainHeader'
import styles from '../../../Shared/Componets/Navigation/MainHeader.module.css'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UI Elements/Backdrop'

const MainNavigation = (props) => {
    const [checked,setChecked] = useState(false)
    
    const handleSideBar = ()=>{
        setChecked(!checked)
        const bodyTag = document.getElementsByTagName('body')[0];
        bodyTag.style.position = checked ? 'unset' : 'fixed';
        const labelConatains =  document.querySelector('.MainHeader_hamburger__3cZOQ').classList.toggle('active');
       if (labelConatains) {
           let lines = document.querySelectorAll('.MainHeader_line__2yYEF');
           lines.forEach((l)=>{
            l.classList.add('rotate')
           })
       }else{
        let lines = document.querySelectorAll('.MainHeader_line__2yYEF');
           lines.forEach((l)=>{
            l.classList.remove('rotate')
           })
       }
    }
    const closeSideDrawer = ()=>{
        setChecked(false)
        const bodyTag = document.getElementsByTagName('body')[0];
        bodyTag.style.position = checked ? 'unset' : 'fixed';
    }

  return (
    <>
    {checked ? <Backdrop/> : null}
  <SideDrawer show={checked} onClick={closeSideDrawer}>
        <nav className={styles.mobileNavLinks}> <NavLinks/></nav>
    </SideDrawer> 
        <MainHeader>
            <Container fluid className='d-flex align-items-center px-4 px-md-4 px-lg-5'>
                <button onClick={handleSideBar} className={styles.navButton}>
                    <input type='checkbox' checked={checked} id={styles['hamburgerInput']}/>
                    <label htmlFor='hamburgerInput' className={styles.hamburger}>
                            <span className={styles.line}/>
                            <span className={styles.line}/>
                            <span className={styles.line}/>
                    </label>
                </button>
                <Link to='/'>
                    <div className={styles.headerTitle}>PROOTT</div>
                </Link>
                <nav className={styles.mainNavigation +" " + 'mx-4 mx-md-4 mx-lg-4'}>
                    <NavLinks/>
                </nav>
            </Container>
        </MainHeader>
    </>
  )
}

export default MainNavigation
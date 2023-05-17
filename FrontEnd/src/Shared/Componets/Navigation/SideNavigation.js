import React from 'react'
import styles from '../Navigation/SideNavigation.module.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import SwiperThumb from '../Swipers/SwiperThumb';


const LeftTabsExample = ()=> {
    const tabLinks = document.querySelectorAll('.SideNavigation_tabLinks__2Eedc');
    tabLinks.forEach((el)=>{
        console.log(el);
    })

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  
      <Row className='g-0'>
        <Col sm={12} md={12} lg={2} className='ps-0'>
        <div className={styles.leftAside}>
            <Nav variant="pills" className="flex-row flex-lg-column justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey="first" className={styles.tabLinks}>Channels</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second" className={styles.tabLinks}>Languages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" className={styles.tabLinks}>Geners</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        </Col>
        <Col sm={12} md={12} lg={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className={styles.contentArea}>
                <div className={styles.SwiperrArea}>
                    <SwiperThumb/>
                    <Row>
                        <Col sm={12} md={12} lg={3}>
                         
                        </Col>
                    </Row>
                    
                </div>
                  
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <div className={styles.contentArea}>
                    Languages
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <div className={styles.contentArea}>
                    Geners
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      
    </Tab.Container>
  );
}

export default LeftTabsExample;
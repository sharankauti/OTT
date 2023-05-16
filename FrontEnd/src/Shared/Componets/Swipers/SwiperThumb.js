import React, {useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

import '../Swipers/SwiperThumb.css'
import { Accordion, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { FreeMode, Navigation, Thumbs } from "swiper";

const SwiperThumb = ()=> {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [type,setType] = useState("Movie");
  const [selectID,setSelectId] = useState("Movie")
  const optionVal = [
    {value:'Movie',label:'Recommended Movies',key:'Movie'},
    {value:'Animated',label:'Animated Adventure',key:'Animated'},
    {value:'shows',label:'popular shows',key:'shows'}
]
  const data = 
    {
        "Movie":[
            {
                id:'m1',
                title:'Charlie 777',
                src:'https://i.postimg.cc/76zz21qg/charlie777.jpg',
                discription:'something'
            },
            {
                id:'m2',
                title:'KGF',
                src:'https://i.postimg.cc/J4MXsBvk/kgf.jpg',
                discription:'somethingHorrible'
            },
            {
                id:'m3',
                title:'tararu',
                src:'https://i.postimg.cc/wMcsW6yM/tagaru.jpg',
                discription:'somethingFishy'
            }
        ],
        "Animated":[
            {
                id:'a1',
                title:'animated1',
                src:'https://i.postimg.cc/yNP611Km/animated1.jpg',
                discription:'somethingnew'
            },
            {
                id:'a2',
                title:'animated2',
                src:'https://i.postimg.cc/FKmsXfMF/animated2.jpg',
                discription:'somethingWonder'
            },
            {
                id:'a3',
                title:'animated3',
                src:'https://i.postimg.cc/zXVyxgr9/animated3.jpg',
                discription:'somethingWOW'
            }
        ]

    }
    let loopData;

    optionVal.forEach(element =>{
        if (element.value == type) {
          const result =   Object.entries(data).filter((el)=> el[0] == element.key)
          result.forEach((element)=>{
            loopData = element[1].map((it)=>it);
          })
        }
      })

     
   
  

  
//   optionVal.map((element)=>{
//     if (element.value === type ) {
//        let res = data.filter((el)=> el.key1 !== element.key)
//        console.log(res);
//     }
//   })
//   const MovieSrc = [
//     {   
//         id:'m1',
//         title:'Charlie 777',
//         src:'https://i.postimg.cc/76zz21qg/charlie777.jpg',
//         discription:'something'
//     },
//     {   
//         id:'m2',
//         title:'KGF',
//         src:'https://i.postimg.cc/J4MXsBvk/kgf.jpg',
//         discription:'somethingHorrible'
//     },
//     {
//         id:'m3',
//         title:'tararu',
//         src:'https://i.postimg.cc/wMcsW6yM/tagaru.jpg',
//         discription:'somethingFishy'
//     }
//   ]
//   const AnimatedSrc = [
//     {
//         id:'a1',
//         title:'animated1',
//         src:'https://i.postimg.cc/yNP611Km/animated1.jpg',
//         discription:'somethingnew'
//     },
//     {
//         id:'a2',
//         title:'animated2',
//         src:'https://i.postimg.cc/FKmsXfMF/animated2.jpg',
//         discription:'somethingWonder'
//     },
//     {
//         id:'a3',
//         title:'animated3',
//         src:'https://i.postimg.cc/zXVyxgr9/animated3.jpg',
//         discription:'somethingWOW'
//     }
//   ]


   


  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {Object.values(loopData).map((values)=>{
          
            return(
                <>
                    <SwiperSlide>
                        <img  src={Object.entries(values)[2][1]}  alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={Object.entries(values)[2][1]} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src={Object.entries(values)[2][1]}  alt=""/>
                    </SwiperSlide>
                </>
            )
        })
        
        }
      
           
           
      
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
     
      
    
     
         {Object.entries(loopData).map((res)=>{
            console.log(res[1].src);
            return(
<>
                  <SwiperSlide>
                      <img  src='https://i.postimg.cc/yNP611Km/animated1.jpg' alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img  src='https://i.postimg.cc/yNP611Km/animated1.jpg' alt=""/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img  src='https://i.postimg.cc/yNP611Km/animated1.jpg' alt="" />
                  </SwiperSlide>
              </>
            )
         })}
              
         


       
        
     
       
      </Swiper>

       {/* Menu Bar */}
       <Row className="g-0 my-4">
            <Col sm={12} lg={12}>
            <Form.Group controlId="formBasicSelect">
                <Form.Control
                as="select"
                value={type}
                onChange={e => {
                    console.log("e.target.value", e.target.value);
                    setType(e.target.value);
                }}
                >
                   {optionVal.map((val) => (
                    <option key={val.value} value={val.value}>
                        {val.label}
                    </option>
                    ))}
                {/* <option value="Movie">Movie</option>
                <option value="Animated">Animated</option> */}
                
                </Form.Control>
            </Form.Group>
            </Col>
        </Row>
        <Row className="g-0 my-4">
            <Col sm={12} lg={12}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Header> </Accordion.Header>
                    <Accordion.Body>
                       
                    </Accordion.Body>
                </Accordion>
            </Col>
        </Row>
    </>
  );
}
export default SwiperThumb;
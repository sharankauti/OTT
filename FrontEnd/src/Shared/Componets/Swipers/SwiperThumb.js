import React, {useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import '../Swipers/SwiperThumb.css'
import {Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { FreeMode, Navigation, Thumbs } from "swiper";

const SwiperThumb = ()=> {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [type,setType] = useState("Movie");
  const [selectID,setSelectId] = useState("Movie")
  const [showcard,setShowCard] = useState(false)
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
                discription:'777 Charlie is a 2022 Indian Kannada-language adventure comedy drama film written and directed by Kiranraj K. and produced by Paramvah Studios. It stars Charlie, a labrador dog in the titular role, and Rakshit Shetty alongside Sangeetha Sringeri, Raj B. Shetty, Danish Sait, Bobby Simha and Aniruddh Roy. The film follows the journey and bonding between a lonely factory worker and a stray labrador dog.'
            },
            {
                id:'m2',
                title:'KGF',
                src:'https://i.postimg.cc/J4MXsBvk/kgf.jpg',
                discription:'K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film[19] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second installment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars an ensemble cast of Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty, Prakash Raj, Archana Jois, Achyuth Kumar, Rao Ramesh, Vasishta N. Simha, T. S. Nagabharana and Malavika Avinash.'
            },
            {
                id:'m3',
                title:'tararu',
                src:'https://i.postimg.cc/wMcsW6yM/tagaru.jpg',
                discription:'Tagaru (transl. Ram, male sheep)[2] is a 2018 Indian Kannada-language action thriller film directed by Duniya Soori and produced by K. P. Srikanth.[3] It features Shiva Rajkumar, Bhavana and Manvitha in the lead roles[4] along with Dhananjay,[5] Vasishta N. Simha and Devaraj in key supporting roles. The soundtrack and score are composed by Charan Raj and the cinematography by Mahendra Simha.'
            }
        ],
        "Animated":[
            {
                id:'a1',
                title:'animated1',
                src:'https://i.postimg.cc/yNP611Km/animated1.jpg',
                discription:'Animation is a method by which still figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Today, many animations are made with computer-generated imagery (CGI).'
            },
            {
                id:'a2',
                title:'animated2',
                src:'https://i.postimg.cc/FKmsXfMF/animated2.jpg',
                discription:' Computer animation can be very detailed 3D animation, while 2D computer animation (which may have the look of traditional animation) can be used for stylistic reasons, low bandwidth, or faster real-time renderings'
            },
            {
                id:'a3',
                title:'animated3',
                src:'https://i.postimg.cc/zXVyxgr9/animated3.jpg',
                discription:'A cartoon is an animated film, usually a short film, featuring an exaggerated visual style. The style takes inspiration from comic strips, often featuring anthropomorphic animals, superheroes, or the adventures of human protagonists.'
            }
        ],
        "shows":[
            {
                id:'s1',
                title:'Ede Thumbi Haduvenu',
                src:'https://i.postimg.cc/rpbYPtZV/spb.jpg',
                discription:'Balasubrahmanyam hosted and judged Telugu musical reality TV show Padutha Theeyaga, which marked his television debut. Starting from 1996, the show is credited for unearthing singing talents from Andhra Pradesh and Telangana. Singers like Usha, Kousalya, Gopika Poornima, Mallikarjun, Hemachandra, N. C. Karunya, Smita etc., have debuted in the show.[79][80] He also hosted and judged Kannada musical reality TV show Ede Thumbi Haaduvenu.[81] Balasubrahmanyam also appeared in other shows such as Paadalani Undi, Endaro Mahanubahvulu and Swarabhishekam.[82]'
            },
            {
                id:'s2',
                title:'WeekEnd With Ramesh',
                src:'https://i.postimg.cc/PxwFsr0m/weekendramesh.jpg',
                discription:'Weekend with Ramesh is an Indian talk show hosted by actor, film director and inspirational speaker Ramesh Aravind on Zee Kannada.[1] The first season of the show began airing on 2 August 2014, and ended on 26 October 2014, after airing 26 episodes.[2] The second season of the show aired from 26 December 2015 to 16 April 2016. The third season aired from 26 March 2017 and 2 July 2017. Pradyumna Narahalli was the script writer for season 2 and season 3.'
            },
            {
                id:'s3',
                title:'The Kapil Sharma Show',
                src:'https://i.postimg.cc/s21NmJcH/kapil.jpg',
                discription:'The Kapil Sharma Show, also known as TKSS, is an Indian Hindi-language stand-up comedy and talk show broadcast by Sony Entertainment Television. Hosted by Kapil Sharma, the first season of the show had its premiere on 23 April 2016. The series revolved around Kapil Sharma and his neighbours in the Shantivan Non Co-operative Housing Society. The filming of the show took place at Film City situated in Goregaon East, Mumbai.[1]'
            }
        ]

    }
    // let loopData;

    // optionVal.forEach(element =>{
    //     if (element.value == type) {
    //       const result =   Object.entries(data).filter((el)=> el[0] == element.key)
    //       result.forEach((element)=>{
    //         loopData = element[1].map((it)=>it);
    //       })
    //     }
    //   })

    let discriptionText;
    let title;
    data[type].map((results)=> {
            if (results.id === selectID) {
                return discriptionText = results.discription,title = results.title;    
            }
    })
    const handleImgClick = (event)=>{
        setSelectId(event.target.id)
        setShowCard(true)
    }
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
         {data[type]?.map((res)=>{
          
            return(
                <>
                    <SwiperSlide>
                        <img  src={res.src} id={res.id}  alt=""/>
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
     
      
    
     
     {data[type]?.map((res)=>{
          
          return(
              <>
                  <SwiperSlide>
                      <img onClick={handleImgClick}  src={res.src} id={res.id}  alt=""/>
                  </SwiperSlide>
              </>
          )
      })
      
      
      }
              
         


       
        
     
       
      </Swiper>

       {/* Menu Bar */}
       <Row className="g-0">
            <Col className="mb-3 mb-lg-0 px-0 pe-0 pe-md-0 pe-lg-3" sm={12} md={12} lg={4}>
                <Form.Select
                value={type}
                onChange={e => {
                    console.log("e.target.value", e.target.value);
                    setType(e.target.value);
                    setShowCard(false)
                }}
                >
                   {optionVal.map((val) => (
                    <option key={val.value} value={val.value}>
                        {val.label}
                    </option>
                    ))}
                
                </Form.Select>
            
            </Col>
            <Col sm={12} md={12} lg={8}>
               {showcard && 
                    <Card>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{discriptionText}</Card.Text>
                        </Card.Body>
                    </Card>
               } 
               
            </Col>
        </Row>
   
    </>
  );
}
export default SwiperThumb;
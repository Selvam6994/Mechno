import React from 'react';
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import video from "./assets/production.mp4";
// import images from "./images";
import Image1 from "./assets/Images/image1.webp";
import Image2 from "./assets/Images/image2.webp";
import Image3 from "./assets/Images/image3.webp";
import Industrial from "./assets/Images/Industry.webp";
import Automation from "./assets/Images/Automation.webp";

function Body() {
    const about = [
      {
        cardImage: Industrial,
        cardTitle: "Industrial Services",
        cardText:
          "We fulfill all your industrial needs to make your organization much efficient and profitable",
      },
      {
        cardImage: Automation,
        cardTitle: "Automation",
        cardText:
          "Towards the Era of Industrial Automation! A destination where you can visualize the reality of moving your company into the Innovation driven Automation World",
      },
    ];
    return (
      <>
       
        <header className="masthead">
        
          <div className="overlay"></div>
          <video src={video} autoPlay loop muted />
          <div className="content">
          
          <Carousel className="carousel-container">
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={Image1}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-content">
                <h1>For all your Industrial Automation needs</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image2}
                alt="Second slide"
              />
  
              <Carousel.Caption className="carousel-content">
                <h1>Your dream of automation ends here!</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
              />
  
              <Carousel.Caption className="carousel-content">
               
                <h1>
                  The next-gen Industrial Automation
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      
            <div className="box container col-lg-12">
              <div className="row cards">
                
                {about.map((details) => {
                  return (
                    <div
                      className="card"
                      style={{
                        width: "500px",
                        height: "600px",
                        borderRadius: "50px",
      
                        backgroundColor: " rgba(0,112,250,0.5)",
                        // justifyContent: "center",
                      }}
                    >
                      <img
                        src={details.cardImage}
                        style={{
                          borderRadius: "50px",
                          paddingTop: "10px",
                        }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">
                          <b>{details.cardTitle}</b>
                        </h5>
                        <p className="card-text">{details.cardText}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </header>
      </>
    );
  
}

export default Body
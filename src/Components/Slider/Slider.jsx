import React from 'react';
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel';
import sliderimg1 from "./../img/banner1.jpg";
import sliderimg2 from "./../img/banner2.jpg";
import sliderimg3 from "./../img/banner3.jpg";

const Slider = () => {
  return (
    <>
      <div className="Slider_container">
            {/* <div className="slider_arrows">
                <div className="slider_arrow">
                    <AiFillCaretLeft/>
                </div>
                
                <div className="slider_arrow" >
                    <AiFillCaretRight/>
                </div>
            </div>
          
        <div className="primary_slider_wrapper">
            <div className="slider_wrapper">
                <div className="slider_img" >
                     <img src={sliderimg1} alt=""  />  
                </div>

                <div className="slider_img_info" >
                    <h1>Summer Sale</h1>
                    <p>don't compromise on style! get flat 30% off for new arrivals.</p>
                    <button>shop now</button>
                </div>
            </div>

            <div className="slider_wrapper">
                <div className="slider_img" >
                     <img src={sliderimg2} alt=""  />  
                </div>

                <div className="slider_img_info" >
                    <h1>Summer Sale</h1>
                    <p>don't compromise on style! get flat 30% off for new arrivals.</p>
                    <button>shop now</button>
                </div>
            </div>

            <div className="slider_wrapper">
                <div className="slider_img" >
                     <img src={sliderimg3} alt=""  />  
                </div>

                <div className="slider_img_info" >
                    <h1>Summer Sale</h1>
                    <p>don't compromise on style! get flat 30% off for new arrivals.</p>
                    <button>shop now</button>
                </div>
            </div>
        </div> */}

<Carousel indicators={false}>
      <Carousel.Item>
        <div className="primary_image_slider">
            <div className="image_slider"><img src={sliderimg1} alt="" /></div>

            <div className="slider_image_info">
                <h1>Summer Sale</h1>
                <p>don't compromise on style! get flat 30% off for new arrivals.</p>
                <button>shop now</button>
            </div>
        </div>
            
      </Carousel.Item>
      <Carousel.Item>
        <div className="primary_image_slider">
                <div className="image_slider"><img src={sliderimg2} alt="" /></div>

                <div className="slider_image_info">
                    <h1>Popular Sale</h1>
                    <p>don't compromise on style! get flat 30% off for new arrivals.</p>
                    <button>shop now</button>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="primary_image_slider">
                <div className="image_slider"><img src={sliderimg3} alt="" /></div>

                <div className="slider_image_info">
                    <h1>Winter Sale</h1>
                    <p>don't compromise on style! get flat 30% off for new arrivals.</p>
                    <button>shop now</button>
                </div>
            </div>
      </Carousel.Item>
    </Carousel>
      </div>
    </>
  );
};

export default Slider;

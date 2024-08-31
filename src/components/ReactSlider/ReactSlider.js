import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import'./ReactSlider.css'
import { SliderData } from './SliderData';

// const SliderData = [
// "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
// ];

const slideProperties = {
  duration: 7000,
  transitionDuration: 1000,
  defaultIndex: 0,
  //Easing: 'ease-in',
  infinite: true,
  indicators: true,
  canSwipe: true,
  pauseOnHover: true,
  autoplay: true,
  arrows: true
}


const Slideshow = () => {
    return (
  
        <Slide easing="ease" {...slideProperties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${SliderData[0]})`}}>
              <span  >Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${SliderData[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${SliderData[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${SliderData[3]})`}}>
              <span>Slide 4</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${SliderData[4]})`}}>
              <span>Slide 5</span>
            </div>
          </div>
          {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${SliderData[5]})`}}>
              <span>Slide 6</span>
            </div>
          </div> */}
          {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${SliderData[6]})`}}>
              <span>Slide 7</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${SliderData[7]})`}}>
              <span>Slide 8</span>
            </div>
          </div> */}
        </Slide>
      
    )
};

export default Slideshow;

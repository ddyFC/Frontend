import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from 'Images/돌덩이로고.png';
import img2 from 'Images/img2.jpg';
import img3 from 'Images/img3.jpg';
import 'Components/CSS/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

  }
  render() {
   
    return(
      <div>
        <AliceCarousel autoPlay autoPlayInterval="3000"
        renderPrevButton={() => {
            <p className="p-4 absolute left-0 top-0">Previous Item</p>
          }}
          renderNextButton={() => {
            <p className="p-4 absolute right-0 top-0">Next Item</p>
          }}
        >
            <img src={img1} className="sliderimg"/>
            <img src={img2} className="sliderimg"/>
            <img src={img3} className="sliderimg"/>
        </AliceCarousel>
      </div>
    )
  }
}

export default Main;

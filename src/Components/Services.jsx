import React from 'react'
import {Carousel} from "react-responsive-carousel";
import img1 from "../Assets/p3.jpg";
import img2 from "../Assets/p4.jpg";
const Services = () => {
  return <div className='services'>Services
  <Carousel>
  <div>
  <img src={img1} alt="Item1"/>
  <p>Full Stack</p>
  </div>
  <div>
  <img src={img2} alt="Item2"/>
  <p>Autocad Services also </p>
  </div>
  </Carousel>
  </div>

}

export default Services
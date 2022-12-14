import React from "react";
import vg from "../Assets/p2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TECHVERSE</h1>
          <p>Providing solutions to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are providing solutions to tech problems you face every day. We
            are leading tech companies solve their complex queries Our aim is to
            increase problem solving ability in childrens.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
      <div>
        <h1>Who We Are</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          tenetur, doloremque a asperiores consectetur nesciunt quos, accusamus
          quasi iure quis necessitatibus eos ad quibusdam sequi, provident
          nostrum modi molestiae facilis.
        </p>
        </div>
      </div>
      <div className="home4" id="brands">
      <div><h1>BRANDS</h1>
      <article>
      <div style={{animationDelay:"0.3s"}}>
      <AiFillGoogleCircle/>
      <p>Google</p>
      </div>
      <div style={{animationDelay:"0.5s"}}>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
      </div>
      <div style={{animationDelay:"0.7s"}}>
      <AiFillInstagram/>
      <p>Instagram</p>
      </div>
      <div style={{animationDelay:"1s"}}>
      <AiFillYoutube/>
      <p>Youtube</p>
      </div>
      </article>
      </div>
      </div>
    </>
  );
};

export default Home;

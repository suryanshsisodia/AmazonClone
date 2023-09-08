import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.postimg.cc/GdLSG381/Prime-PC-Hero-3000x1200-CB637515821.jpg"
          alt="Adv."
        ></img>
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={1682}
            image="https://i.postimg.cc/RC3KnfpN/download.png"
            rating={5}
          />
          <Product
            id="2"
            title="The Hard Thing about Hard Thing: Building a Business When There are No Easy Answers"
            price={458}
            image="https://images-na.ssl-images-amazon.com/images/I/51NCFyHpkxL._SX340_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
            price={3999}
            image="https://m.media-amazon.com/images/I/4145bjiVFBL.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Apple iPhone 13 (256GB) - Blue"
            price={84900}
            image="https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Samsung Galaxy M53 5G (Mystique Green, 6GB, 128GB Storage) | Travel Adapter to be Purchased Separately"
            price={28999}
            image="https://m.media-amazon.com/images/I/71MaDLgHnxL._SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={135049}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

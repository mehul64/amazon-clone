import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>

        <div className="home_row">
          <Product
            id="123"
            title="The Lean Startup: How Constant Innovation Creates Radically Succesful Businesses"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="12344"
            title="Kenwood kMix Stand Mixer for Baking ,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk ,5 Litre Glass Bowl"
            price={17.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="1234"
            title="Samsung LCHW334HEF834BHJER 49' Curved LED Gaming Monitor"
            price={69.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="12345"
            title="Amazon Echo (3rd Generation) | Smart speaker with alexa,Charcoal Fabric"
            price={89.0}
            rating={4}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="123456"
            title="ASUS RT-AX92U AX6100 Wi-Fi 6 Tri-Band Whole Home Mesh Wi-Fi System"
            price={335.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="1234567"
            title="Echo Plus (2nd Gen) – Premium sound with a built-in smart home hub - Charcoal fabric"
            rating={4}
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

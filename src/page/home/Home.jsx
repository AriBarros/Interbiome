import React, { useState, useEffect } from "react";
import Topbar from "../../components/Topbar/Topbar";
import { getWindowSize } from "../../utils/getWindowSize";
import Carousel from "../../components/Carousel/Carousel";
import { Products } from "../../constant/Products";
import { Misc } from "../../constant/Misc";
import Footer from "../../components/Footer/Footer";

import "./Home.css";
import BannerMobileImg from "../../assets/img/img_banner_mobile.png";
import BannerDesktopImg from "../../assets/img/img_banner_desktop.png";
import HomeProductsDesktopImg from "../../assets/img/img_banner_desktop_prod.png";
import HomeProductsImg from "../../assets/img/img_banner_mobile_prod.png";
import HomeContentMobileIc from "../../assets/img/img_menu_mobile_ppp.png";
import HomeContentDesktopIc from "../../assets/img/img_menu_desktop_ppp.png";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

function Home() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Topbar />
      {windowSize.innerWidth > 576 && <NavbarComponent />}
      <img
        className="banner"
        alt=""
        src={windowSize.innerWidth > 576 ? BannerDesktopImg : BannerMobileImg}
      />
      <div className="home-content">
        <div className="text-container">
          <h1>we’re here to help</h1>
          <p>
            When it comes to caring for our most intimate areas, we’ve lost our
            connection. Embarrassed, unwilling, or unable to communicate with
            others, we’re needlessly neglecting the parts of our bodies that
            need it most. We’re here to help. Providing you with the expertise,
            knowledge and products you need to feel confident in your personal
            care.
          </p>
        </div>
        <img
          className="home-icons"
          alt=""
          src={
            windowSize.innerWidth > 576
              ? HomeContentDesktopIc
              : HomeContentMobileIc
          }
        />
        <div className="text-container">
          <h1>
            whatever your age. whatever your lifestyle. whatever your interests.
          </h1>
          <p>
            Co-created with gynaecologists, our revolutionary products have been
            expertly developed to support your intimate microbiome and pH
            balance, and strengthen overall natural health. As the experts in
            intimate hygiene, we want to bring discussion about intimate
            wellness care out of the dark and demystify the taboos that surround
            it.
          </p>
        </div>
        <div className="text-container">
          <h1>our products</h1>
        </div>
        <Carousel items={Products} />
      </div>
      <img
        className="home-products"
        alt=""
        src={
          windowSize.innerWidth > 576 ? HomeProductsDesktopImg : HomeProductsImg
        }
      />
      <div className="home-content">
        <div className="text-container">
          <h1>keep up to date with our discoveries</h1>
        </div>

        <Carousel items={Misc} />

        <div className="d-flex justify-content-center">
          <button type="button" className="menu-button">
            see more
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

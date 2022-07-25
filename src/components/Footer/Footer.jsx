import React, { useEffect, useState } from "react";

import "./Footer.css";
import IcInstagram from "../../assets/svg/ic_instagram.svg";
import LogoUlabsImg from "../../assets/img/img_logo_ulabs.png";
import { getWindowSize } from "../../utils/getWindowSize";

const footerText = [
  { title: "contact us" },
  { title: "|" },
  { title: "faq" },
  { title: "|" },
  { title: "site map" },
  { title: "|" },
  { title: "privacy policy" },
  { title: "|" },
  { title: "cookies policy" },
  { title: "|" },
  { title: "legal notice" },
];

function Footer() {
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

  const desktopLogos = (
    <>
      <div className="footer-logos__spacing">
        <img
          alt=""
          src={LogoUlabsImg}
          style={{ width: "116px", height: "29px" }}
        />
      </div>
      <div className="footer-logos__spacing">
        <img
          alt=""
          src={IcInstagram}
          style={{ width: "36px", height: "36px" }}
        />
      </div>
    </>
  );

  const mobileLogos = (
    <>
      <div className="footer-logos__spacing">
        <img
          alt=""
          src={IcInstagram}
          style={{ width: "36px", height: "36px" }}
        />
      </div>
      <div className="footer-logos__spacing">
        <img
          alt=""
          src={LogoUlabsImg}
          style={{ width: "116px", height: "29px" }}
        />
      </div>
    </>
  );

  return (
    <div className="footer-container">
      <div className="footer-text ">
        {footerText?.map((footerText, index) => {
          return (
            <span key={index} className="footer-text__spacing">
              {windowSize.innerWidth < 576 && footerText?.title === "|"
                ? "___"
                : footerText.title}
            </span>
          );
        })}
      </div>
      <div className="footer-logos">
        {windowSize.innerWidth < 576 ? mobileLogos : desktopLogos}
      </div>
    </div>
  );
}

export default Footer;

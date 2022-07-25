import React, { useState } from "react";

import "./Topbar.css";
import { ReactComponent as MenuIC } from "../../assets/svg/ic_menu.svg";
import { ReactComponent as CloseIC } from "../../assets/svg/ic_x.svg";
import { ReactComponent as SearchIc } from "../../assets/svg/ic_search.svg";
import LogoImg from "../../assets/img/img_logo.png";

function Topbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={sidebar ? "topbar-container fixed" : "topbar-container"}>
      <div className="topbar-content">
        <div className="hidden-div" />
        {sidebar ? (
          <CloseIC className="menu-icon" onClick={showSidebar} />
        ) : (
          <MenuIC className="menu-icon" onClick={showSidebar} />
        )}
        <img alt="" src={LogoImg} />
        <SearchIc />

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li>
              <div className="items-sidebar">
                <span>brand philosophy</span>
              </div>
              <div className="items-sidebar">
                <span>product technology</span>
              </div>
              <div className="items-sidebar">
                <span>all products</span>
              </div>
              <div className="items-sidebar">
                <span>intibiome wellness</span>
              </div>
              <div className="items-sidebar">
                <span>intibiome active</span>
              </div>
              <div className="items-sidebar">
                <span>intibiome agecare</span>
              </div>
              <div className="items-sidebar">
                <span>article 1</span>
              </div>
              <div className="items-sidebar">
                <span>article 2</span>
              </div>
              <div className="items-sidebar">
                <span>article 3</span>
              </div>
              <div className="items-sidebar">
                <span>faq</span>
              </div>
              <div className="items-sidebar">
                <span>contact us</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Topbar;

import "./Topbar.css";
import { ReactComponent as MenuIC } from "../../assets/svg/ic_menu.svg";
import { ReactComponent as SearchIc } from "../../assets/svg/ic_search.svg";
import LogoImg from "../../assets/img/img_logo.png";

function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <MenuIC className="menu-icon" />
        <img src={LogoImg} />
        <SearchIc />
      </div>
    </div>
  );
}

export default Topbar;

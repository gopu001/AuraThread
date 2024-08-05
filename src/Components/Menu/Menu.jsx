import React, { useState } from "react";
import "./Menu.scss";
import logo from "../../assets/logo/logo350.png";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import searchImg from "../../assets/Navbar/navbarIcons/loupe.png";
import bagImg from "../../assets/Navbar/navbarIcons/shopping-bag.png";
import wishlistImg from "../../assets/Navbar/navbarIcons/heart.png";
import accountImg from '../../assets/Navbar/navbarIcons/user.png'
import Scrolling from '../Scrolling/Scrolling'

const menuData = [
  {
    id: 1,
    name: "HOME",
    url: "/home",
  },
  {
    id: 2,
    name: "FABRIC",
    url: "/fabric",
  },
  {
    id: 3,
    name: "LOYALTY",
    url: "/loyalty",
  },
  {
    id: 4,
    name: "PACKAGING",
    url: "/packaging",
  },
  {
    id: 5,
    name: "OUR MISSION",
    url: "/ourMission",
  },
  {
    id: 6,
    name: "CODE OF CONDUCT",
    url: "/codeOfConduct",
  },
];

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menuMainContainer">
      <Scrolling/>
      <div className="menuChildContainer">
        <div className="menuUpperPart">
          <div className="menuUpperLeft"></div>
          <div className="menuUpperMiddle">
            <img src={logo} alt="" />
          </div>
          <div className="menuUpperRight">
            <div className="menuUpperRightAllSections">
              <div className="menuRightEachSection" id="mobileView">
                <img src={searchImg} alt="" />
                <p>SEARCH</p>
              </div>
              <div className="menuRightEachSection" id="mobileView">
                <img src={accountImg} alt="" />
                <p>ACCOUNT</p>
              </div>
              <div className="menuRightEachSection">
                <img src={wishlistImg} alt="" />
              </div>
              <div className="menuRightEachSection">
                <img src={bagImg} alt="" />
                <p id="count">(0)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menuLowerPart">
          <div className="hamBurger" onClick={toggleMenu}>
            {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
          <div className={`menuLowerPartList ${isMenuOpen ? 'open' : ''}`}>
            {menuData.map(({ id, name, url }) => (
              <div
                key={id}
                className="menuLowerPartEachList"
              >
                <a href={url}>{name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Menu;

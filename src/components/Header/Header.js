import { useState } from "react";

import { Navbar } from "../Navbar";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

import Logo from "../../assets/images/logo.png";
import IconSearch from "../../assets/images/Search.svg";

export const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  return (
    <nav className="header">
      <div className="container">
        <div className="header_navigation">
          <div className="header_navigation_logo">
            <a href="/">
              <img src={Logo} alt="SNEAK PORTFOLIO" />
            </a>
          </div>
          <div className="header_navigation_titles">
            <Navbar visible={visible} handleClick={handleClick}/>
            <a className="search" href="/">
              <img src={IconSearch} alt="Search" />
            </a>
          </div>
          <BurgerMenu visible={visible} handleClick={handleClick} />
        </div>
      </div>
    </nav>
  );
};

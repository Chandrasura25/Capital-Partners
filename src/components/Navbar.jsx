import navbarStyle from "../styles/Navbar.module.css";
import { useState } from "react";
import logo from '../assets/logo1.jpg'
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <>
      <header
        className={`${navbarStyle.header} ${
          isActive ? navbarStyle.active : ""
        }`}
      >
        <a href="#" className={navbarStyle.logo}>
          <img src={logo}/>
        </a>
        <div className={navbarStyle.menuToggle} onClick={toggle}></div>
        <nav>
          <ul>
            <li>
              <a href="#"> About us</a>
            </li>
            <li>
              <a href="#pillars">Investment Sectors</a>
            </li>
            <li>
              <a href="#">Investment Portal ▼</a>
              <ul>
                <li>
                  <a href="#">Product 01</a>
                </li>
                <li>
                  <a href="#">Product 02</a>
                </li>
                <li>
                  <a href="#">
                    Product 03
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Why you should invest with us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Success Stories</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

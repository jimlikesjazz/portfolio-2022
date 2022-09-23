import { useState } from "react";
import { Link } from "react-router-dom";
import GitHub from "../../images/GH.png";
import LinkedIn from "../../images/LI.png";

export default function Header() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div id="header-outer">
        <div id="header-inner" className="flex">
          <nav id="menu">
            <div>
              <Link id="logo" className="playfair-font" to="/">
                // jw
              </Link>
            </div>
            <a href="#" className="toggle-button" onClick={handleToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>
            <div id="nav-bar" className={!isActive ? "active" : null}>
              <ul id="nav-ul" className="flex">
                <li>
                  <Link to="/bio" onClick={handleToggle}>
                    Bio
                  </Link>
                </li>
                <li>
                  <Link to="/skills" onClick={handleToggle}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" onClick={handleToggle}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleToggle}>
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="www.github.com">
                    <img src={GitHub} class="social-logos" />
                  </a>
                </li>
                <li>
                  <a href="www.linkedin.com">
                    <img src={LinkedIn} class="social-logos" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

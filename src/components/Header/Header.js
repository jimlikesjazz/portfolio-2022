import { useState } from "react";

export default function Header() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div id="header-inner" className="flex">
        <nav id="menu">
          <div id="logo" className="playfair-font">
            // JW //
          </div>
          <a href="#" className="toggle-button" onClick={handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div id="nav-bar" className={!isActive ? "active" : null}>
            <ul id="nav-ul" className="flex">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

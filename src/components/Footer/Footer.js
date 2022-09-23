import "./Footer.css";
import LinkedIn from "../../images/LI.png";
import Git from "../../images/GH.png";

export default function Footer() {
  return (
    <div id="footer">
      <a href="https://github.com/jimlikesjazz">
        <img src={Git} class="social-logos-footer" />
      </a>
      <a href="https://www.linkedin.com/in/jim-wynn-29281b67/">
        <img src={LinkedIn} class="social-logos-footer" />
      </a>
    </div>
  );
}

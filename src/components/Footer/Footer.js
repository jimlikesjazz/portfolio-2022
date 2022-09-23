import "./Footer.css";
import LinkedIn from "../../images/LI.png";
import Git from "../../images/GH.png";

export default function Footer() {
  return (
    <div id="footer">
      <img src={LinkedIn} className="social-logos-footer"></img>
      <img src={Git} className="social-logos-footer"></img>
    </div>
  );
}

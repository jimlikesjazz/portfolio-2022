import "./Portfolio.css";
import Card from "../Card/Card.js";
import ylfb from "../../images/ylfb.png";
import JWSO from "../../images/JWSO.png";
import JW from "../../images/Jim Wynn Music.png";
import Piano from "../../images/Piano.png";
import Bakery from "../../images/Gateaux.png";

export default function Portfolio() {
  return (
    <body>
      <div id="body-container-portfolio" className="flex">
        <h1 id="portfolio-header">Portfolio</h1>

        <p className="portfolio-text">Web Development</p>
        <div className="card-container">
          <a href="https://your-local-foodbank.netlify.app/">
            <Card
              imagethumb={ylfb}
              project="Your Local Foodbank"
              description="Four-week project to help foodbanks to better communicate with their communities"
            ></Card>
          </a>
        </div>
        <p className="portfolio-text">Wordpress Development</p>
        <div className="card-container">
          <a href="https://www.jimwynn.co.uk">
            <Card
              project="Jim Wynn Music"
              description="Created using Wordpress"
              imagethumb={JW}
            ></Card>
          </a>
          <a href="https://www.jimwynnswing.co.uk">
            <Card
              project="Jim Wynn Swing Orchestra"
              description="Created using Wordpress"
              imagethumb={JWSO}
            ></Card>
          </a>
        </div>
        <p className="portfolio-text">UI/UX Design</p>
        <div className="card-container">
          <Card
            project="Piano Bootcamp"
            description="Website 2 Description"
            imagethumb={Piano}
          ></Card>
          <Card
            project="Jim Wynn Swing Orchestra"
            description="Website 2 Description"
            imagethumb={Bakery}
          ></Card>
        </div>
      </div>
    </body>
  );
}

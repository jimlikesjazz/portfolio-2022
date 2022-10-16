import "./Portfolio.css";
import Card from "../Card/Card.js";
import ylfb from "../../images/ylfb.jpg";
import JWSO from "../../images/JWSO.png";
import JW from "../../images/Jim Wynn Music.jpg";
import Piano from "../../images/Piano.jpg";
import Bakery from "../../images/Gateaux.jpg";
import JWPortfolio from "../../images/Jim-Wynn-Portfolio.jpg";
import JWSync from "../../images/Jim-Wynn-Sync.jpeg";
import JWSOlogo from "../../images/JWSO-Logo-with-background-colour.png";

export default function Portfolio() {
  return (
    <body>
      <div id="body-container-portfolio" className="flex">
        <h1 id="portfolio-header">Portfolio</h1>

        <p className="portfolio-text">Web Development</p>
        <div className="card-container">
          <a href="https://jimwynn.netlify.app/">
            <Card
              project="Portfolio Website"
              description="Built from scratch with React, HTML and CSS"
              imagethumb={JWPortfolio}
            ></Card>
          </a>
          <a href="https://your-local-foodbank.netlify.app/">
            <Card
              project="Your Local foodbank"
              description="Collaborative project created with React"
              imagethumb={ylfb}
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
            description="Design for a piano bootcamp"
            imagethumb={Piano}
          ></Card>
          <Card
            project="C'est Dû Gateaux"
            description="Design for a French bakery"
            imagethumb={Bakery}
          ></Card>
        </div>
        <p className="portfolio-text">Logo Design</p>
        <div className="card-container">
          <Card
            project="Jim Wynn Syncopators"
            description="Logo design for a 1920s style jazz band"
            imagethumb={JWSync}
          ></Card>
          <Card
            project="Jim Wynn Swing Orchestra"
            description="Logo design for 1940s style swing band"
            imagethumb={JWSOlogo}
          ></Card>
        </div>
      </div>
    </body>
  );
}

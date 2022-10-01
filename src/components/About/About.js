import "./About.css";
import jimpic from "../../images/jim-pic.png";
import Button from "../Button/Button.js";
import CV from "../../files/Jim-Wynn-CV.pdf";

export default function About() {
  return (
    <body>
      <div id="body-container-about" className="flex">
        <div id="jim-pic">
          <img className="about-pic" src={jimpic}></img>
        </div>
        <div id="about-text">
          <h1 id="about-header">Bio</h1>
          <p>
            I grew up in the beautiful county of Shropshire before moving to
            Birmingham to study jazz at the Royal Birmingham Conservatoire.
            After working as jazz pianist, teacher and composer for over 15
            years, I took the decision that the time was right for me to
            transition to a new career in tech.<br></br>
            <br></br> I completed{" "}
            <a className="no-text-dec" href="https://www.schoolofcode.co.uk/">
              School Of Code’s
            </a>{" "}
            intensive 16-week bootcamp in August 2022 and I’m now looking for a
            job in tech. I have a particular interest in front-end development
            and UI/UX design.
            <br></br>
            <br></br>
            In my spare time I enjoy composing music for TV and film as well as
            learning French, cooking, cycling and photography.
            <br></br>
            <br></br>
            For more information about my experience, please open my resumé:
          </p>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <Button label="Resumé"></Button>
          </a>
        </div>
      </div>
    </body>
  );
}

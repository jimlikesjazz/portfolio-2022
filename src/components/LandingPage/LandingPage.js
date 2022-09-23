import "./LandingPage.css";
import lines from "../../images/lines3.png";

export default function LandingPage() {
  return (
    <body>
      <div id="body-container" className="flex">
        <div id="greeting">
          <h1>
            Hello, my name is<br></br>
            <span id="jimwynn">Jim Wynn.</span>
            <br></br> I'm a junior web developer with a passion for front-end
            development and UI/UX design.
          </h1>
        </div>
        <div className="lines">
          <img className="lines" src={lines}></img>
        </div>
        <div></div>
      </div>
    </body>
  );
}

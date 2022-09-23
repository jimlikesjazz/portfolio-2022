import "./Contact.css";
import Button from "../Button/Button.js";

export default function Contact() {
  return (
    <body>
      <div id="body-container-contact" className="flex">
        <h1 id="contact-header">Contact</h1>
        <p className="contact-text">To get in touch, you can find me here:</p>
        <a href="mailto:jim@jimwynn.co.uk">
          <Button label="Email"></Button>
        </a>
        <a href="https://www.linkedin.com/in/jim-wynn-29281b67/">
          <Button label="Linkedin"></Button>
        </a>
        <a href="https://twitter.com/jimlikescoding">
          <Button label="Twitter"></Button>
        </a>
        <a href="https://github.com/jimlikesjazz">
          <Button label="Github"></Button>
        </a>
      </div>
    </body>
  );
}

import SkillsListItem from "../SkillsListItem/SkillsListItem";
import "../Skills/Skills.css";

let skills = [
  { section: "Front-end:", skills: "HTML5, CSS3, JavaScript" },
  { section: "Back-end:", skills: "Node, Express, PostgreSQL, MongoDB" },
  { section: "Libraries:", skills: "React, Formik" },
  { section: "Authentication:", skills: "Auth0" },
  { section: "Testing:", skills: "Jest, Supertest, Cypress" },
  { section: "Design:", skills: "Figma, Miro, Photoshop, Affinity Photo" },
  { section: "Services:", skills: "Heroku, Netlify" },
  { section: "Tools:", skills: "VSCode, GitHub, Trello, Notion" },
  { section: "CMS:", skills: "Wordpress" },
];

export default function Skills() {
  return (
    <body>
      <div id="body-container-skills">
        <div id="skills-title-and-desc-container">
          <h1 id="skills-header">Skills</h1>

          <p id="skills-text">
            I have experience of using these technologies & tools. <br></br>
            <br></br> I have also had exposure to the concepts involved with
            UI/UX design, agile methodologies and test driven development.
            <br></br>
            <br></br>I have experience of solo & pair programming as well as
            collaborating in larger teams.
          </p>
        </div>

        <div id="skills-list-container">
          {skills.map((skill) => (
            <SkillsListItem skill={skill}></SkillsListItem>
          ))}
        </div>
      </div>
    </body>
  );
}

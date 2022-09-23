import "../SkillsListItem/SkillsListItem.css";

export default function SkillsListItem(props) {
  {
    console.log("This line" + props);
  }
  return (
    <div className="skill-list-item">
      <p>
        <span id="bullet-plus">✓ </span>
        <span id="bold">{props.skill.section}</span> {props.skill.skills}
      </p>
    </div>
  );
}

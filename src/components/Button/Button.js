import "../Button/Button.css";

export default function Button(props) {
  function downloadCV() {}

  return (
    <button className="basic-button" type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

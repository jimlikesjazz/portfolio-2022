import "../Card/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image-div-card">
        <img src={props.imagethumb} className="site-thumb" />
      </div>
      <div class="card-text-container">
        <h4 className="project-name">{props.project}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

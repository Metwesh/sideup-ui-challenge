import "./Card.css";

export default function Card(props) {
  return (
    <div className={`card ${props?.class}`}>
      {props?.children ? props.children : null}
    </div>
  );
}

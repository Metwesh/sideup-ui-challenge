import settingsIcon from "../images/Settings.svg";
import taskSheetMed from "../images/Task-Sheet-Blue-Medium.svg";
import taskSheetSm from "../images/Task-Sheet-Blue-Small.svg";
import taskSheetBlue from "../images/Task-Sheet-Blue.svg";
import "./SmallCard.css";

export default function SmallCard(props) {
  return (
    <div className={`${props.gridAreaName} card mini-card`}>
      <div className="flex ai-c mini-card-title-container">
        {props?.mobile ? (
          <img src={settingsIcon} alt="Truck logo" />
        ) : window.matchMedia("(max-width: 1200px)").matches ||
          window.matchMedia("(max-height: 700px)").matches ? (
          <img src={taskSheetMed} alt="Task Sheet Icon" />
        ) : window.matchMedia("(max-width: 992px)").matches ? (
          <img src={taskSheetSm} alt="Task Sheet Icon" />
        ) : (
          <img src={taskSheetBlue} alt="Task Sheet Icon" />
        )}
        <h3 className="card-title mini-card-title">{props.title}</h3>
      </div>
      {props?.children ? props.children : null}
    </div>
  );
}

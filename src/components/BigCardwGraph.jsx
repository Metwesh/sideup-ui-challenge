import greenBars from "../images/Green-Bars.svg";
import redBars from "../images/Red-Bars.svg";
import taskSheetMed from "../images/Task-Sheet-Blue-Medium.svg";
import taskSheetSm from "../images/Task-Sheet-Blue-Small.svg";
import taskSheetXS from "../images/Task-Sheet-Blue-XSmall.svg";
import taskSheetBlue from "../images/Task-Sheet-Blue.svg";
import formatter from "../utilities/numberFormatter";
import "./BigCardwGraph.css";
import LargeGraph from "./LargeGraph";

export default function BigCardwGraph(props) {
  // If cashDelta is negative, will change from green to red.
  const cashDelta = 15;
  const deliveryFeesDelta = -10;
  return (
    <div className="big-card card">
      <div className="flex title-money-wrapper">
        <div className="title-logo-container1 flex ai-c">
          {/* Change icon conditionally with screen size */}
          {window.matchMedia("(max-width: 1200px)").matches ||
          window.matchMedia("(max-height: 700px)").matches ? (
            <img src={taskSheetMed} alt="Task Sheet Icon" />
          ) : window.matchMedia("(max-width: 992px)").matches ? (
            <img src={taskSheetSm} alt="Task Sheet Icon" />
          ) : (
            <img src={taskSheetBlue} alt="Task Sheet Icon" />
          )}
          <h3 className="card-title">Net Sales</h3>
        </div>
        <div className="money-value-container">
          <h3 className="money-blue flex jc-c ai-c">
            {`${formatter(props.money)} LE`}
          </h3>
        </div>
      </div>
      <div className="mini-card1">
        <div className="title-logo-container flex ai-c">
          {window.matchMedia("(max-width: 1200px)").matches ||
          window.matchMedia("(max-height: 700px)").matches ? (
            <img src={taskSheetSm} alt="Task Sheet Icon" />
          ) : (
            <img src={taskSheetXS} alt="Task Sheet Icon" />
          )}
          <h3 className="mini-card-title">Total Cash</h3>
        </div>
        <h3 className="mini-card-money">{`${formatter(props.money)} LE`}</h3>
        <div className="sm-graph flex jc-c ai-c">
          {/* If change is positive will display text in green & an upward green bar */}
          <h3
            className={`percentage-delta ${
              cashDelta > 0 ? "green-text" : "red-text"
            }`}>{`${Math.abs(cashDelta)}%`}</h3>
          <img
            className="mini-bar-graph"
            src={cashDelta > 0 ? greenBars : redBars}
            alt="Task Sheet Icon"
          />
          <h3 className="mini-card-subtle-text">Compared to Last Week</h3>
        </div>
      </div>
      <div className="mini-card2">
        <div className="title-logo-container flex ai-c">
          <img src={taskSheetSm} alt="Task Sheet Icon" />
          <h3 className="mini-card-title">Delivery Fees</h3>
        </div>
        <h3 className="mini-card-money">{`${formatter(props.money)} LE`}</h3>
        <div className="sm-graph flex jc-c ai-c">
          {/* If change is negative will display text in red & a downward red bar */}
          <h3
            className={`percentage-delta ${
              deliveryFeesDelta > 0 ? "green-text" : "red-text"
            }`}>{`${Math.abs(deliveryFeesDelta)}%`}</h3>
          <img
            className="mini-bar-graph"
            src={deliveryFeesDelta > 0 ? greenBars : redBars}
            alt="Task Sheet Icon"
          />
          <h3 className="mini-card-subtle-text">Compared to Last Week</h3>
        </div>
      </div>
      <LargeGraph />
    </div>
  );
}

import settingsIcon from "../images/Settings.svg";
import taskSheetMed from "../images/Task-Sheet-Blue-Medium.svg";
import taskSheetSm from "../images/Task-Sheet-Blue-Small.svg";
import taskSheetBlue from "../images/Task-Sheet-Blue.svg";
import "./LongCard.css";
export default function LongCard(props) {
  // Seed data for table
  const tableData = [
    { color: "green", text: "Successful Attempts", number: 25 },
    { color: "orange", text: "From First Attempt", number: 10 },
    { color: "orange", text: "From Second Attempt", number: 3 },
    { color: "orange", text: "From Third Attempt", number: 12 },
    { color: "red", text: "Returned", number: 4 },
    { color: "gray", text: "Canceled", number: 1 },
  ];
  return (
    <div className={`long-card card ${props.mobile ? "mobile" : ""}`}>
      <div
        className={`header-container flex jc-sb ai-c ${
          props?.mobile ? "mobile" : ""
        }`}>
        <div className="title-logo-container2 flex jc-c ai-c">
          {props?.mobile ? (
            <img src={settingsIcon} alt="Gear" />
          ) : window.matchMedia("(max-width: 1200px)").matches ||
            window.matchMedia("(max-height: 700px)").matches ? (
            <img src={taskSheetMed} alt="Task Sheet Icon" />
          ) : window.matchMedia("(max-width: 992px)").matches ? (
            <img src={taskSheetSm} alt="Task Sheet Icon" />
          ) : (
            <img src={taskSheetBlue} alt="Task Sheet Icon" />
          )}

          <h3 className="card-title">Attempts</h3>
        </div>
        <div
          className={`total-attempts-container flex jc-c ai-c ${
            props?.mobile ? "mobile" : ""
          }`}>
          <h3 className="total-attempts-value">30</h3>
        </div>
      </div>
      <div className="attempts-table-container mobile">
        <table className="attempts-table">
          <tbody>
            {tableData.map(({ color, text, number }, index) => (
              <tr key={color + index}>
                <td
                  className={`table-box ${
                    color === "green"
                      ? "green-box"
                      : color === "orange"
                      ? "orange-box"
                      : color === "red"
                      ? "red-box"
                      : "gray-box"
                  }`}
                />
                <td
                  className={`table-text ${
                    index !== tableData.length - 1 && "blue-bottom-border "
                  }
                      ${props?.mobile && "mobile"}
                  } `}>
                  {text}
                </td>
                <td
                  className={`table-number ${
                    index !== tableData.length - 1 && "blue-bottom-border "
                  }
                      ${props?.mobile && "mobile"}
                  } `}>
                  {number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

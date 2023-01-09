import { RadialBar, RadialBarChart } from "recharts";
import downwardArrow from "../images/Downward-Arrow-Red.svg";
import upwardArrow from "../images/Upward-Arrow-Green.svg";
import "./RadialChart.css";
export default function RadialChart() {
  // If data shows an increase, chart will be green, otherwise it will be red
  const customers = 10;
  const increase = true;
  const data = [
    {
      ci: 75,
      fill: increase ? "#17a21a" : "#ed3237",
    },
    {
      ci: 100,
      visibility: "hidden",
    },
  ];
  return (
    <>
      <div id="hide-for-desktop-2">
        <RadialBarChart
          width={95}
          height={95}
          innerRadius="100%"
          outerRadius="70%"
          data={data}
          startAngle={210}
          endAngle={-30}>
          <RadialBar minAngle={15} background clockWise={true} dataKey="ci" />
        </RadialBarChart>
        <div className="radial-chart-legend flex flex-column">
          <h3
            className={`small-card-number medium-padding-right ${
              increase ? "green" : "red"
            }`}>
            {customers}
          </h3>
          <div className="flex jc-c ai-c">
            <h3 className="small-card-percentage ">{data[0].ci}%</h3>
            <img
              className={`small-card-arrow ${increase ? "" : "flip-arrow"}`}
              src={increase ? upwardArrow : downwardArrow}
              alt={increase ? "Upward Arrow" : "Downward Arrow"}
            />
          </div>
          <h3 className="small-card-subtle-text">Compared to Yesterday</h3>
        </div>
      </div>
      <div className="flex flex-column" id="hide-for-desktop-1">
        <div className="flex ai-c">
          <div className="total-attempts-container flex jc-c ai-c">
            <h3 className="total-attempts-value">30</h3>
          </div>
          <div className="flex flex-column jc-c small-margin-left">
            <div className="flex">
              <h3 className="thin-font-percentage">{data[0].ci}%</h3>
              <img
                className={`small-card-arrow ${increase ? "" : "flip-arrow"}`}
                src={increase ? upwardArrow : downwardArrow}
                alt={increase ? "Upward Arrow" : "Downward Arrow"}
              />
            </div>
            <h3 className="small-card-subtle-text">Compared to Last Week</h3>
          </div>
        </div>
      </div>
    </>
  );
}

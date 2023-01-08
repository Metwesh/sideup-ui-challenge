import { RadialBar, RadialBarChart } from "recharts";
import downwardArrow from "../images/Downward-Arrow-Red.svg";
import upwardArrow from "../images/Upward-Arrow-Green.svg";
import formatter from "../utilities/numberFormatter";
import "./FullRadialChart.css";
export default function FullRadialChart() {
  const increase = true;
  const value = 50;
  const money = 2755890;
  const data = [
    {
      do: 100,
      fill: "#FDFEF9",
      visibility: "hidden",
    },
    {
      do: 63,
      fill: increase ? "#17A21A" : "#ed3237",
    },
  ];

  return (
    // Chart will change color based on if there's an increase or not
    <>
      <div id="hide-for-desktop-3">
        <h3 className="small-card-money small-margins">{`${formatter(
          money
        )} LE`}</h3>
        <div className="flex jc-c ai-c small-margin-top p-relative">
          <RadialBarChart
            width={83}
            height={83}
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={360}
            endAngle={0}>
            <RadialBar background clockWise={true} dataKey="do" />
          </RadialBarChart>
          <h3 className="number-value">{value}</h3>
          <div className="flex flex-column">
            <div className="flex ai-c">
              <h3 className="thin-font-percentage">{data[1].do}%</h3>
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
      {window.matchMedia("(max-width: 992px)").matches && (
        <div className="flex jc-c ai-c medium-margin-top">
          <div className="flex flex-column large-margin-top">
            <div className="flex ai-c small-margin-top">
              <div className="total-attempts-container flex jc-c ai-c">
                <h3 className="total-attempts-value">30</h3>
              </div>
              <div className="flex flex-column jc-c small-margin-left">
                <div className="flex">
                  <h3 className="thin-font-percentage">{data[0].ci}%</h3>
                  <img
                    className={`small-card-arrow ${
                      increase ? "" : "flip-arrow"
                    }`}
                    src={increase ? upwardArrow : downwardArrow}
                    alt={increase ? "Upward Arrow" : "Downward Arrow"}
                  />
                </div>
                <h3 className="small-card-subtle-text">
                  Compared to Last Week
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

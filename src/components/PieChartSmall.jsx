import { Pie, PieChart } from "recharts";
import downwardArrow from "../images/Downward-Arrow-Red.svg";
import upwardArrow from "../images/Upward-Arrow-Green.svg";
import "./PieChartSmall.css";

export default function PieChartSmall() {
  const increase = true;
  const data = [
    {
      name: "Net Sales",
      value: 70,
      fill: "#17A21A",
    },
    {
      name: "Total Cash",
      value: 30,
      fill: "#EDD329",
    },
  ];
  return (
    <>
      {window.matchMedia("(min-width: 993px)").matches && (
        <div className="flex xlarge-margin-top">
          <PieChart width={65} height={65}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={30}
            />
          </PieChart>
          {/* Custom legend */}
          {/* Could be turned into a loop if more data & space is provided */}
          <div className="flex flex-column jc-c">
            <div className="flex jc-c ai-c">
              <div className="text-with-colored-box-container flex jc-c ai-c">
                <div className="small-legend-box green"></div>
                <h3 className="pie-chart-legend-text">{data[0].name}</h3>
              </div>
              <div className="text-with-colored-box-container flex jc-c ai-c">
                <div className="small-legend-box yellow"></div>
                <h3 className="pie-chart-legend-text">{data[1].name}</h3>
              </div>
            </div>
            <div className="flex jc-c ai-c">
              <div className="small-card-number green medium-padding-right">
                {data[0].value}%
              </div>
              <div className="small-card-number yellow medium-padding-left">
                {data[1].value}%
              </div>
            </div>
          </div>
        </div>
      )}
      {window.matchMedia("(max-width: 992px)").matches && (
        <div className="flex flex-column large-margin-top">
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
      )}
    </>
  );
}

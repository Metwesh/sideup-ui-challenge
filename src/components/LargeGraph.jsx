import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import formatter from "../utilities/numberFormatter";
export default function LargeGraph() {
  // useEffect(() => {
  //   if (window.matchMedia("(min-width: 1201px)").matches) {
  //     // Desktop one
  //     graphWidth = 420;
  //     console.log("d1");
  //   } else if (
  //     window.matchMedia("(max-width: 1201px)").matches &&
  //     window.matchMedia("(min-width: 993px")
  //   ) {
  //     if (
  //       window.matchMedia("(max-width: 993px)").matches &&
  //       window.matchMedia("(min-width: 376px")
  //     ) {
  //       // Desktop three
  //       graphWidth = 100;
  //       graphHeight = "10%";
  //       console.log("d3");
  //     } else if (
  //       window.matchMedia("(max-width: 375px") &&
  //       !window.matchMedia("(max-height: 1000px)")
  //     ) {
  //       // Mobile
  //       console.log("d4");
  //       graphWidth = 420;
  //       graphHeight = "85%";
  //     } else {
  //       console.log("d2");
  //       // Desktop two
  //       graphWidth = 380;
  //       graphHeight = "95%";
  //     }
  //   }
  // }, []);
  const data = [
    {
      "Net Sales": 39000,
      "Total Cash": 42000,
      "Delivery Fees": 30000,
    },
    {
      name: "Week 1",
      "Net Sales": 19000,
      "Total Cash": 57000,
      "Delivery Fees": 37000,
    },
    {
      name: "Week 2",
      "Net Sales": 30000,
      "Total Cash": 46000,
      "Delivery Fees": 22000,
    },
    {
      name: "Week 3",
      "Net Sales": 51000,
      "Total Cash": 24000,
      "Delivery Fees": 38000,
    },
    {
      name: "Week 4",
      "Net Sales": 37000,
      "Total Cash": 49000,
      "Delivery Fees": 33000,
    },
  ];
  return (
    <div className="lg-graph">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={formatter}
            type="number"
            ticks={[10000, 20000, 30000, 40000, 50000, 60000]}
          />
          <Tooltip />
          {(window.matchMedia("(min-width: 1201px)").matches ||
            window.matchMedia("(min-height: 701px)").matches) && (
            <Legend align="right" verticalAlign="top" />
          )}

          <Line
            type="monotone"
            dot={false}
            strokeWidth={2}
            legendType="plainline"
            dataKey="Net Sales"
            stroke="#17A21A"
          />
          <Line
            type="monotone"
            dot={false}
            strokeWidth={2}
            legendType="plainline"
            dataKey="Total Cash"
            stroke="#DCC320"
          />
          <Line
            type="monotone"
            dot={false}
            strokeWidth={2}
            legendType="plainline"
            dataKey="Delivery Fees"
            stroke="#ED3237"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

import { Bar, ComposedChart, Line, XAxis, YAxis } from "recharts";

export default function MobileChart() {
  const data = [
    {
      name: "Week 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Week 2",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Week 3",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Week 4",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="mobile-chart-margin">
      <ComposedChart width={305} height={160} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="pv" barSize={20} fill="#19191b33" />
        <Line type="monotone" dot={false} dataKey="uv" stroke="#17A21A" />
        <Line type="monotone" dot={false} dataKey="pv" stroke="#edd329" />
        <Line type="monotone" dot={false} dataKey="amt" stroke="#ce0c14" />
      </ComposedChart>
    </div>
  );
}

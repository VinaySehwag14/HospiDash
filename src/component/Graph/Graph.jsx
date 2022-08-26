import "./graph.css";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "25 Aug",
    In_personVisit: 4000,
    OnlineVisit: 2400,
    AnytimeConsult: 2400,
  },
  {
    name: "26 Aug",
    In_personVisit: 3000,
    OnlineVisit: 1398,
    AnytimeConsult: 2210,
  },
  {
    name: "27 Aug",
    In_personVisit: 2000,
    OnlineVisit: 9800,
    AnytimeConsult: 2290,
  },
  {
    name: "28 Aug",
    In_personVisit: 2780,
    OnlineVisit: 3908,
    AnytimeConsult: 2000,
  },
  {
    name: "29 Aug",
    In_personVisit: 1890,
    OnlineVisit: 4800,
    AnytimeConsult: 2181,
  },
  {
    name: "30 Aug",
    In_personVisit: 2390,
    OnlineVisit: 3800,
    AnytimeConsult: 2500,
  },
  {
    name: "31 Aug",
    In_personVisit: 3490,
    pv: 4300,
    AnytimeConsult: 2100,
  },
];

const Graph = () => {
  return (
    <div className="graph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="In_personVisit"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="OnlineVisit"
            stroke="#82ca9d"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="AnytimeConsult"
            stroke="yellow"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;

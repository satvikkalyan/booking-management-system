import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";
import { getLastSixMonths, monthNames } from "../../utility/constants";
import { getRevenueRange } from "../../utility/fetchCalls";
import { useState, useEffect } from "react";

const Chart = ({ aspect, title }) => {
  // const data = [
  //   { name: "January", Total: 1200 },
  //   { name: "February", Total: 2100 },
  //   { name: "March", Total: 800 },
  //   { name: "April", Total: 1600 },
  //   { name: "May", Total: 900 },
  //   { name: "June", Total: 1700 },
  // ];
  const [data, setData] = useState([]);

  const get_graph_data = async () => {
    var graphData = [];
    const ranges = getLastSixMonths();
    for (var i = 0; i < 12; i++) {
      const monthName = monthNames[i];
      const range = ranges[monthName];
      if (range != null) {
        await getRevenueRange(range["from"], range["to"]).then((data) => {
          graphData.push({ name: monthName, Total: data });
        });
      }
    }
    return graphData;
  };
  useEffect(() => {
    get_graph_data().then((data) => {
      setData(data);
    });
    return () => {};
  }, []);

  return (
    <div>
      <div>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#003580" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#003580" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#003580"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

import React from "react";
import PropTypes from "prop-types";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { EmptyData } from "../empty-data";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomPieChart = ({ data }) => {
  if (data.every((item) => item.value === 0)) {
    return <EmptyData />;
  }
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

CustomPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    })
  ).isRequired,
};

export default CustomPieChart;

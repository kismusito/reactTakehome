import React from "react";
import PropTypes from "prop-types";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { EmptyData } from "../empty-data";

const CustomLineChart = ({ data }) => {
  if (data.every((item) => item.value === 0)) {
    return <EmptyData />;
  }
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

CustomLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    })
  ).isRequired,
};

export default CustomLineChart;

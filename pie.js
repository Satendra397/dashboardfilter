
import { Accordion } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Completed', value: 15 },
  { name: 'Draft', value: 6 },
  { name: 'Signed', value: 8 },
  { name: 'Out for Signature', value: 5 },
  { name: 'In Progress', value: 9 },
  { name: 'Decline', value: 3 },
  { name: 'Cancelled', value: 3 },
];

const COLORS = [
  '#008000',
  '#4682B4',
  '#FFD700',
  '#FFFF00',
  '#00BFFF',
  '#000000',
  '#FF0000',
];

const FormStatusChart = () => {
  return (
    <Accordion>
      <div>
        <h3 style={{ textAlign: 'left' }}>Forms by Status</h3>
        <PieChart width={330} height={365}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={60}
            startAngle={90}
            endAngle={-270}
            paddingAngle={0}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            payload={data.map((entry, index) => ({
              value: entry.name,
              type: 'circle',
              color: COLORS[index % COLORS.length],
            }))}
          />
        </PieChart>
      </div>
    </Accordion>
  );
};

export default FormStatusChart;

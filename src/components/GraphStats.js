import { Box } from '@mui/system';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';


export default class PieMaker extends PureComponent {

  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <PieChart width={100} height={100} onMouseEnter={this.onPieEnter}>
        <defs>
          {data.map((entry, index) => (
            <linearGradient id={`myGradient${index}`}>
              <stop
                offset="0%"
                stopColor={entry.start}
              />
              <stop
                offset="100%"
                stopColor={entry.end}
              />
            </linearGradient>
          ))}
        </defs>

        <Pie
          data={data}
          cx={45}
          cy={45}
          innerRadius={30}
          outerRadius={50}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#myGradient${index})`} />
          ))}
        </Pie>

      </PieChart>
    );
  }
}
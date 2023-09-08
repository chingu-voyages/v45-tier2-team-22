import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ReBarChart.scss';
import Dummydata from '../../../resources/dummyData/rechartDummyData.json';

// Creating an interface for the dataset requires restructing the dataset
// Structure has the material as the key, this would have to be refactored


const ReBarChart = (dataset: any[]) => {

  interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string | number;
  }
  
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    // Tooltip displays year and total strikes
    if (active && payload && payload.length) {
      const year = label as string;
      const totalStrikes = payload[0].payload.totalStrikes as number;
      const was = totalStrikes > 1 ? 'were' : 'was';
      const strike = totalStrikes > 1 ? 'strikes' : 'strike';
      
      return (
        <div className="tooltip">
          <p className="intro">{`There ${was} ${totalStrikes} ${strike} in ${year}.`}</p>
        </div>
      );
    }
    
    return null;
  };

  return (

  //   dataset ?  (
  //   <ResponsiveContainer width="100%" height="100%">
  //   <BarChart
  //     width={500}
  //     height={300}
  //     data={Dummydata}
  //     margin={{
  //       top: 20,
  //       right: 30,
  //       left: 5,
  //       bottom: 5,
  //     }}
  //   >
  //     <CartesianGrid strokeDasharray="3 3" />
  //     <XAxis dataKey="year" />
  //     <YAxis />
  //     <Tooltip content={<CustomTooltip />} />
  //     <Legend />
  //     <Bar dataKey="stony" stackId="a" fill="blue" barSize={4} />
  //     <Bar dataKey="martian" stackId="a" fill="green" barSize={4}/>
  //     <Bar dataKey="iron_nickel" stackId="a" fill="yellow" barSize={4}/>
  //     <Bar dataKey="iron_stone" stackId="a" fill="red" barSize={4}/>
  //     <Bar dataKey="unknown" stackId="a" fill="white" barSize={4}/>
  //   </BarChart>
  // </ResponsiveContainer>
  // ) : <p>Loading</p>
  <p>Loading</p>
  )
}

export default ReBarChart
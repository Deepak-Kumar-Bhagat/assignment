import { Stack } from '@mui/system'
import React from 'react';
import '../Styles/PieStyle.css';
import GraphStats from './GraphStats';

function PieChartPage() {
  const dat = [
    { name: 'Level 1', value: 10, start: "#0088FE", end: "#0088FE" },
    { name: 'Level 2', value: 10, start: "#038B42", end: "#038B42" },
    { name: 'Level 3', value: 10, start: "#FDB338", end: "#FDB338" },
  ];
  return (
    <Stack className="pie-container" sx={{}}>
      <Stack>
        <p className='text-bold'>Customers</p>
        <p className='text-general'>customers that buy products</p>
      </Stack>
      <Stack sx={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
        <GraphStats data={dat}/>
        <p className='middle-text'>65%</p>
        <p className='box-text'>Total New Customers</p>
      </Stack>
    </Stack>
  )
}

export default PieChartPage
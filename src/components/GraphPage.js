import { FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import '../Styles/GraphStyle.css';
import PieChartPage from './PieChartPage';

function GraphPage() {
  let user=JSON.parse(localStorage.getItem('user'));
  let arr=[{title:"Jan",height:100},{title:"Jan",height:90},{title:"Feb",height:150},{title:"Mar",height:120},{title:"Apr",height:140},{title:"May",height:70},{title:"Jun",height:60},{title:"Jul",height:80},{title:"Aug",height:100},{title:"Sep",height:120},{title:"Oct",height:70},{title:"Nov",height:140},{title:"Dec",height:120}];
  return (
    <Stack direction="row" spacing={2.5} sx={{margin:"4% 0%"}}>
      {(user?.role=="executive" || user?.role=="admin") &&
      <Stack direction="column" className="graph-container">
        <Stack direction="row" sx={{width:"100%",display:"flex",justifyContent:"space-between"}}>
          <Stack>
            <p className='text-bold'>Overview</p>
            <p className='text-general'>Monthly Earning</p>
          </Stack>
          <FormControl 
            sx={{
              width: "150px",
              backgroundColor:"#FAFBFF",
              "& .MuiInputBase-root": {
              "& fieldset": {
                borderColor: "#FAFBFF !important",
                borderRadius: "8px",
                },
                "&:hover fieldset active": {
                borderColor: "#A2A2A4",
                },
              },
            }}         
            >
            <InputLabel id="demo-simple-select-label" sx={{color:"#A2A2A4 !important"}}>Monthly</InputLabel>
            <Select
              type='select'
              label="Quaterly"
              sx={{color:"#A2A2A4"}}
              >
              <MenuItem value={"monthly"}>Monthly</MenuItem>
              <MenuItem value={"quaterly"}>Quaterly</MenuItem>
              <MenuItem value={"yearly"}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" sx={{alignItems:"end"}}>
          {
            arr?.map((ele,index)=>{
              return(
                <Stack sx={{width:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <Box className="graph-box" sx={{width:"35px",height:`${ele.height}px`,cursor:"pointer","&:hover":{backgroundColor:arr[index].title==ele.title?"#5A32EA":"#FFFFFF"}}}></Box>
                  <Stack sx={{display:"flex",justifyContent:'center',alignItems:"center",marginTop:"10px"}}>
                    <p className='text-general2'>{ele?.title}</p>
                  </Stack>
                </Stack>
              )
            })
          }
        </Stack>
      </Stack>}
      {(user?.role=="sales" || user?.role=="admin") &&
      <PieChartPage/>
      }
    </Stack>
  )
}

export default GraphPage
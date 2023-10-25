import { Stack } from '@mui/system';
import React from 'react';
import '../Styles/ProductStyle.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import Sidebar from './Sidebar'
import BackHandIcon from '@mui/icons-material/BackHand';

function Customer() {
   let user=JSON.parse(localStorage.getItem('user'));
  let array=[
    {title:"Customer1",des:"this is the first Customer1",image:image1,stock:32,price:35.34,total:66},
    {title:"Customer1",des:"this is the second Customer1",image:image2,stock:12,price:32.34,total:46},
    {title:"Customer1",des:"this is the third Customer1",image:image3,stock:34,price:55.34,total:363},
    {title:"Customer1",des:"this is the fourth Customer1",image:image4,stock:52,price:352.54,total:136},
    {title:"Customer1",des:"this is the fifth Customer1",image:image5,stock:72,price:355.34,total:16},
  ]
  return (
    <Stack direction="row" sx={{height:"100vh"}}>
        <Stack sx={{width:"18%"}}><Sidebar tab="customer"/></Stack>
        <Stack sx={{width:"82%",backgroundColor:'#F5F6F8',padding:"2% 3%",overflowY:"scroll"}}>
          <Stack direction="row" sx={{justifyContent:"space-between",alignItems:'center',padding:"1% 1%"}}>
            <Stack direction="row">
              <p className='heading-text'>{`Hello ${user?.name?.charAt(0).toUpperCase()+user?.name?.slice(1)} , `}</p>
              <BackHandIcon sx={{color:"#E2BE99"}}/>
            </Stack>
          </Stack>
          <Stack direction="row" sx={{justifyContent:"right",marginTop:"10px"}}>
          <Stack direction="row" spacing={3}>
            {(user?.role=="executive" || user?.role=="admin") &&
            <Button variant="contained" size="medium" type="submit" sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",color:"#085AC0",background: 'none',border:"1px solid #085AC0","&:hover": {backgroundColor: '#085AC0',color:"white"}}} >Details</Button>}
            {(user?.role=="sales" || user?.role=="admin") &&
            <Button variant="contained" size="medium" type="submit" sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",color:"#085AC0",background: 'none',border:"1px solid #085AC0","&:hover": {backgroundColor: '#085AC0',color:"white"}}} >Sales Details</Button>}
            {(user?.role=="admin") &&
            <Button variant="contained" size="medium" type="submit" sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",color:"#085AC0",background: 'none',border:"1px solid #085AC0","&:hover": {backgroundColor: '#085AC0',color:"white"}}} >History</Button>}
          </Stack>
          </Stack>
          
        <Stack className="product-container" sx={{marginTop:"30px"}}>
       <Stack direction="row" sx={{justifyContent:'space-between',alignItems:"center"}}>
          <p className='text-bold'>Customer Record</p>
          <Stack direction="row" spacing={2} sx={{}}>
            <TextField 
              sx={{
                width:'200px',
                backgroundColor:"#FAFBFF",
                "& .MuiInputBase-root": {
                "& fieldset": {
                  borderColor: "#FAFBFF !important",
                  borderRadius: "8px",
                  height:"50px",
                  marginTop:'4px'
                  },
                "&:hover fieldset active": {
                borderColor: "#7D7D7D",
                  },
                  },
                }}
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: <SearchRoundedIcon sx={{ color: "#7D7D7D", margin: 1}} />
              }}/>
            
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
       </Stack>

       <Stack direction="row" sx={{justifyContent:"space-between",margin:"1% 0%",borderBottom:"1px solid #BABABA",paddingBottom:"1%"}}>
        <Stack sx={{width:"60%"}}><p className='box-text' style={{color:"#BABABA"}}>Customer Name</p></Stack>
        <Stack direction="row" sx={{width:"40%",justifyContent:"space-between"}}>
            <p className='box-text' style={{color:"#BABABA",textAlign:"center",width:"35%"}}>Stock</p>
            <p className='box-text' style={{color:"#BABABA",textAlign:"center",width:"35%"}}>Price</p>
            <p className='box-text' style={{color:"#BABABA",textAlign:"center",width:"35%"}}>Total Sales</p>
        </Stack>
       </Stack>
       
       {array.map((ele)=>{
        return(
          <Stack direction="row" sx={{marginBlock:"1%"}}>
          <Stack sx={{width:"60%"}}>
            <Stack direction="row" spacing={3} sx={{alignItems:"center"}}>
              <Stack sx={{width:"55px",height:"35px",borderRadius:"5px"}}><img src={ele.image} style={{width:"100%",height:"100%",borderRadius:"5px"}}/></Stack>
              <Stack>
                <p className='text-bold1'>{ele.title}</p>
                <p className='box-text' style={{color:"#BABABA"}}>{ele.des}</p>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" sx={{width:"40%",justifyContent:"space-between",alignItems:"center"}}>
           <p className='box-text' style={{color:"#A0A0A0",width:"35%",textAlign:"center"}}>{ele.stock}</p>
            <p className='box-text' style={{color:"#1C1C1C",width:"35%",textAlign:"center"}}>{ele.price}</p>
            {(user?.role=="sales" || user?.role=="admin")?<p className='box-text' style={{color:"#A0A0A0",width:"35%",textAlign:"center"}}>{ele.total}</p>:<p className='box-text' style={{color:"#A0A0A0",width:"35%",textAlign:"center"}}></p>}
          </Stack>
        </Stack>
        )
       })}
    </Stack>

    </Stack>
    </Stack>
  )
}

export default Customer
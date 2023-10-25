import { Stack } from '@mui/system';
import React from 'react';
import '../Styles/ProductStyle.css';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';

function ProductPage() {
  let user=JSON.parse(localStorage.getItem('user'));
  let array=[
    {title:"Image1",des:"this is the first Image",image:image1,stock:32,price:35.34,total:66},
    {title:"Image2",des:"this is the second Image",image:image2,stock:12,price:32.34,total:46},
    {title:"Image3",des:"this is the third Image",image:image3,stock:34,price:55.34,total:363},
    {title:"Image4",des:"this is the fourth Image",image:image4,stock:52,price:352.54,total:136},
    {title:"Image5",des:"this is the fifth Image",image:image5,stock:72,price:355.34,total:16},
  ]
  return (
    <Stack className="product-container" sx={{}}>
       <Stack direction="row" sx={{justifyContent:'space-between',alignItems:"center"}}>
          <p className='text-bold'>Product Sell</p>
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
             {(user?.role=="sales" || user?.role=="admin") &&
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
          </FormControl>}
          </Stack>
       </Stack>

       <Stack direction="row" sx={{justifyContent:"space-between",margin:"1% 0%",borderBottom:"1px solid #BABABA",paddingBottom:"1%"}}>
        <Stack sx={{width:"60%"}}><p className='box-text' style={{color:"#BABABA"}}>Product Name</p></Stack>
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
            {(user?.role=="executive" || user?.role=="admin")?<p className='box-text' style={{color:"#A0A0A0",width:"35%",textAlign:"center"}}>{ele.stock}</p>:<p className='box-text' style={{color:"#A0A0A0",width:"35%",textAlign:"center"}}></p>}
            <p className='box-text' style={{color:"#1C1C1C",width:"35%",textAlign:"center"}}>{ele.price}</p>
            {(user?.role=="sales" || user?.role=="admin")?<p className='box-text' style={{color:"#A0A0A0",width:"35%",textAlign:"center"}}>{ele.total}</p>:<p className='box-text' style={{color:"#A0A0A0",width:"35%",textAlign:"center"}}></p>}
          </Stack>
        </Stack>
        )
       })}
    </Stack>
  )
}

export default ProductPage
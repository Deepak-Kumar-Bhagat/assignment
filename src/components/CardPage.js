import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import '../Styles/CardStyle.css'

function CardPage() {
  let user=JSON.parse(localStorage.getItem('user'));
  return (
    <Stack direction="row" sx={{display:"flex",flexWrap:"wrap",justifyContent:""}}>
        {/* firstBox */}
        {(user?.role=="executive" || user?.role=="admin") &&
        <Stack direction="row" className='cart-container' sx={{marginRight:"24px"}}>
            <Box className="logo-container" sx={{backgroundColor:'#E7FFF2'}}>
                <CurrencyExchangeIcon sx={{fontSize:"2.2rem",color:"#00A746",padding:"2%"}}/>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginRight:'2%'}}>
                <p className="box-text" style={{color:'#BABABA',paddingLeft:"7px"}}>Earning</p>
                <Stack direction="row" sx={{alignItems:'center',paddingLeft:"-30px"}}>
                   <AttachMoneyIcon sx={{fontSize:"23px"}}/>
                   <p className="middle-text" style={{color:'black',marginLeft:"-4px"}}>198k</p>
                </Stack>
                <Stack direction="row" sx={{alignItems:'center',paddingLeft:"3px"}}>
                    <ArrowUpwardIcon sx={{fontSize:"13px",color:"green"}}/>
                    <p className='box-text'><span style={{color:"green"}}>37%</span> this month</p>
                </Stack>
            </Box>
        </Stack>}

        {/* secondBox */}
        {(user?.role=="sales" || user?.role=="admin") &&
        <Stack direction="row" className='cart-container' sx={{marginRight:"24px"}}>
            <Box className="logo-container" sx={{backgroundColor:'#E7DBFF'}}>
                <ListAltIcon sx={{color:"#BF5FFE",fontSize:"2.2rem",padding:"2%"}}/>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginRight:'3%'}}>
                <p className="box-text" style={{color:'#BABABA',paddingLeft:"7px"}}>Orders</p>
                <Stack direction="row" sx={{alignItems:'center',paddingLeft:"-30px"}}>
                   <AttachMoneyIcon sx={{fontSize:"23px"}}/>
                    <p className="middle-text" style={{color:'black',marginLeft:"-4px"}}> 2.4k</p>
                </Stack>
                <Stack direction="row" sx={{alignItems:'center',paddingLeft:"3px"}}>
                    <ArrowDownwardIcon sx={{fontSize:"13px",color:"#D94071"}}/>
                    <p className='box-text'><span style={{color:"#D94071"}}>21%</span> this month</p>
                </Stack>
            </Box>
        </Stack>}

        {/* thirdBox */}
        {(user?.role=="executive" || user?.role=="admin") &&
        <Stack direction="row" className='cart-container' sx={{marginRight:"24px"}}>
            <Box className="logo-container" sx={{backgroundColor:'#CCF2FF'}}>
                <AccountBalanceIcon sx={{color:"#085AC0",fontSize:"2.2rem",padding:"2%"}}/>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginRight:'3%'}}>
                <p className="box-text" style={{color:'#BABABA',paddingLeft:"7px"}}>Balance</p>
                <Stack direction="row" sx={{alignItems:'center',paddingLeft:"-30px"}}>
                   <AttachMoneyIcon sx={{fontSize:"23px"}}/>
                   <p className="middle-text" style={{color:'black',marginLeft:"-4px"}}>2.4k</p>
                </Stack>
                <Stack direction="row" sx={{alignItems:'center',paddingLeft:"3px"}}>
                    <ArrowDownwardIcon sx={{fontSize:"13px",color:"#D94071"}}/>
                   <p className='box-text'><span style={{color:"#D94071"}}>2.4%</span> this month</p>
                </Stack>
            </Box>
        </Stack>}

        {/* fourthBox */}
        {(user?.role=="sales" || user?.role=="admin") &&
        <Stack direction="row" className='cart-container'>
            <Box className="logo-container" sx={{backgroundColor:'#FFB7DD'}}>
                <CrisisAlertIcon sx={{color:"#E53B57",fontSize:"2.2rem",padding:"2%"}}/>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginRight:'3%'}}>
                <p className="box-text" style={{color:'#BABABA',paddingLeft:"7px"}}>Total Sales</p>
                <Stack direction="row" sx={{alignItems:'center',paddingLeft:"-30px"}}>
                   <AttachMoneyIcon sx={{fontSize:"23px"}}/>
                   <Typography sx={{color:'black',fontSize:"18px",fontWeigth:'bold',marginLeft:"-4px"}}>89k</Typography>
                </Stack>
                <Stack direction="row" sx={{alignItems:'center',paddingLeft:"3px"}}>
                    <ArrowUpwardIcon sx={{fontSize:"13px",color:"green"}}/>
                    <p className='box-text'><span style={{color:"green"}}>11%</span> this week</p>
                </Stack>
            </Box>
        </Stack>}
    </Stack>
  )
}

export default CardPage
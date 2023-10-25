import { Stack } from '@mui/system'
import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import '../Styles/SidebarStyle.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GridViewIcon from '@mui/icons-material/GridView';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MediationIcon from '@mui/icons-material/Mediation';
import InboxIcon from '@mui/icons-material/Inbox';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import image5 from '../images/image5.jpeg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar({tab}) {
  const navigate=useNavigate();
  let user=JSON.parse(localStorage.getItem('user'));
  return (
    <Stack className="big-container" sx={{justifyContent:"space-between"}}>
      <Stack direction="row">
      <DiamondIcon sx={{color:"#EDECF1",fontSize:"30px",marginRight:'3px'}}/>
      <p className='title-head'>Dashboard</p>
      </Stack>

      <Stack sx={{marginTop:"-50%"}}>

        <Stack direction="row" className="selector-style" sx={{
          backgroundColor:tab=="dashboard"?"#2D2D69":"",
          borderRadius:tab=="dashboard"?"5px":"",
          "&:hover":{backgroundColor:"#2D2D69",borderRadius:"5px"}}}
          onClick={()=>{navigate('/home')}}
          >
          <Stack direction="row" spacing={1}  sx={{justifyContent:"space-between",alignItems:"center"}}>
            <GridViewIcon style={{color:"#9797B5"}}/>
            <p className='box-text' style={{color:"#9797B5"}}>Dashboard</p>
          </Stack>
          <KeyboardArrowRightIcon style={{color:"#9797B5"}}/>
        </Stack>
        
        {(user?.role=="executive" || user?.role=="admin") &&
        <Stack direction="row" className="selector-style" sx={{
          backgroundColor:tab=="product"?"#2D2D69":"",
          borderRadius:tab=="product"?"5px":"",
          "&:hover":{backgroundColor:"#2D2D69",borderRadius:"5px"}}}
          onClick={()=>{navigate('/product')}}
        >
          <Stack direction="row" spacing={1}  sx={{justifyContent:"space-between",alignItems:"center"}}>
            <ProductionQuantityLimitsIcon style={{color:"#9797B5"}}/>
            <p className='box-text' style={{color:"#9797B5"}}>Products</p>
          </Stack>
          <KeyboardArrowRightIcon style={{color:"#9797B5"}}/>
        </Stack>}

        <Stack direction="row" className="selector-style" sx={{
          backgroundColor:tab=="customer"?"#2D2D69":"",
          borderRadius:tab=="customer"?"5px":"",
          "&:hover":{backgroundColor:"#2D2D69",borderRadius:"5px"}}}
          onClick={()=>{navigate('/customer')}}
          >
          <Stack direction="row" spacing={1}  sx={{justifyContent:"space-between",alignItems:"center"}}>
            <SupportAgentIcon style={{color:"#9797B5"}}/>
            <p className='box-text' style={{color:"#9797B5"}}>Customers</p>
          </Stack>
          <KeyboardArrowRightIcon style={{color:"#9797B5"}}/>
        </Stack>
        {(user?.role=="sales" || user?.role=="admin") &&
        <Stack direction="row" className="selector-style" sx={{
          backgroundColor:tab=="income"?"#2D2D69":"",
          borderRadius:tab=="income"?"5px":"",
          "&:hover":{backgroundColor:"#2D2D69",borderRadius:"5px"}}}
          onClick={()=>{navigate('/income')}}
          >
          <Stack direction="row" spacing={1}  sx={{justifyContent:"space-between",alignItems:"center"}}>
            <InboxIcon style={{color:"#9797B5"}}/>
            <p className='box-text' style={{color:"#9797B5"}}>Income</p>
          </Stack>
          <KeyboardArrowRightIcon style={{color:"#9797B5"}}/>
        </Stack>}
        
        {(user?.role=="executive" || user?.role=="admin") &&
        <Stack direction="row" className="selector-style" sx={{
          backgroundColor:tab=="promote"?"#2D2D69":"",
          borderRadius:tab=="promote"?"5px":"",
          "&:hover":{backgroundColor:"#2D2D69",borderRadius:"5px"}}}
          onClick={()=>{navigate('/promote')}}
          >
          <Stack direction="row" spacing={1}  sx={{justifyContent:"space-between",alignItems:"center"}}>
            <MediationIcon style={{color:"#9797B5"}}/>
            <p className='box-text' style={{color:"#9797B5"}}>Promote</p>
          </Stack>
          <KeyboardArrowRightIcon style={{color:"#9797B5"}}/>
        </Stack>}

        <Stack direction="row" className="selector-style" sx={{
          backgroundColor:tab=="help"?"#2D2D69":"",
          borderRadius:tab=="help"?"5px":"",
          "&:hover":{backgroundColor:"#2D2D69",borderRadius:"5px"}}}
          onClick={()=>{navigate('/help')}}
          >
          <Stack direction="row" spacing={1}  sx={{justifyContent:"space-between",alignItems:"center"}}>
            <HelpOutlineIcon style={{color:"#9797B5"}}/>
            <p className='box-text' style={{color:"#9797B5"}}>Help</p>
          </Stack>
          <KeyboardArrowRightIcon style={{color:"#9797B5"}}/> 
        </Stack>
        
        <Stack direction="row" className="selector-style" sx={{
          "&:hover":{backgroundColor:"#2D2D69",borderRadius:"5px"}}}
          onClick={()=>{
            localStorage.setItem('user',null);
            navigate('/')}}
          >
          <Stack direction="row" spacing={1}  sx={{justifyContent:"space-between",alignItems:"center"}}>
            <LogoutIcon style={{color:"#9797B5"}}/>
            <p className='box-text' style={{color:"#9797B5"}}>Logout</p>
          </Stack>
          <KeyboardArrowRightIcon style={{color:"#9797B5"}}/> 
        </Stack>

      </Stack>

      <Stack direction="row" className="selector-style" sx={{backgroundColor:"#2D2D69",borderRadius:"5px"}}>
          <Stack direction="row" spacing={1}  sx={{justifyContent:"space-between",alignItems:"center"}}>
            <Stack sx={{width:"30px",height:"30px",borderRadius:"50%",border:"1.5px solid gray"}}><img src={image5} style={{width:"100%",height:"100%",borderRadius:"50%"}}/></Stack>
            <Stack>
              <p className='box-text' style={{color:"#EDECF1",fontSize:"0.7rem"}}>{user?.name?.charAt(0).toUpperCase()+user?.name?.slice(1)}</p>
              <p className='box-text' style={{color:"#9797B5",fontSize:"0.6rem"}}>{user?.role?.charAt(0).toUpperCase()+user?.role?.slice(1)}</p>
            </Stack>
          </Stack>
          <KeyboardArrowDownIcon style={{color:"#9797B5"}}/>
        </Stack>
    </Stack>
  )
}

export default Sidebar
import React from 'react';
import { Box, Stack } from '@mui/system';
import { Backdrop, Button, Fade, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import CardPage from './CardPage';
import GraphPage from './GraphPage';
import '../Styles/MainStyle.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BackHandIcon from '@mui/icons-material/BackHand';
import ProductPage from './ProductPage';

function Main() {
  let user=JSON.parse(localStorage.getItem('user'));
  return (
    <Stack direction="row" sx={{height:"100vh"}}>
        <Stack sx={{width:"18%"}}><Sidebar tab="dashboard"/></Stack>
        <Stack sx={{width:"82%",backgroundColor:'#F5F6F8',padding:"2% 3%",overflowY:"scroll"}}>
          <Stack direction="row" sx={{justifyContent:"space-between",alignItems:'center',padding:"1% 1%"}}>
            <Stack direction="row">
              <p className='heading-text'>{`Hello ${user?.name?.charAt(0).toUpperCase()+user?.name?.slice(1)} , `}</p>
              <BackHandIcon sx={{color:"#E2BE99"}}/>
            </Stack>
          </Stack>
            <Stack><CardPage/></Stack>
            <Stack><GraphPage/></Stack>
            <Stack><ProductPage/></Stack>
        </Stack>
    </Stack>
  )
}

export default Main
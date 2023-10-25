import { Stack } from '@mui/system';
import React from 'react'
import Sidebar from './Sidebar';
import BackHandIcon from '@mui/icons-material/BackHand';

function Help() {
  let user=JSON.parse(localStorage.getItem('user'));
 
  return (
    <Stack direction="row" sx={{height:"100vh"}}>
        <Stack sx={{width:"18%"}}><Sidebar tab="help"/></Stack>
        <Stack sx={{width:"82%",backgroundColor:'#F5F6F8',padding:"2% 3%",overflowY:"scroll"}}>
          <Stack direction="row" sx={{justifyContent:"space-between",alignItems:'center',padding:"1% 1%"}}>
            <Stack direction="row">
              <p className='heading-text'>{`Hello ${user?.name?.charAt(0).toUpperCase()+user?.name?.slice(1)} , `}</p>
              <BackHandIcon sx={{color:"#E2BE99"}}/>
            </Stack>
          </Stack>
          <Stack sx={{marginTop:"30px"}}>
            <p className='heading-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Stack>

    </Stack>
    </Stack>
  )
}

export default Help
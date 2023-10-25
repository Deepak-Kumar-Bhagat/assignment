import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginCheck } from '../LoginFunctionality/LoginFun';

function LoginPage() {

  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,seterror]=useState(false);

    const onSubmit= async (e)=>{
     e.preventDefault();
     try {
      let obj={
        email:email,
        password:password
      }
      let res=await LoginCheck(obj);
      if(res?.status===true){
        localStorage.setItem("user",JSON.stringify(res.data));
        navigate('/home');
      }else{
        seterror(true);
        setTimeout(()=>{
            seterror(false);
        },2000);
        setEmail("");
        setPassword("");
        };  
     } catch (error) {
        console.log(error.message);
        seterror(true);
        setTimeout(()=>{
            seterror(false);
        },2000);
        setEmail("");
        setPassword("");
        };  
    }

  return (
    <div style={{height:"100vh"}}>
        <form onSubmit={onSubmit}>
        <Stack sx={{width:"100%",padding:"5%",alignItems:"center",minHeight:"100vh",justifyContent:"center"}}>
            <Stack direction="row" sx={{justifyContent:"center",alignItems:'center',marginBlock:"1%"}}>
                <Stack sx={{alignItems:"start"}}>
                    <h1 style={{opacity:"0.7"}} >Login</h1>
                    <Box sx={{width:'100%',margin:"5px auto",border:"2px solid #085AC0"}}></Box>
                </Stack>
            </Stack>
            <Stack sx={{width:"50%",marginBlock:"2%"}}>
                <TextField variant="standard" color="primary" focused placeholder="Email *" required type="email" sx={{color:'#ff8c00',marginBottom:"5%"}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <TextField variant="standard" color="primary" focused placeholder="Password *" required type="password" sx={{color:'#ff8c00',marginBottom:"2%"}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                {error && <Typography sx={{fontFamily:"Josefin Slab",color:"red"}}>Credentials is wrong !!</Typography>}
                <Box sx={{textAlign:"center",marginTop:"5%"}}>
                    <Button variant="contained" size="medium" type="submit" sx={{boxShadow:"none",borderRadius:"0px",padding:"7px 20px 7px 25px",color:"#085AC0",background: 'none',border:"1px solid #085AC0","&:hover": {backgroundColor: '#085AC0',color:"white"}}} >Login</Button>
                </Box>
            </Stack>   
        </Stack>
        </form> 
    </div>
  )
}

export default LoginPage
import React from "react";
import { Typography, Box, TextField, Link, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';

function SignupPage() {
  return (
    <>
    <Box sx={{
      
      height:700,
      display:"flex",
      flexDirection:'column',
      alignItems:"center",
      backgroundImage:`url('https://images.pexels.com/photos/61135/pexels-photo-61135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height:'720px',
    }} >
   
        <Box sx={{
             marginTop:6,
              backgroundColor:'#D5EDE7',
              borderRadius:12,
              border:'4px solid black',
      
              height:610,
              width:600,
              display:"flex",
              flexDirection:'column',
              alignItems:"center",
              
        }} >
        <Box sx={{
          marginTop:6,
        }} >
          <Typography variant="h3"> Create Account </Typography>
        </Box>
        <Box
         sx={{display:'flex',flexDirection:'column', width:380,marginTop:1}}  >
          <TextField  id="standard-basic"  label="Email:" variant="standard" />
          <TextField sx={{marginTop:1}} id="standard-basic" label="FullName:" variant="standard" />
          <TextField sx={{marginTop:1}} id="standard-basic" label="Password:" variant="standard" />
          </Box>
       
          <Typography sx={{marginTop:1}} variant="h5">OR</Typography>

          <Button   sx={{marginTop:1.5, width:380, backgroundColor:'#3C5A9A' , color:'white' , ":hover":{bgcolor:'white',color:'#3C5A9A'} }} variant="h1">  <FacebookIcon sx={{marginRight:3}} /> Continue With Facebook </Button>
         
          <Button sx={{marginTop:1.7, width:380, backgroundColor:'white' , color:'black', ':hover':{bgcolor:'black',color:'white'}  }} variant="h1">   <img
                  style={{
                    height: "22px",
                   marginRight:29,
                  }}
                  src="https://img.icons8.com/color/256/google-logo.png"
                />  Continue With Google</Button>
          <Button sx={{marginTop:1.7, width:380, backgroundColor:'black' , color:'white',":hover":{bgcolor:'white',color:"black"} }} variant="h1">   <img
                  style={{
                    height: "22px",
                   marginRight:29,
                  
                  }}
                  src="https://img.icons8.com/badges/256/experimental-mac-os-badges.png"
                />   Continue With Apple</Button>
          
        <Link
           sx={{marginTop:7, fontSize:'large'}} 
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >  LOGIN   
        </Link>
        </Box>
      </Box>
       
    </>
  );
}

export default SignupPage;
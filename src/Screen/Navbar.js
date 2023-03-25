import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom';



export default function Navbar () {
  const navigation = useNavigate()
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
           
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color={'white'} onClick={()=>navigation('/')}  variant="h6" component="div" sx={{  flexGrow: 1,color:'white'  }}>
            <Link style={{color:'white', textDecoration:'none'}}   to={'/'}  >
               AppBar 
               </Link>
          </Typography>
          <Typography  variant="body3" onClick={()=>navigation('/')} component="div" sx={{ marginRight:'12px' }}>
            <Link style={{color:'white', textDecoration:'none'}} to={'/'}   color="inherit" >Home</Link>
          </Typography>
          <Typography variant="body3" component="div" sx={{  marginRight:'12px'}}>
              <Link style={{color:'white', textDecoration:'none'}} to={'/about'} >About</Link>
          </Typography>
          <Typography onClick={()=>navigation('/contact')} variant="body3" component="div" sx={{ marginRight:'12px'}}>
            <NavLink style={{color:'white', textDecoration:'none'}} to={'/contact'} > Contact </NavLink>
           
          </Typography>
         <Box   >
           {<SearchIcon  sx={{marginTop:'5px', marginRight:'6px'}} />}
          
           <TextField 
           style={{color:'white'}}
         id="standard-textarea"
         placeholder="Search.... "
         multiline
         variant="standard"
         
         />
         </Box>
          <Button onClick={()=>navigation('/sigUp')} color="inherit">Login</Button>
        
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet/>
         </>
  
  );
}
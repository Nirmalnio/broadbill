import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../../Assets/images/broadbil.png"
import "./Loginpage.css"
import { useState,useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router';

const theme = createTheme();

export default function SignIn() {

    const naviagte = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([
        { username: 'Nirmalkumar', password: 'broadbil123' },
        { username: 'Admin', password: 'broadbiladmins' },
        { username: 'Vinoth', password: 'broadbil321' },
        { username: 'user', password: 'broadbiluser' },


      ]);
    const [err,setErr] = useState(false)
    
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const validUser = users.find((user) => user.username === username && user.password === password);
      if (validUser) {
        localStorage.setItem('username', username);
        naviagte("mainpage")
        setUsername('');
        setPassword('');
      } else {
        setErr(true)
      }
    
    };

    useEffect(()=>{
        if(err){
            setTimeout(() => {
                setErr(false)
            }, 2000);
        }
    },[err])



    useEffect(()=>{
          
    },[])
    

  return (
    <ThemeProvider theme={theme}>

     <div  className='loginheader'>
        <img src={Logo} alt="Logo" />
     </div>
        
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

          {err && (
                 <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert severity="error">Invalid username or password!</Alert>
                 </Stack>
             )}

            <TextField
               label="Username"
               variant="outlined"
               value={username}
               onChange={handleUsernameChange}
               margin="normal"
               required
               fullWidth
            
            />
            <TextField
               label="Password"
               type="password"
               variant="outlined"
               value={password}
               onChange={handlePasswordChange}
               margin="normal"
               required
               fullWidth
              autoComplete="current-password"

            />

             

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2, backgroundColor:"#ff7700",fontSize:"18px" }}
              
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
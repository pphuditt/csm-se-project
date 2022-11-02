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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import "../css/SignIn.css"
import { bgcolor, shadows } from '@mui/system';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme({
  typography: {
    fontFamily: "Sarabun"
  }
});

export default function SignIn() {
  let [id, setId] = useState('')
  let [password, setPassword] = useState('')
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='page'>
        <NavBar />
        <Grid 
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginTop={2}
        >
          <Card sx={{
            width: "auto",
            height: "auto", 
            marginLeft: 4,
            marginRight: 4,
            marginTop: 8,
            padding: 8,
            bgcolor: "#F3F4F6",
            boxShadow: 8,
          }}>
          <CardContent>
            <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box 
            sx={{
              marginTop: 0,
              marginLeft: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            
            }}
            >
            {/* <Avatar sx={{ m: 1, bgcolor: '#2D2926' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5" fontFamily={"Sarabun"}>
              เข้าสู่ระบบ
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} fontFamily={"Sarabun"} >
              <Typography fontFamily={"Sarabun"}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="ชื่อบัญชีผู้ใช้"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value = {id}
                  onChange = {(event) => setId(event.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="รหัสผ่าน"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value = {password}
                  onChange = {(event) => setPassword(event.target.value)}
                />
              </Typography>
            
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#2D2926" }}
                onClick = {() => navigate("/home")}
              >
                เข้าสู่ระบบ
              </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
              </Container>
            </CardContent>
          </Card>
        </Grid>
        
      </div>
    </ThemeProvider>
    
    
      
  );
}
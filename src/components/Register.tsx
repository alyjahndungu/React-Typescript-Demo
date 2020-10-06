import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Login from './Login';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        TernstoneHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface UserRegProps{

}

interface UserRegState{
  isLoading: boolean;
}

export default class Register extends React.Component<UserRegProps, UserRegState> {
     constructor(props: UserRegProps) {

    super(props);
    this.state = {isLoading:false};

  }
  
render(){
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="form rotateIn">
      <i className="fas fa-lock  fa-3x  text-secondary"></i>


        <Typography component="h1" variant="h5">
          CREATE ACCOUNT
        </Typography>
        <form className="" noValidate>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
                  <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fname"
            label="Firstname"
            name="fname"
            autoComplete="fistname"
            autoFocus
          />

                  <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Lastname"
            name="lname"
            autoComplete="lastname"
            autoFocus
          />

                  <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="PhoneNumber"
            name="phone"
            autoComplete="phone"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="btn btn-sm rounded-pill shadow"
              >
            Sign Up
          </Button>
          
          <Grid container>
            <Grid item>
              <a href="/Login">
                Have an account? Sign In
              </a>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
}
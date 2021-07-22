import React from "react";
import { login } from "../api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(this.state);
      toast.success("Login successful");
      this.props.history.push("/");
    } catch (e) {
      toast.error("Invalid login");
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <>
      <h1> Login </h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <NavLink to="/signup">Signup</NavLink>
        </p>
      </>
    );
  }
}
export default Login;













// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import "./Login.css"
// import ellipse1 from '../img/ellipse1.png';
// import ellipse2 from '../img/ellipse2.png';

// function Login() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   effect:{
//     class: "animate__pulse",
//   }

// }));

// export default function SignIn() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//         <div class="background-login">
//             <img src={ellipse1} alt="" className="ellipse1"/>
//             <img src={ellipse2} alt="" className="ellipse2"/>
//         </div>
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//           <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//           </Grid>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             className={[classes.submit, classes.effect]}
//           >
//             Login
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Login />
//       </Box>
//     </Container>
//   );
// }
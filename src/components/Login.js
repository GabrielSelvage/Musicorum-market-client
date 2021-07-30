import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { login } from '../api';
import { toast } from "react-toastify";
import './Login.css'

export const Login = ({ loggedInUser, setLoggedInUser }) => {
    let history = useHistory();
    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter valid email').required("required"),
        password: Yup.string().required("Required")
    });
    const onSubmit = async (values, props) => {
        const { email, password } = values
        console.log(email, password);
        try {
            const user = await login({
                email,
                password,
            });
            console.log("---->", user.data);
            setLoggedInUser(user.data);
            history.push("/");
        } catch (e) {
            console.log("error: ", e);
            toast.error("Invalid login");
            history.push("/login");
        }
        props.resetForm();
    };
    return (
        <>
            <Grid className="login">
                <Paper id="paper_style">
                    <Grid align="center">
                        <Avatar id="avatar_style"><LockOutlinedIcon /></Avatar>
                        <br />
                        <div className="row-login">
                            <h2 className="title">Login</h2>
                            <Typography className="tip"> Do you have an account ?
                                <Link className="a-login" exact to="/signup" >
                                    Sign up
                                </Link>
                            </Typography>
                        </div>
                    </Grid>
                    <br /><br /><br />
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} className="textFieldStyle" name="email" label="Email"
                                    placeholder="Enter email" fullWidth required
                                    helperText={<ErrorMessage name="email" />} />
                                <br /><br />
                                <Field as={TextField} className="textFieldStyle" name="password" label="Password"
                                    placeholder="Enter password" type="password" fullWidth required
                                    helperText={<ErrorMessage name="password" />} />
                                <br /><br />
                                <div>
                                    <Button type="submit" color="primary" variant="contained" id="btn_style" fullWidth>
                                        {props.isSubmitting ? "Loading" : "Login"}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <Typography>
                        <Link className="a-login" href="#">
                            Forgot password ?
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
            <div className="background-login">
                <img className="ellipse1" src="/img/ellipse1.png" />
                <img className="ellipse2" src="/img/ellipse2.png" />
            </div>
        </>
    )
}
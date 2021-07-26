import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { FormHelperText } from '@material-ui/core';
import * as Yup from 'yup';
import { signup } from "../api";
import './Signup.css';
export const Signup = ({ handleChange }) => {
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false,
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter valid email').required("Required field"),
        password: Yup.string().min(6, "password is too short").required("Required field"),
        name: Yup.string().min(3, "name is too short").required("Required field"),
    });
    const onSubmit = async (values, props) => {
        const { email, password, name } = values
        try {
            await signup({
                email,
                password,
                name,
            });
        } catch (e) {
            console.log("error: ", e);
        }
        props.resetForm();
        handleChange("event", 0)
    };
    return (
        <>
            <Grid className="signup">
                <Paper id="paper_style">
                    <Grid align='center'>
                        <Avatar id="avatar_style">
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <br/><br/>
                        <h2 className="title-signup"> Sign up</h2>
                        <Typography variant='caption' gutterBottom>
                            Please fill this form to create an account
                        </Typography>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} fullWidth name="email" label="Email"  helperText={<ErrorMessage name="email" />} />
                                <Field as={TextField} fullWidth name="name" label="Name" helperText={<ErrorMessage name="name" />} />
                                <Field as={TextField} fullWidth name="password" label="Password" helperText={<ErrorMessage name="password" />} />
                                <br/><br/>
                                <FormControlLabel
                                    control={<Field as={Checkbox} name="termsAndConditions" color="#00A692" />}
                                    label="I accept the terms and conditions"
                                />
                                <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                                <Button type="submit" variant="contained" className="btn-signup">
                                    {props.isSubmitting ? "Loading" : "Sing up"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
            <div className="background-signup">
                <img className="ellipse1" src="/img/ellipse1.png" />
                <img className="ellipse2" src="/img/ellipse2.png" />
            </div>
        </>
    )
}
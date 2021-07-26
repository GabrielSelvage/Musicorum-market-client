import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { FormHelperText } from '@material-ui/core';
import * as Yup from 'yup';
import { signup } from "../api";
import { Redirect } from "react-router-dom";
import './Signup.css';
import { useHistory } from "react-router-dom";

export const Signup = ({handleChange}) => {
    

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
        //email: Yup.string().email('Please enter valid email').required("required"),
        //password: Yup.string().min(1, "password too short").required("Required field"),
        //confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match").required("Required field"),
        //phoneNumber: Yup.number().typeError("Enter valid phone number").required("Required field"),
        //name: Yup.string().min(3, "it's too short").required("Required field"),
        //termsAndConditions: Yup.string().oneOf(["true"], "You must accept the terms and conditions"),
        //gender: Yup.string().oneOf(["male", "female"]).required("requirred"),

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
        <Grid className="signup">
            <Paper id="paper_style">
                <Grid align='center'>
                    <Avatar id="avatar_style">
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 >Sign up</h2>
                    <Typography variant='caption' gutterBottom>
                        Please fill this form to create an account
                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} fullWidth name="name" label="Name" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth name="email" label="Email" helperText={<ErrorMessage name="email" />} />


                            {/* <FormControl component="fieldset" style={{ margin: '5px 0' }}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText> */}


                            {/* <Field as={TextField} fullWidth name="phoneNumber" label="Phone Number" helperText={<ErrorMessage name="phoneNumber" />} /> */}
                            <Field as={TextField} fullWidth name="password" label="Password" helperText={<ErrorMessage name="password" />} />
                            {/* <Field as={TextField} fullWidth name="confirmPassword" label="Confirm Password" helperText={<ErrorMessage name="confirmPassword" />} /> */}

                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions"
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>


                            <Button type="submit" variant="contained" color="primary">
                                {props.isSubmitting ? "Loading" : "Sing up"}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
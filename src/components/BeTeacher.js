import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { FormHelperText } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import { beteacher } from "../api";
import './Signup.css';

export const BeTeacher = ({ handleChange }) => {
    let history = useHistory();
    const initialValues = {
        name: '',
        email: '',
        password: '',
        description: "",
        role: "teacher",
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter valid email').required("required"),
        password: Yup.string().min(1, "password too short").required("Required field"),
        name: Yup.string().min(3, "it's too short").required("Required field"),
    });
    const onSubmit = async (values, props) => {
        const { email, password, name, description } = values
        try {
            await beteacher({
                email,
                password,
                name,
                description,
            });
            history.push("/login");
        } catch (e) {
            console.log("error: ", e);
        }
        props.resetForm();
        //handleChange("event", 0)
    };
    return (
        <>
            <Grid className="body-signup">
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
                                <Field as={TextField} fullWidth name="password" label="Password" type="password" helperText={<ErrorMessage name="password" />} />
                                <Field as={TextField} fullWidth name="description" label="Description" type="text-area" helperText={<ErrorMessage name="description" />} />
                                <FormControlLabel
                                    control={<Field as={Checkbox} name="termsAndConditions" />}
                                    label="I accept the terms and conditions"
                                />
                                <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                                <Button className="btn-signup" type="submit" variant="contained" color="primary">
                                    {props.isSubmitting ? "Loading" : "Sing up"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
            <div className="background-login">
                <img className="ellipse1" src="/img/ellipse1.png" />
                <img className="ellipse2" src="/img/ellipse2.png" />
            </div>
        </>
    )
}
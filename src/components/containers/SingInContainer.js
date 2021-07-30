import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BeTeacher } from '../BeTeacher';
import { Signup } from '../Signup';
import '../Signup.css';

export const SingInContainer = (props) => {
    const [value, setValue] = useState(props.location.initialState || 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = { width: 340, margin: "20px auto" }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }


    return (
        <Paper  style={paperStyle}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                className="MuiTabs-root"
                aria-label="disabled tabs example"
            >
                <Tab label="Student" />
                <Tab label="Teacher" />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Signup handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BeTeacher handleChange={handleChange} />
            </TabPanel>
        </Paper>
    )
}
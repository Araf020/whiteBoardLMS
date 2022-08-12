import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './FilterStyle';

function Filter() {
        const classes = useStyles();

    return (
        <div className={classes.content}  >
        <Typography variant='h4'>
            All Teams
        </Typography>
        <div>
        <img src="#"/>
        </div>
       <div className={classes.filterDetail}>
        <Typography variant='h5'>Course Name & code</Typography>
        <br/>
        <Typography >Assignments</Typography>
        <Typography >Grades</Typography>
        <Typography >Channels</Typography>
        <Typography >General</Typography>
        <Typography >Student</Typography>
       </div>


        </div>
    );
}

export default Filter;
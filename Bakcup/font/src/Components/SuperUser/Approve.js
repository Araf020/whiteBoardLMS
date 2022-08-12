import { Grid, Typography,Paper, Autocomplete, Box, TextField} from '@mui/material';
import React from 'react';

import useStyles from '../Dashboard/Teams/TeamsStyle';
import {useState, useEffect} from 'react';

import Enrollment from './EnrollMentCard';

const Approve = () => {

    const [courseId, setCourseId] = useState();
    const [requestList, setRequestList] = useState([]);
    const [courseList, setCourseList] = useState([]);

    const courses = [{
        id:1,
        courseTitle:'Bangla language studies',
        courseCode:'BAN101'
    },
    {
        id:2,
        courseTitle:'English language studies',
        courseCode:'ENG101'
    },
    {
        id:3,
        courseTitle:'Mathematics',
        courseCode:'MAT101'
    
    },
    {
        id:4,
        courseTitle:'Physics',
        courseCode:'PHY101'
    }

    ];
 

    return(
        
        <div>
            <Grid container spacing={3} direction="column">
                <Grid item >
                    {/* make it to center */}
                    {/* assh color : #f5f5f5 */}
                    <Paper className='paper' sx={{width:'100%', maxWidth:'100%' ,bgcolor:'#f5f5f5', alignContent:'center'}}>
                        <Typography sx={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'20px',paddingBottom:'20px', color:'black', font:'caption'}}>
                            Enrollment Approve Panel
                        </Typography>
                    </Paper>
                
                </Grid>
                <Grid item container>
                    <Grid item sm={4}/>
                    <Grid item >
                        <Autocomplete
                            id="place-select"
                            sx={{ width: 300 }}
                            value={courseId}
                            onChange={(event, newValue) => {
                            console.log(newValue.id);
                            setCourseId(newValue.id);
                            
                            }}
                            options={courses}
                            autoHighlight
                            getOptionLabel={(option) => option.courseTitle+' , '+option.courseCode}
                            renderOption={(props, option) => (
                                <Box component="li" {...props} >
                                {option.courseTitle} , {option.courseCode}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Choose a Course"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            />
                    </Grid>
                    <Grid item sm={4}/>
                </Grid>

                <Grid item container spacing={2}>
                        
                        <Grid item  >
                            <Enrollment courseId={courseId}/>
                            
                        </Grid>
                        <Grid item  >
                            <Enrollment courseId={courseId}/>
                            
                        </Grid>
                        <Grid item  >
                            <Enrollment courseId={courseId}/>
                            
                        </Grid>
                        <Grid item  >
                            <Enrollment courseId={courseId}/>
                            
                        </Grid>
                        <Grid item  >
                            <Enrollment courseId={courseId}/>
                            
                        </Grid>
                        
                </Grid>
            </Grid>

        </div>
    
    )
}

export default Approve;
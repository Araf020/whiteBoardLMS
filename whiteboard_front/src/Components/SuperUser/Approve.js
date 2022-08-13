import { Grid, Typography,Paper, Autocomplete, Box, TextField} from '@mui/material';
import React from 'react';

import useStyles from '../Dashboard/StudentDashBoard/TeamsStyle';
import {useState, useEffect} from 'react';

import Enrollment from './EnrollMentCard';

const Approve = () => {

    const [course_Id, setCourseId] = useState();
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

    const getCourseNameById = (id) => {
        const course = courses.find(course => course.id === id);
        return course ? course.courseTitle : '';
    }

    const requests = [{
        id:1,
        name:'Rakib',
        studentId:1,
        courseId:1,
        courseName:"",
        grade:'nine'


    },
    {
        id:2,
        name:'Naeem',
        studentId:2,
        courseId:2,
        courseName:"",
        grade:'nine'
    },
    {
        id:3,
        name:'Nasim',
        studentId:3,
        courseId:3,
        courseName:"",
        grade:'nine'
    },
    {
        id:4,
        name:'Rakib',
        courseId:3,
        courseName:"",
        grade:'nine'
    },
    {
        id:5,
        name:'Ruhul',
        studentId:4,
        courseId:1,
        courseName:"",
        grade:'nine'
    },
    {
        id:6,
        name:'Rezwan',
        studentId:4,
        courseId:1,
        courseName: "",
        grade:'nine'
    


    }
];

const getrequestListByCourseId = (id) => {
    let requestList = requests.filter(request => request.courseId === id);
    // add courseNAme to requestList
    requestList.forEach(request => {
        request.courseName = getCourseNameById(request.courseId);
    });
    setRequestList(requestList);

    console.log(requestList);
}

useEffect(() => {
    getrequestListByCourseId(course_Id);
}, [course_Id]);


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
                            value={course_Id}
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
                        
                        
                        {/* iterate over request list */}
                        {requestList.map((request)=>{
                            
                                return(
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <Enrollment request={request}/>
                                    </Grid>
                                )
                            
                        })}
                        
                </Grid>
            </Grid>

        </div>
    
    )
}

export default Approve;
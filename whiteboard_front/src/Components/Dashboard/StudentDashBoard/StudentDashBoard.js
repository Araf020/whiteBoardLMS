import { Grid, Typography,Card,CardContent, Paper} from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar'
import Declarations from '../Announcement/Declarations';
import DueAssignment from '../../Assignments/Due';
import CompletedAssignment from '../../Assignments/Completed';

import useStyles from './TeamsStyle';
import Card_ from './CourseCard';
import {useState, useEffect} from 'react';
import Enrollment from '../Enroll/Enroll';


function Teams() {
    const classes = useStyles();
    const StdId = 3;

    // fetch courses from server api
    const [courses, setCourses] = useState([]);
    const [component, setComponent] = useState(<div></div>);
    const [option, setOption] = useState('course');
    
    
    useEffect(() => {
        const url = 'http://localhost:8080/api/students/'+StdId+'/courses';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                console.log(data);
                console.log("coursesList dash: ", courses);
                // setComponent(
                // <div>
                //     <Typography>Your Courses</Typography> 
                //     <Grid container>
                    
                //         {/* return a card for every course in courses */}
                //         {courses.map(course => (
                //             <Grid item xs={12} sm={6} md={4}>  
                //                 <Card_ course={course} />
                //             </Grid>
                //         ))}
                    
                //     </Grid>
                // </div>);
                
            }).catch(err => {
                console.log(err);
            }
            );
    } , []);

    // const handleClick = (courseId) => {

    useEffect(() => {
        if(option === 'course'){
            setComponent(
                <div>
                    <Typography>Your Courses</Typography>
                    <Grid container>
                        {/* return a card for every course in courses */}
                        {courses.map(course => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card_ course={course} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            );
        }
        else if(option === 'due'){
            setComponent(
                <div>
                    <Typography>Your Due Assignments</Typography>
                    <DueAssignment studentId={StdId}/>
                </div>
            );
        }
        else if(option === 'completed'){
            setComponent(
                <div>
                    <Typography>Your Completed Assignments</Typography>
                    <CompletedAssignment studentId={StdId} />
                </div>
            );

        }
        else if(option === 'files'){
            setComponent(
                <div>
                    <Typography>Your Files</Typography>
                </div>
            );

        }
        else if(option === 'notice'){
            setComponent(
                <div>
                    <Paper sx ={{width:'100%', paddingLeft:'20px', paddingBottom:'20px',paddingTop:'20px'}}>
                    <Typography>YOUR NOTICES</Typography>
                    </Paper>
                    <Declarations />
                </div>
            );
        }
        else if(option === 'enroll'){
            setComponent(
                <div>
                <Paper sx ={{width:'100%',paddingLeft:'20px', paddingBottom:'20px',paddingTop:'20px'}}>
                <Typography>ENROLLMENT</Typography>
                </Paper>
                   
                    <Enrollment />
                </div>
            );
        }
    }, [option, courses]);


    return (
        <div className={classes.root} >
            <Sidebar setOption={setOption}/>
            <main className={classes.content}>
                {component}
            </main>
        </div>
    );
}

export default Teams;
import { Grid, Typography, Card, CardActionArea,CardContent, Paper, CardActions} from '@mui/material';
import React from 'react';

import useStyles from '../StudentDashBoard/TeamsStyle';
import {useState, useEffect} from 'react';
import {Button,List, ListItem, ListItemText, Autocomplete, Box,TextField, InputLabel, Select, MenuItem, Input, InputAdornment, IconButton, FormHelperText, FormLabel, RadioGroup, Radio, FormGroup, FormControl} from '@mui/material';
import LibraryAddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import axios from 'axios';
import Card_ from './CourseCard';


import RemoveIcon from '@mui/icons-material/Remove';



const Enroll = () => {

    const classes = useStyles();
    const StdId = 5;

    const [courseId, setCourseId] = useState();
    const [grade, setGrade]= useState('nine');
    const [instructorId, setInstructor] = useState();

    const[courseList, setCourseList] = useState([]);
    const[enrollmentList, setEnrollmentList] = useState([]);

    const [instructorList, setInstructorList] = useState([]); 


    
    
    const grades = [
     'Ten','Nine','Eight','Seven','Six','Five'
       
    ]

    const instructors = [{
        id:1,
        name:'Rakibul Islam',
        speciality:'Bangla '

    },
    {
        id:2,
        name:'SAMUEL Rozario',
        speciality:'English '
    },
    {
        id:3,
        name:'Himel Khan',
        speciality:'Mathematics'
        
    },
    {
        id:4,
        name:'Chengis Khan',
        speciality:'Mathematics'
    },
    {
        id:5,
        name:'William Bolt',
        speciality:'Mathematics'
    }



];

   

   useEffect(() => {
    // get course list by grade
    // make grade lowercase
    if(grade){
        
        // const lowercaseStr = "grade".toLowerCase();
        // let grade_ = grade.toLowerCase();
        fetch('http://localhost:8080/api/courses_by_grade/'+grade)
        .then(res => res.json())
        .then(data => {
            console.log("courses: ",data);
            // add a new property to the object
            data.map(course => {
                course.enrolled = false;
                return course;
            })
            setCourseList(data);

        }
        )
        .catch(err => console.log(err));

        

    }

   }, [grade]);

    useEffect(() => {
       if(courseId){
           console.log("courseId",courseId);
        //    console.log("instructorId",instructorId);
           

          

       }

    }, [courseId]);

    
        

    const handleEnroll = (e) => {
        e.preventDefault();
        console.log("submitting..");
        var success = false;

        // post request for each course in enrollmentList
        enrollmentList.map(course => {
            console.log("for course: ",course.courseId);
            const reqBody = {
                status: "pending",
                isActive: "true",
                enrollDate: "2022-08-15 12:38:00",
                
                courseId: course.courseId+"",
                studentId: StdId+""
                
            }
            console.log("reqBody: ",reqBody);

            fetch('http://localhost:8080/api/create_enrollment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
            })
            .then(res => res.json())
            .then(data => {
                console.log("enrollment response for course:",course.courseTitle);
                console.log(data);
                success = true;
            })
            .catch(err => {console.log(err); success = false;});
        })
        
        if(success){
            alert("Enrollment Successful");
        }
       
        }
        



    useEffect(() => {
        console.log("courseList",enrollmentList);
    }, [enrollmentList]);


    return (
        <div className='classes.root'>
            <main className={classes.content}>
                <Paper className="paper" sx={{width:'100%'}}>
                        <Typography >OFERRED COURSES</Typography>
                </Paper>
                <Grid container spacing={3} direction='column'>
                    <Grid item container spacing={1}  sx={{maxHeight:500,overflow:'auto'}}>
                        {/* return a card for every course in courses */}
                        {courseList.map(course => (
                            <Grid item xs={12} sm={6} md={4}>
                                <CardActionArea>
                                <Card className={classes.card} style={{background:'#f7f8fa'}}>
                                    {/* <CardContent> */}
                                    <div className={classes.courseHeader} style={{background:'#005671'}}>
                                                {/* change font in typography */}
                                                {/* give some padding in left */}

                                                <Typography variant="h5" style={{color:'white',fontWeight:'bold' , paddingLeft:'15px', paddingTop:'10px'}}>{course.courseTitle}</Typography>
                                                {/* <Typography className={classes.courseHeaderText} variant="overline">{courseTitle}</Typography> */}
                                                {/* description */}
                                                <Typography variant="h6" style={{color:'white',fontWeight:'bold',paddingLeft:'15px'}}>{course.courseDescription}</Typography>
                                                <Typography variant="h9" style={{color:'white',paddingLeft:'15px'}}>{course.courseCode}</Typography>
                                    </div>
                                    {/* </CardContent> */}
                                   

                                    <CardActions>
                                    <Button size="small" variant='contained' color="primary" disabled={course.enrolled}
                                    onClick={() => {
                                        course.enrolled = !course.enrolled;
                                        setCourseId(course.courseId);
                                        // add to enrollment list
                                        let newEnrollmentList = [...enrollmentList];
                                        newEnrollmentList.push(course);
                                        setEnrollmentList(newEnrollmentList);
                                    }}
                                    endIcon={<LibraryAddTwoToneIcon />}
                                    >
                                        ADD
                                    </Button>
                                    <Button size="small" variant='contained' color="primary" disabled={!course.enrolled}

                                        onClick={() => {
                                            course.enrolled = !course.enrolled;
                                            // remove from enrollment list
                                            let newEnrollmentList = [...enrollmentList];
                                            newEnrollmentList.splice(newEnrollmentList.indexOf(course),1);
                                            setEnrollmentList(newEnrollmentList);

                                        }}
                                        endIcon={<RemoveIcon />}
                                    >
                                        Remove
                                    </Button>

                                </CardActions>

                                </Card>
                                
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item container spacing={1}>
                        <Paper sx={{width:"100%"}}>
                                    {/* selected course lis */}
                                    <Typography variant="h5" style={{paddingLeft:'15px'}}>SELECTED COURSES:</Typography>
                                    <List dense={true}>
                                        {enrollmentList.map(course => (
                                            <ListItem>
                                                <ListItemText primary={course.courseTitle} />
                                                {/* <ListItemText primary={course.courseCode} /> */}
                                            </ListItem>
                                        ))}
                                    </List>

                        </Paper>
                    </Grid>
                    <Grid item container spacing={1}>
                        <Grid item sm={4}/>

                        <Grid item xs={12} sm={2} md={4}>
                            <Button variant='contained' fullWidth onClick={handleEnroll}>
                                Enroll
                            </Button>
                        </Grid>
                    <Grid item sm={5}/>
                    </Grid>
                    <Grid item>

                    </Grid>
                    <Grid item>
                    </Grid>

                </Grid>
            </main>

        </div>
    );






    
}

;
export default Enroll;
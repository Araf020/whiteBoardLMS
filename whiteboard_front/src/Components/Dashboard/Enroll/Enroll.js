import { Grid, Typography, Card, CardActionArea,CardContent, Paper, CardActions} from '@mui/material';
import React from 'react';

import useStyles from '../StudentDashBoard/TeamsStyle';
import {useState, useEffect} from 'react';
import {Button, Autocomplete, Box,TextField, InputLabel, Select, MenuItem, Input, InputAdornment, IconButton, FormHelperText, FormLabel, RadioGroup, Radio, FormGroup, FormControl} from '@mui/material';
import LibraryAddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import axios from 'axios';
import Card_ from './CourseCard';


import RemoveIcon from '@mui/icons-material/Remove';



const Enroll = () => {

    const classes = useStyles();

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

      fetch('http://localhost:8080/api/instructors')
        .then(res => res.json())
        .then(data => {
            setInstructorList(data);
            console.log("inst",data);
        })
        .catch(err => console.log(err));

   },[]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting..");
        
        // // put request to server using axios
        // axios.put('http://localhost:8080/api/assign_course/'+instructorId+'/'+courseId,{
        //     courseId:courseId,
        //     instructorId:instructorId
        // })
        // .then(res => {
        //     console.log(res);
        //     // if ok then show greetins message
        //     alert("Course assigned successfully");

        // })
        // .catch(err => {
        //     console.log(err);
        //     alert("Something went wrong! Try Again");
        // });


    }

    useEffect(() => {
        console.log("courseList",enrollmentList);
    }, [enrollmentList]);


    return (
        <div className='classes.root'>
            <main className={classes.content}>
            <Typography>Offered Courses</Typography>
                    <Grid container>
                        {/* return a card for every course in courses */}
                        {courseList.map(course => (
                            <Grid item xs={12} sm={6} md={4}>
                                <CardActionArea>
                                <Card className={classes.card} style={{background:'#f7f8fa'}}>
                                    <CardContent>
                                    <div className={classes.courseHeader} style={{background:'#005671'}}>
                                                {/* change font in typography */}
                                                {/* give some padding in left */}

                                                <Typography variant="h5" style={{color:'white',fontWeight:'bold' , paddingLeft:'15px', paddingTop:'10px'}}>{course.courseTitle}</Typography>
                                                {/* <Typography className={classes.courseHeaderText} variant="overline">{courseTitle}</Typography> */}
                                                {/* description */}
                                                <Typography variant="h6" style={{color:'white',fontWeight:'bold',paddingLeft:'15px'}}>{course.courseDescription}</Typography>
                                                <Typography variant="h9" style={{color:'white',paddingLeft:'15px'}}>{course.courseCode}</Typography>
                                    </div>
                                    </CardContent>
                                   

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
            </main>

        </div>
    );






    
}

;
export default Enroll;
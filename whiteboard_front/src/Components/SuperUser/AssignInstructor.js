import { Grid, Typography,Card,CardContent, Paper} from '@mui/material';
import React from 'react';

import useStyles from '../Dashboard/Teams/TeamsStyle';
import {useState, useEffect} from 'react';
import {Button, Autocomplete, Box,TextField, InputLabel, Select, MenuItem, Input, InputAdornment, IconButton, FormHelperText, FormLabel, RadioGroup, Radio, FormGroup, FormControl} from '@mui/material';
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';
import axios from 'axios';



const Assign = () => {

    const [courseId, setCourseId] = useState();
    const [grade, setGrade]= useState();
    const [instructorId, setInstructor] = useState();

    const[courseList, setCourseList] = useState([]);

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
            setCourseList(data);
        }
        )
        .catch(err => console.log(err));

        

    }

   }, [grade]);

    useEffect(() => {
       if(courseId){
           console.log("courseId",courseId);
           console.log("instructorId",instructorId);
           

          

       }

    }, [instructorId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting..");
        
        // put request to server using axios
        axios.put('http://localhost:8080/api/assign_course/'+instructorId+'/'+courseId,{
            courseId:courseId,
            instructorId:instructorId
        })
        .then(res => {
            console.log(res);
            // if ok then show greetins message
            alert("Course assigned successfully");

        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong! Try Again");
        });


    }
    return (
        <div>
        <Grid container direction='column' spacing={2}>
            <Grid item >
                {/* make it to center */}
                {/* assh color : #f5f5f5 */}
                <Paper className='paper' sx={{width:'100%', maxWidth:'100%' ,bgcolor:'#f5f5f5', alignContent:'center'}}>
                    <Typography sx={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'20px',paddingBottom:'20px', color:'black', font:'caption'}}>
                        Instructor Assignment Panel
                    </Typography>
                </Paper>
            
            </Grid>

            <Grid item container spacing={2}>
                <Grid item sm={2}/>
                
                <Grid item>
                <Autocomplete
                        id="place-select"
                        sx={{ width: 300 }}
                        value={grade}
                        onChange={(event, newValue) => {
                        console.log("grade: ",newValue);
                        setGrade(newValue);
                        
                        }}

                        options={grades}
                        autoHighlight
                        getOptionLabel={(option) => option}
                        renderOption={(props, option) => (
                            <Box component="li" {...props} >
                            {option}
                            </Box>
                        )}

                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Choose a Grade"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                        />
                </Grid>
                <Grid item >
                    <Autocomplete
                            id="place-select"
                            sx={{ width: 300 }}
                            value={courseId}
                            onChange={(event, newValue) => {
                            console.log(newValue.courseId);
                            setCourseId(newValue.courseId);
                            
                            }}
                            options={courseList}
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
            
                <Grid item>
                <Autocomplete
                        id="place-select"
                        sx={{ width: 300 }}
                        value={instructorId}
                        onChange={(event, newValue) => {
                        console.log("ass: ",newValue.instructorId);
                        setInstructor(newValue.instructorId);
                        
                        }}
                        options={instructorList}
                        autoHighlight
                        getOptionLabel={(option) => option.name+' , '+option.speciality}
                        renderOption={(props, option) => (
                            <Box component="li" {...props} >
                            {option.name}, {option.speciality}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Choose an Instructor"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                        />
                </Grid>
                
                
                
                
                <Grid item sm={2}/>
            </Grid>
            <Grid item container>
                <Grid item sm={3}/>
                <Grid item>
                        {/* <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            multiline
                            maxRows={10}
                            sx={{minWidth: 600, bgcolor:'#f5f5f5'}}                                                                              
                            // value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        /> */}
                    </Grid>
                <Grid item sm={3}/>
            </Grid>
            <Grid item container>
                <Grid item sm={5}/>
                <Grid item>
                <Button variant="contained" color="primary" style={{marginTop:'20px', marginBottom:'20px'}}
                onClick={handleSubmit}
                >
                    Assign Instructor
                </Button>
                </Grid>
                <Grid item sm={5}/>
            </Grid>


        </Grid>
        </div>
    );






    
}

;
export default Assign;
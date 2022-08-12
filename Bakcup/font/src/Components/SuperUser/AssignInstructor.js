import { Grid, Typography,Card,CardContent, Paper} from '@mui/material';
import React from 'react';

import useStyles from '../Dashboard/Teams/TeamsStyle';
import {useState, useEffect} from 'react';
import {Button, Autocomplete, Box,TextField, InputLabel, Select, MenuItem, Input, InputAdornment, IconButton, FormHelperText, FormLabel, RadioGroup, Radio, FormGroup, FormControl} from '@mui/material';
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';



const Assign = () => {

    const [courseId, setCourseId] = useState();
    const [grade, setGrade]= useState();
    const [instructorId, setInstructor] = useState();

    const[courseList, setCourseList] = useState([]);

    const [instructorList, setInstructorList] = useState([]); 

    const [assFile,setAssFile] = useState(null);

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
    
    const grades = [
        {
            id:1,
        grade:'Ten'
    },
    {
        id:2,
        grade:'Nine'
    },
    {
        id:3,
        grade:'Eight'
    }
    ,{
        id:4,
        grade:'Seven'
    },
    {
        id:5,
        grade:'Six'
    },
    {
        id:6,
        grade:'Five'

    }
    


       
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
        console.log("instr: ",instructorId);
        console.log("courseId: ",courseId);
        console.log("grade: ",grade);

    }, [grade,courseId,instructorId]);


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
                        console.log("grade: ",newValue.id);
                        setGrade(newValue.id);
                        
                        }}

                        options={grades}
                        autoHighlight
                        getOptionLabel={(option) => option.grade}
                        renderOption={(props, option) => (
                            <Box component="li" {...props} >
                            {option.grade}
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
            
                <Grid item>
                <Autocomplete
                        id="place-select"
                        sx={{ width: 300 }}
                        value={instructorId}
                        onChange={(event, newValue) => {
                        console.log("ass: ",newValue.id);
                        setInstructor(newValue.id);
                        
                        }}
                        options={instructors}
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
                <Button variant="contained" color="primary" style={{marginTop:'20px', marginBottom:'20px'}}>
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
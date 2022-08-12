import { Grid, Typography,Card,CardContent, Paper} from '@mui/material';
import React from 'react';

import useStyles from '../../Dashboard/Teams/TeamsStyle';
import {useState, useEffect} from 'react';
import {Button, Autocomplete, Box,TextField, InputLabel, Select, MenuItem, Input, InputAdornment, IconButton, FormHelperText, FormLabel, RadioGroup, Radio, FormGroup, FormControl} from '@mui/material';
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';

import GradeTable from './GradeTable';

const Publish = () => {

    const [courseId, setCourseId] = useState();
    const [session, setSession]= useState();
    const [desc, setDesc] = useState('No Description Added!');
    const [assignmentId, setAssignmentId] = useState();
    const [grade, setGrade]= useState();

    const[assignmentList, setAssignmentList] = useState();

    const [dueDate, setDueDate] = useState(''); 

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

    ]
    const assignments = [{
        id:1,
        assTitle:'Bangla language studies-1',
        dueDate:'14/08/2022',
        courseId:1

    },
    {
        id:2,
        assTitle:'English language studies-1',
        dueDate:'18/08/2022',
        courseId:2,
    },
    {
        id:3,
        assTitle:'Bangla language studies-2',
        dueDate:'21/08/2022',
        courseId:1,
    },
    {
        id:4,
        assTitle:'Bangla language studies-3',
        dueDate:'18/08/2022',
        courseId:1,
    },
    {
        id:5,
        assTitle:'English language studies-2',
        dueDate:'19/08/2022',
        courseId:2,
    },
    {
        id:6,
        assTitle:'English language studies-3',
        dueDate:'17/08/2022',
        courseId:2,
    }



];
   const grades = ['five','six','seven','eight','nine','ten'];

    const getAssignmentListByCourseId = (id) => {
        const list = assignments.filter(assignment => assignment.courseId === id);
        return list;
        // setAssignmentList(list);
    }

    useEffect(() => {

        setAssignmentList(getAssignmentListByCourseId(courseId));
    
    }, [courseId]);

    useEffect(() => {
        console.log("assId: ",assignmentId);
        console.log("courseId: ",courseId);

    }, [assignmentId,courseId]);


    return (
        <div>
        <Grid container direction='column' spacing={2}>
            <Grid item >
                {/* make it to center */}
                {/* assh color : #f5f5f5 */}
                <Paper className='paper' sx={{width:'100%', maxWidth:'100%' ,bgcolor:'#f5f5f5', alignContent:'center'}}>
                    <Typography sx={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'20px',paddingBottom:'20px', color:'black', font:'caption'}}>
                        Grading Panel
                    </Typography>
                </Paper>
            
            </Grid>

            <Grid item container spacing={2}>
                <Grid item sm={1}/>
                <Grid item>
                <Autocomplete
                        id="place-select"
                        sx={{ width: 300 }}
                        value={grade}
                        onChange={(event, newValue) => {
                        console.log(newValue);
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
                        value={assignmentId}
                        onChange={(event, newValue) => {
                        console.log("ass: ",newValue.id);
                        setAssignmentId(newValue.id);
                        
                        }}
                        options={assignmentList}
                        autoHighlight
                        getOptionLabel={(option) => option.assTitle}
                        renderOption={(props, option) => (
                            <Box component="li" {...props} >
                            {option.assTitle}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Choose an Assignment"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                        />
                </Grid>
                
                <Grid item>

                    <FormControl variant="outlined" style={{minWidth: 230}}>
                        <InputLabel id="demo-simple-select-outlined-label">Session</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={session}
                            onChange={(e) => setSession(e.target.value)}
                            label="Session"
                            required
                            
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>2020</MenuItem>
                            <MenuItem value={20}>2021</MenuItem>
                            <MenuItem value={30}>2022</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item>
                    {/* make a fancy file input button and take the file */}
                    {/* <input  type='file' onChange={(e) => setAssFile(e.target.files[0])}/> */}
                    {/* put a text with ash back ground */}
                    
                    {/* <Button variant='contained' color='primary' >Attach</Button> */}
                </Grid>
                
                <Grid item sm={1}/>
            </Grid>
            <Grid item container>
                <Grid item sm={3}/>
                <Grid item>
                       <GradeTable assignmentId={assignmentId}/>

                    </Grid>
                <Grid item sm={3}/>
            </Grid>
            <Grid item container>
                <Grid item sm={5}/>
                <Grid item>
                <Button variant="contained" color="primary" style={{marginTop:'20px', marginBottom:'20px'}}>
                    Publish Assignment Scores
                </Button>
                </Grid>
                <Grid item sm={5}/>
            </Grid>


        </Grid>
        </div>
    );






    
}

;
export default Publish;
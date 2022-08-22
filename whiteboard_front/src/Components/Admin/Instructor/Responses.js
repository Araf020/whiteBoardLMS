import { Grid, Typography,Card,CardContent, Paper} from '@mui/material';
import React from 'react';

import useStyles from '../../Dashboard/StudentDashBoard/TeamsStyle';
import {useState, useEffect} from 'react';
import {Button, Autocomplete, Box,TextField, InputLabel, Select, MenuItem, Input, InputAdornment, IconButton, FormHelperText, FormLabel, RadioGroup, Radio, FormGroup, FormControl} from '@mui/material';
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';



const Responses = () => {

    const instructorId = 600000;
    const [courseId, setCourseId] = useState();
    const [session, setSession]= useState();
    const [desc, setDesc] = useState('No Description Added!');
    const [assignmentId, setAssignmentId] = useState();
    const [assignmentList, setAssignmentList] = useState([]);

    const [dueDate, setDueDate] = useState(''); 
    const [courseList, setCourseList] = useState([]);
    const [allAssignment, setAllassignmentList] = useState([]);


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

    useEffect(() => {
        // fetch all courses by instructor id
        fetch('http://localhost:8080/api//instructor/course/'+instructorId, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(data => {
            console.log('courses: ',data);
            setCourseList(data);
        }
        ).catch(err => {
            console.log('courses fetch failed..')
            console.log(err);
        }
        );
    } , []);

   

   

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
                        Response Panel
                    </Typography>
                </Paper>
            
            </Grid>

            <Grid item container spacing={2}>
                <Grid item sm={1}/>
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
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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
                    Get Responses
                </Button>
                </Grid>
                <Grid item sm={5}/>
            </Grid>


        </Grid>
        </div>
    );






    
}

;
export default Responses;
import { Grid, Typography,Card,CardContent, Paper} from '@mui/material';
import React from 'react';

import useStyles from '../../Dashboard/StudentDashBoard/TeamsStyle';
import {useState, useEffect} from 'react';
import {Button, TextField, Box, Autocomplete, InputLabel, Select, MenuItem, Input, InputAdornment, IconButton, FormHelperText, FormLabel, RadioGroup, Radio, FormGroup, FormControl} from '@mui/material';
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';
import {storage} from "../../Firebase_/Conf";
import axios from 'axios';

const CreateAss = () => {

    const [courseId, setCourseId] = useState('');
    const [courseList, setCourseList] = useState([]);
    const [desc, setDesc] = useState('No Description Added!');

    const[assTitle, setAssTitle] = useState('');
    const [dueDate, setDueDate] = useState(''); 

    const [assFile,setAssFile] = useState(null);
    const [assFileUrl,setAssFileUrl] = useState(null);
    const [progress, setProgress] = useState(0);


    const [grade, setGrade]= useState();

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
    const grades = ['five','six','seven','eight','nine','ten'];

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

            if(assFile){
                console.log("uploading");
           
       
                const uploadTask = storage.ref(`files/${assFile.name}`).put(assFile);
                uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                },

                (error) => {
                    console.log(error);
                },

                () => {
                    storage
                    .ref('files')
                    .child(assFile.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        setAssFileUrl(url);
                        


                    })
                });
            }
       }, [assFile]);

    //    print url
    useEffect(() => {
        if(assFileUrl){
            console.log("assFileUrl: ",assFileUrl);
        }
    }, [assFileUrl]);


       const uploadFile = (e) => {
            if(e.target.files[0]){
                
                setAssFile(e.target.files[0]);
                

            }
       }

    //    post data to server
       const handleSubmit = (e) => {
        e.preventDefault();
        // chanfe dueDate format to dd-mm-yyyy hh:mm:ss
        const date = new Date(dueDate);
        const dueDate_ = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        const requestBody = {
            
            title: assTitle,
            description: desc,
            deadline: dueDate_,
            specLink: assFileUrl ? assFileUrl : "No Specification Link",
            courseId: courseId+""
            
            
        };

        console.log("requestBody: ",requestBody);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(requestBody)
        } ;
      
        fetch('http://localhost:8080/api/create_assignment', requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log("data: ",data);
            alert("Assignment Created Successfully!");
        })
        .catch(err =>{ console.log(err);
        alert("Assignment Creation Failed!");
    });


        // axios.post('http://localhost:8080/api/create_assignment', requestOptions)
        // .then(res => {
        //     console.log("res: ",res);
        //     alert("Assignment Created SuccessFully!");
        // })
        // .catch(err =>{ 
        //     console.log(err) ;
        //     alert("something went wrong!");
        // });
        

            // "title": "Assignment on Michael ModhuSudan",
            // "description": "This is an group assignment. The groups will be arranged and i will let you know. The assignment is attached below",
            // "deadline": "2022-08-04 03:50:40",
            // "specLink":"/spec/spec.pdf",
            // "courseId": "2"

       }


    return (
        <div>
        <Grid container direction='column' spacing={2}>
            <Grid item >
                {/* make it to center */}
                {/* assh color : #f5f5f5 */}
                <Paper className='paper' sx={{width:'100%', maxWidth:'100%' ,bgcolor:'#f5f5f5', alignContent:'center'}}>
                    <Typography sx={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'20px',paddingBottom:'20px', color:'black', font:'caption'}}>
                        Create Assignment
                    </Typography>
                </Paper>
            
            </Grid>

            <Grid item container spacing={2}>
                {/* <Grid item sm={1}/> */}
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
                                label="Select a Course"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            />

                </Grid>
                <Grid item >
                    <TextField
                        id="outlined-basic"
                        label="Assignment Title"
                        variant="outlined"
                        // value={assTitle}
                        onChange={(e) => setAssTitle(e.target.value)}
                        style={{bgcolor:'#f5f5f5'}}
                    />
                </Grid>
            
                <Grid item>
                    <TextField
                        id="outlined-basic"
                        label="Due Date"
                        variant="outlined"
                        // value={dueDate}
                        type='datetime-local'
                        InputLabelProps={{
                            shrink: true,
                          }}
                        onChange={(e) => setDueDate(e.target.value)}
                        
                        />
                </Grid>
                
                {/* <Grid item>

                    <FormControl variant="outlined" style={{minWidth: 230}}>
                        <InputLabel id="demo-simple-select-outlined-label">Course</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={courseId}
                            onChange={(e) => setCourseId(e.target.value)}
                            label="Course"
                            
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                </Grid> */}
                <Grid item>
                    {/* make a fancy file input button and take the file */}
                    <input  type='file' onChange={uploadFile}/>
                    <progress value={progress} max="100"/>
                    
                    {/* put a text with ash back ground */}
                    
                    {/* <Button variant='contained' color='primary' >Attach</Button> */}
                </Grid>
                
                {/* <Grid item sm={1}/> */}
            </Grid>
            <Grid item container>
                <Grid item sm={3}/>
                <Grid item>
                        <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            multiline
                            maxRows={10}
                            sx={{minWidth: 600, bgcolor:'#f5f5f5'}}                                                                              
                            // value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </Grid>
                <Grid item sm={3}/>
            </Grid>
            <Grid item container>
                <Grid item sm={5}/>
                <Grid item>
                <Button variant="contained" color="primary" style={{marginTop:'20px', marginBottom:'20px'}}
                onClick={handleSubmit}
                >
                    Create Assignment
                </Button>
                </Grid>
                <Grid item sm={5}/>
            </Grid>


        </Grid>
        </div>
    );






    
}

;
export default CreateAss;
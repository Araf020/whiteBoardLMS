import { Grid, Typography,Card,CardContent} from '@mui/material';
import {React, useState, useEffect} from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Filter from '../Dashboard/Filter/Filter';
import useStyles from './GradeStyle';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Divider} from '@mui/material';
import { useParams } from 'react-router-dom';
// import Assignment icon
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
//  folder icon
import FolderIcon from '@mui/icons-material/Folder';
// grade icon
import GradeIcon from '@mui/icons-material/Grade';
import DueAssignment from '../Assignments/Due';
import CompletedAssignment from '../Assignments/Completed';
import Grade from '../Scores/Grade';
import CourseFiles from '../CourseMaterials/Materials';

const CourseDetail = () => {
    const classes = useStyles();

    // useState to store the option selected
   
    
    const [component, setComponent] = useState(<DueAssignment/>);
    // get the courseId from the url
    // using useParams from react-router-dom
    const { courseTitle, courseId } = useParams();
    

   

    const stdId = 2;
    
    console.log("courseId: ", courseId);
    return (
        <div className={classes.root} >
            <Sidebar/>
            {/* make grid of two column  */}
            {/* first column got 1/4th of area */}
            {/* second column got 3/4th of area */}
            <main className={classes.content}>
                {/* <Typography>Course Detail</Typography> */}
                <Grid container>
                    {/* first column */}
                    <Grid item xs={12} sm={6} md={3}>
                        {/* set paper heifht to inifinity */}

                        <Paper className={classes.paper} style={{height:'760px'}}>
                        
                        {/* set an course image of round sized */}
                        <div className={classes.Img} >
                            <img className={classes.courseImg}  src="https://www.kindpng.com/picc/m/79-793803_books-icon-study-icon-transparent-background-hd-png.png"/>
                        </div>
                        <Typography style={{fontSize:'20px',paddingLeft:'15px', paddingTop:'20px'}}> {courseTitle} </Typography>

                           
                            <Divider />
                            <Divider />

                            
                            

                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                    Course Actions
                                    </ListSubheader>
                                }
                                >
                           {/* choose a listItem and execute an action */}
                           

                               

                                <ListItemButton key={1}  button
                                    onClick={() => {
                                        // print key value of the listItem
                                        console.log("key: ", 1);
                                        console.log("Due clicked");
                                        
                                        
                                       setComponent(<DueAssignment courseId={courseId} studentId={stdId} />);
                                    }
                                    }
                                >

                                    <ListItemText primary="Due Assignments" />
                                    <ListItemIcon>
                                    <AssignmentIcon />
                                    </ListItemIcon>
                                </ListItemButton >
                                
                                <ListItemButton key={2}  onClick={() => {
                                        // print key value of the listItem
                                        console.log("key: ", 2);
                                        console.log("Completed clicked");
                                        
                                        
                                        setComponent(<CompletedAssignment courseId={courseId} studentId={stdId}/>);
                                    }
                                    }>
                                
                                    <ListItemText primary="Completed Assignments" />
                                    <ListItemIcon>
                                    <AssignmentTurnedInIcon />
                                    </ListItemIcon>
                                </ListItemButton>

                                <ListItemButton key={3}  onClick={() => {
                                        // print key value of the listItem
                                        console.log("key: ", 3);
                                        console.log("Grades clicked");
                                        
                                        
                                        setComponent(<Grade courseId={courseId} studentId={stdId} />);

                                    }
                                    }>
                                
                                    <ListItemText primary="Grades" />
                                    <ListItemIcon>
                                    <GradeIcon />
                                    </ListItemIcon>

                                </ListItemButton>

                                <ListItemButton key={4}  onClick={() => {
                                        // print key value of the listItem
                                        console.log("key: ", 4);
                                        console.log("Materials clicked");
                                        
                                        
                                        setComponent(<CourseFiles courseId={courseId} />);
                                    }
                                    }>
                                
                                    <ListItemText primary="Materials" />
                                    <ListItemIcon>
                                    <FolderIcon />
                                    </ListItemIcon>
                                    
                                </ListItemButton>
                        </List>
                           
                        </Paper>
                    </Grid>
                    
                    {/* second column */}
                   {/* which got 3/4th of area */}
                    <Grid item xs={12} sm={6} md={9}>
                        <Paper className={classes.paper} style={{paddingTop:'45px'}}>
                            <Typography>Course Actions</Typography>
                            <Divider />
                            {component}
                            {/* <CourseFiles /> */}
                            {/* <Grade studentId={2} /> */}
                            {/* <DueAssignment courseId={courseId}/> */}

                            
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        



        </div>
    );


}

export default CourseDetail;
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import {useState,useEffect} from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const DueAssignment=(props) => {

    // destructuring the props
    const {studentId} = props;
    const [assignmentList, setAssignmentList] = useState([]);

  useEffect(() => {
    console.log("got stdid:",studentId)
    const url = 'http://localhost:8080/api/assignments_by_student/'+studentId;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // disable cors
        'Access-Control-Allow-Origin': '*',
      }
      })
      .then(res => res.json())
      .then(data => {
        setAssignmentList(data);
        // console.log(data);
        console.log("due assignmentList: ", data);
      }).catch(err => {
        console.log(err);
      }
      );
  } , []);
  const formatDate=(date)=>
  {
    // format to i.e 6 jan, saturday at 3:00pm
    var d = new Date(date);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";

    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var mon = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var date = n  + ", "+mon + + day + ", " + year + " at " + h + ":" + m;
    return date;
  }

  return (
    <Grid container spacing={1} >
       {assignmentList.map(assignment => (
         <Grid item xs={12}>

         <CardActionArea href='/#'>
         <Card style={{ minWidth:275 , height:'80%' , backgroundColor:'#f5f5f5'}}>
         {/* <Card sx={{ minWidth: 275 }}> */}
           <CardContent>
             <Typography  variant="h5"  sx={{ fontSize: 21 }} color="text.secondary" gutterBottom>
              {assignment.title}
             </Typography>
             
             <Typography  sx={{ mb: 1.5 }} color="text.secondary">
               {assignment.description}
             </Typography>
             {/* make it bold */}
             <Typography variant="h5" sx={{ mb: 1.5, font:'caption' }} color="text.secondary">
               {formatDate(assignment.deadline)}
             </Typography>
             
           </CardContent>
           {/* <CardActions>
             <Button size="small">Learn More</Button>
           </CardActions> */}
         </Card>
         </CardActionArea>
         </Grid>

        
        
      ))}
    </Grid>

    
  );
}

export default DueAssignment;

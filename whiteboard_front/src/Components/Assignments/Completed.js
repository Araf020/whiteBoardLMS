import  {React} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useState,useEffect } from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

//  take courseId and studentId as prameters
//  get the completed assignments for the student
//  display them in a card


const Completed=(props) => {

  const {studentId} = props;


  const [assignmentList, setAssignmentList] = useState([]);

  useEffect(() => {
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
        console.log("assignmentList: ", data);
      }).catch(err => {
        console.log(err);
      }
      );
  } , []);
        


   
  return (
    <Grid container spacing={1} >
    
      {assignmentList.map(assignment => (
         <Grid item xs={12}>

         <CardActionArea href='/#'>
         <Card style={{ minWidth:275 , height:'80%' , backgroundColor:'#f5f5f5'}}>
         {/* <Card sx={{ minWidth: 275 }}> */}
           <CardContent>
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               course Name
             </Typography>
             
             <Typography sx={{ mb: 1.5 }} color="text.secondary">
               Assignment Title
             </Typography>
             <Typography sx={{ mb: 1.5 }} color="text.secondary">
               Deadline
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

export default Completed;

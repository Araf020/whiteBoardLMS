import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react';

export default function Enrollment({request,setClickedEnrollId, setECourseId, setStudentId}) {
  // destructure props
  // const {id, name, studentId, courseId,courseName, grade} = request;
  const {enrollId, studentId, courseId} = request;

 

  return (
    <Card sx={{ maxWidth: 1080 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          StudentId: {studentId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Class: 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Course Name:
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Course ID: {courseId}
        </Typography>

      </CardContent>
      <CardActions>
        <Button variant='outlined' size="small" onClick={(e)=>{
          setClickedEnrollId(enrollId);
          setECourseId(courseId);
          setStudentId(studentId);
        }}>Approve</Button>
       
      </CardActions>
    </Card>
  );
}

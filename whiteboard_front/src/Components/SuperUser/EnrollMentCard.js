import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Enrollment({request}) {
  // destructure props
  const {id, name, studentId, courseId,courseName, grade} = request;

  return (
    <Card sx={{ maxWidth: 1080 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Roll: {studentId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Class: {grade}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Course Name: {courseName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Course ID: {courseId}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Approve</Button>
        <Button size="small">Reject</Button>
       
      </CardActions>
    </Card>
  );
}

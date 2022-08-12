import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Enrollment(props) {

  return (
    <Card sx={{ maxWidth: 1080 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          StudentName
        </Typography>
        <Typography variant="body2" color="text.secondary">
          StudentID
        </Typography>
        <Typography variant="body2" color="text.secondary">
          grade
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Approve</Button>
        <Button size="small">Reject</Button>
       
      </CardActions>
    </Card>
  );
}

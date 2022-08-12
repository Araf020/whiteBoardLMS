import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

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
    const { courseId, studentId } = props;

  return (
    <Grid container spacing={1} >
        <Grid item xs={12}>
    
    {/* set card background to linear ash color */}
    <CardActionArea href='/#'>
    <Card style={{ minWidth:275, height:'80%' , backgroundColor:'#f5f5f5'  }}>
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
    </Grid>

    
  );
}

export default DueAssignment;

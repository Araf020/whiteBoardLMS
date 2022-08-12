import { Grid, Typography,Card,CardContent} from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar'
import Filter from '../Filter/Filter';
import useStyles from './AssignmentStyle';

function Assignment() {
    const classes = useStyles();

    return (
      <>
        <div className={classes.root} >
            <Sidebar/>
            <main className={classes.content}  >
              <Grid container>
                  <Grid item lg={3} xs={12} style={{background:'#f7f8fa',boxShadow: '1px 1px 5px  #ccc',}} >
                     <Filter />
                  </Grid>
                  <Grid item lg={9} xs={12} style={{padding:'2px'}} >
                    <div className={classes.gradeHeader} style={{background:'#FFA500'}}>
                        <Typography>Assignment*</Typography>
                    </div>
                    <Grid container className={classes.assignmentBox} >
                      <Grid item lg={6} md={6} xs={12}>
                        <Typography>Assignment</Typography>
                        <Typography>Assignment</Typography>
                      </Grid>
                      <Grid item lg={6} md={6} xs={12} className={classes.text}>
                        <Typography>Assignment</Typography>
                        <Typography>Assignment</Typography>
                      </Grid>
                    </Grid>
                  
                    
                  </Grid>
              </Grid>
            </main>
        </div>
        </>
    );
}

export default Assignment;
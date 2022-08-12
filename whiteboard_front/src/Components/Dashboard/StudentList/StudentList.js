import { Grid, Typography,Card,CardContent} from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar'
import Filter from '../Filter/Filter';
import useStyles from './StudentListStyle';

function StudentList() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Sidebar/>
            <main className={classes.content}  >
            <Grid container>
              <Grid item lg={3} xs={12} style={{background:'#f7f8fa',boxShadow: '1px 1px 5px  #ccc',}} >
                <Filter />
              </Grid>
              <Grid item lg={9} xs={12} style={{paddingLeft:'2px'}} >
              <div className={classes.gradeHeader} style={{background:'#FFA500'}}>
                  <Typography>Students*</Typography>
              </div>
             

              </Grid>
            </Grid>
            </main>
        </div>
    );
}

export default StudentList;
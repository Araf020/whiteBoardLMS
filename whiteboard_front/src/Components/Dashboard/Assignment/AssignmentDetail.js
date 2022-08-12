import { Grid, Typography,Card,CardContent} from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar'
import useStyles from './AssignmentDetailStyle';

function AssignmentDetail() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Sidebar/>
            <main className={classes.content}>

                <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                    <Card className={classes.card} style={{margin:'10px' }}>

                        <Grid container>
                            <Grid item xs={6} md={10} lg={10}>
                                <div className={classes.courseHeader} 
                                // style={{background:'#005671'}}
                                >
                                <Typography className={classes.courseHeaderText} variant="h3">Talent Name</Typography>
                                <Typography className={classes.courseHeaderText} variant="h6">Lead Software Engineer</Typography>
                                </div>
                            </Grid> 
                            <Grid item xs={6} md={2} lg={2}>
                                <img className={classes.courseTeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
                            </Grid> 
                        </Grid>
                    </Card>
                    </Grid> 
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={12} lg={2}>
                        <Card className={classes.card} style={{margin:'10px' }}>
                            <Typography className={classes.courseHeaderText} variant="h6">Outcoming...</Typography>
                            <Typography>Woohoo, no work due soon!</Typography>
                        </Card>
                    </Grid> 
                <Grid item xs={12} md={12} lg={10}>
                <Card className={classes.rightCard} style={{margin:'10px' }}>
                <Grid container>
                    <Grid item lg={1}>
                    <img className={classes.TeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>

                    </Grid>
                    <Grid item lg={11}>
                    <Typography className={classes.courseHeaderText} variant="h6">Announce something to your class</Typography>

                    </Grid>

                </Grid>
                </Card>

                <Card className={classes.rightCard} style={{margin:'10px' }}>

                <Grid container>
                    <Grid item lg={1}>
                    <img className={classes.TeacherImg}  src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>

                    </Grid>
                    <Grid item lg={11}>
                        <Typography  variant="h6">Student Name</Typography>
                        <Typography >Student ID</Typography>
                        <Typography >Description</Typography>
                        <Typography >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>

                    </Grid>

                </Grid>

                </Card>
            </Grid> 
            </Grid>
            </main>
        </div>
    );
}

export default AssignmentDetail;
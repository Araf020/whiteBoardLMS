import { Card, CardActionArea, Typography } from "@mui/material";
import useStyles from '../Dashboard/StudentDashBoard/TeamsStyle';


const CourseCard = ({ course, setCourseId, setCourseTitle }) => {
    const classes = useStyles();

    const {
        courseCode,
        courseDescription,
        courseId,
        courseMarks,
        coursePrerequisite,
        courseTitle,
        creditHour,
        ...rest
    } = course;
    
    // const courseUrl = '/courses/'+ courseTitle +'/'+ courseId;
    return (
        <CardActionArea onClick={(e)=>{
            setCourseId(courseId);
            setCourseTitle(courseTitle);
        }}>
        <Card className={classes.card} style={{background:'#f7f8fa',margin:'10px'}}>
            <div className={classes.courseHeader} style={{background:'#005671'}}>
                        {/* change font in typography */}
                        {/* give some padding in left */}

                        <Typography variant="h5" style={{color:'white',fontWeight:'bold' , paddingLeft:'15px', paddingTop:'10px'}}>{courseTitle}</Typography>
                        {/* <Typography className={classes.courseHeaderText} variant="overline">{courseTitle}</Typography> */}
                        {/* description */}
                        <Typography variant="h6" style={{color:'white',fontWeight:'bold',paddingLeft:'15px'}}>{courseDescription}</Typography>
                        <Typography variant="h9" style={{color:'white',paddingLeft:'15px'}}>{courseCode}</Typography>
            </div>
            <div className={classes.TeacherImg}>
                        <img className={classes.courseTeacherImg}  src="https://www.kindpng.com/picc/m/79-793803_books-icon-study-icon-transparent-background-hd-png.png"/>
            </div>

        </Card>
        </CardActionArea>
    );
}

export default CourseCard;
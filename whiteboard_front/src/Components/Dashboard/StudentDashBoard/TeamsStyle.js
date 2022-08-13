
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
      },
      content: {
        width: "100%",
        paddingTop:'80px',
        paddingLeft:'10px'
      },
      card:{
        width:'auto',
        height:'220px',
        marginRight: '15px',
        boxShadow: '1px 1px 5px #ccc',
        alignItems:'center',
      },
      courseHeader:{
        width:'auto',
        height:'100px',
      },
      TeacherImg:{
        display:'flex',
        justifyContent: 'flex-end',
        margin:'10px'
      },
      courseTeacherImg:{
        height:'80px',
        width:'80px',
        borderRadius:'50%',
        marginTop:'-30px',
    },
    courseHeaderText:{
        padding:'5px',


    }
}));

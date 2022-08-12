
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
      courseHeaderText:{
        paddingLeft:'4%',
        paddingTop:'20px',
    },
      courseHeader:{
        width:'auto',
        height:'100px',
      },
      TeacherImg:{
        display:'flex',
        justifyContent: 'flex-end',
      },
      courseTeacherImg:{
        height:'150px',
        width:'150px',
        borderRadius:'50%',
    },
    TeacherImg:{
        height:'50px',
        width:'50px',
        borderRadius:'50%',
        margin:'10px',
    },
    rightCard:{
        width:'auto',
        marginRight: '15px',
        boxShadow: '1px 1px 5px #ccc',
        margin:'20px',
      },
 
}));

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NoticeIcon from '@mui/icons-material/Campaign';
import Typography from '@mui/material/Typography';
import { CardActionArea, Paper } from '@mui/material';
import {Grid, Box} from '@mui/material';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
    app: {
      height: "100vh",
      padding: 20
    },
    root: {
      display: "flex",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap"
      },
      flexWrap: "nowrap"
    },
    panel: {
      flexGrow: 1,
      padding: 10,
      [theme.breakpoints.down("sm")]: {
        height: "50%"
      }
    },
    scrollable: {
      overflow: "auto"
    }
}));

const Declarations =() => {

  const classes = useStyles();
  const [noticeId, setNoticeId] = React.useState(1);
  const [notice, setNotice] = React.useState([]);

  const notices = [
    {
      id: 1,
      title: 'Notice 1',
      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },
    {
      id: 2,
      title: 'Notice 2',
      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },
    {
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },
    {
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },{
      id: 3,
      title: 'Notice 3',  

      description: 'This is a notice',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      date: '2020-01-01',
    },
  ];

  const getNoticeByid = (id) => {
    return notices.find((notice) => notice.id === id);
  };


  React.useEffect(() => {

     if (noticeId !== null && getNoticeByid(noticeId) !== undefined ){
       
       setNotice(getNoticeByid(noticeId));
    }
   
  }, [noticeId]);



  
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    // make grid of 30%:70%
    // <Box style={{maxHeight: '100vh', overflow: 'auto'}}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
       <Paper className="paper" style={{maxHeight: 640, overflow: 'auto'}}>
        {/* make list items scrollable */}
       
       <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', maxHeight: '100%', overflow: 'auto'}}>
          {notices.map((notice) => (
            
            <React.Fragment >
              <Divider />
              {/* <CardActionArea href="#"> */}
            <ListItem button key={notice.id} alignItems="flex-start"
            onClick={
              () => {
                console.log("Notice clicked");
                console.log("Notice id: ", notice.id);
                setNoticeId(notice.id);
              }
            } >
              <ListItemAvatar>
                <Avatar ><NoticeIcon /></Avatar>
              </ListItemAvatar>
              <ListItemText primary={notice.title} secondary={notice.date} />
            </ListItem>
            {/* </CardActionArea> */}
           </React.Fragment>
          ))}

      </List>
      </Paper>

      </Grid>
      <Grid item xs={12} sm = {8}>
      <Paper className="paper" >
      {/* allign it to center */}

      
      <Typography variant="h5" style={{ justifyContent:'center' , paddingTop:'20px', paddingLeft:'15px'}}>
        
        {notice.title}
      
      </Typography>

      <Typography component="p" style={{paddingLeft:'15px', paddingBottom:'20px'}}>

        {notice.description}

      </Typography>

      {/* fetch a pdf file from url and show it */}
      <iframe src={notice.url} style={{width:'100%', height:'500px'}}></iframe>

      
      </Paper>
      </Grid>
    </Grid>

    
  );
}

export default  Declarations;


// <CardActionArea href='#'>
// <ListItem alignItems="flex-start" 
// onClick={() => {
//   console.log("notice : ", 1);
//   console.log("notice clicked");
// }}
// >
//   <ListItemAvatar>
//     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//   </ListItemAvatar>
//   <ListItemText
//     primary="Brunch this weekend?"
//     secondary={
//       <React.Fragment>
//         <Typography
//           sx={{ display: 'inline' }}
//           component="span"
//           variant="body2"
//           color="text.primary"
//         >
//           Ali Connors
//         </Typography>
//         {/* show some of the string and  .... */}
//         {' — '}{desc.substring(0, 30)}{'…'}

       
       
//       </React.Fragment>
//     }
//   />

// </ListItem>
// </CardActionArea>
// <Divider variant="inset" component="li" />

// <CardActionArea href='#'>
// <ListItem alignItems="flex-start"  onClick={() => {
//   console.log("notice : ", 2);
//   console.log("notice clicked");
// }}>
//   <ListItemAvatar>
//     <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//   </ListItemAvatar>
//   <ListItemText
//     primary="Summer BBQ"
//     secondary={
//       <React.Fragment>
//         <Typography
//           sx={{ display: 'inline' }}
//           component="span"
//           variant="body2"
//           color="text.primary"
//         >
//           to Scott, Alex, Jennifer
//         </Typography>
//         {" — Wish I could come, but I'm out of town this…"}
//       </React.Fragment>
//     }
//   />
// </ListItem>
// </CardActionArea>

// <Divider variant="inset" component="li" />

// <CardActionArea href='#'>
// <ListItem alignItems="flex-start"  onClick={() => {
//   console.log("notice : ", 3);
//   console.log("notice clicked");
// }}>
//   <ListItemAvatar>
//     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//   </ListItemAvatar>
//   <ListItemText
//     primary="Oui Oui"
//     secondary={
//       <React.Fragment>
//         <Typography
//           sx={{ display: 'inline' }}
//           component="span"
//           variant="body2"
//           color="text.primary"
//         >
//           Sandra Adams
//         </Typography>
//         {' — Do you have Paris recommendations? Have you ever…'}
//       </React.Fragment>
//     }
//   />
// </ListItem>
// </CardActionArea>       
import React,{useState}  from "react";
import useStyles from './ChatStyle';
import { Typography,Grid,Button, TextField} from "@mui/material";
import Sidebar from '../Sidebar'
import Filter from '../Filter/Filter';

function Chat() {

    const classes = useStyles();
    const [message, setMessage] = useState('');

    return (
        <div className={classes.root} >
        <Sidebar/>
        <main className={classes.content}  >
        <Grid container>
          <Grid item lg={3} xs={12} style={{background:'#f7f8fa',boxShadow: '1px 1px 5px  #ccc',}} >
          
            <Filter />
          </Grid>
          <Grid item lg={9} xs={12} style={{paddingLeft:'2px',}} >
          <div className={classes.gradeHeader} 
         style={{background:'#FFA500'}}
          >
              <Typography>Chat*</Typography>
          </div>
          <div>
            <Grid container className={classes.message}>
        
                <Grid item lg={11} md={6} className={classes.messageOutput} 
                 style={{background:'#005671'}} 
                >
                    <div >
                        <Typography >message output</Typography>
                    </div>
                </Grid>
                <Grid item lg={1} md={1}  >
                    <div >
                        <img className={classes.profileImg} src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
                    </div>
                </Grid>
            </Grid>
          </div>
          <div>
               
            
          <Grid container className={classes.message}>
      
              <Grid item lg={11} md={6} className={classes.messageOutput} 
            //   style={{background:'#005671'}} 
              >
                  <div >
                      <Typography >message</Typography>
                  </div>
              </Grid>
              <Grid item lg={1} md={1}  >
                  <div >
                      <img className={classes.profileImg} src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_460,q_auto,w_488/v1605879358/jcoffmyvuvo18eovdkuf.webp"/>
                  </div>
              </Grid>
          </Grid>

        </div>
          <div className={classes.footer}>
          <form >
         
            <Grid container >
                <Grid item md={6} lg={7} className={classes.InputField} >
                    <div>
                        <TextField name="message"  className={classes.messageInput} type="text" label="Your message" />
                    </div>
                </Grid>
                <Grid item md={1} lg={1} className={classes.btn}>
                    <Button  className={classes.submitBtn}  type="submit" variant="contained">send</Button>
                </Grid>
            </Grid>
           
        </form>
          </div>
          </Grid>
        </Grid>
        </main>
    </div>
          
    );
}

export default Chat;
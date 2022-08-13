// upload a image file
import React from "react";
import ReactDOM from "react-dom";
import { Grid, Paper } from "@mui/material";
import { Button } from "@mui/material";
import Header from "../../Static/Header";
import { color } from "@mui/system";
const upload = () => {

    // return a message
    
    return (
        <div>
            
            <Header />
            <Grid container spacing={24}>
                {/* put the rounded upload button in center */}
                <Grid item xs={12}/>
                
                <Grid item  container>
                    <Grid item xs={5}/>
                    <Grid item xs={2} >
                    <Button variant="contained" color="primary" style={{
                        margin: "auto",
                        marginTop: "20px",
                        marginBottom: "20px",
                        width: "200px",
                        height: "50px",
                        borderRadius: "100px",
                       
                    
                    }}>
                        Upload
                    </Button>
                    <Paper className="paper" style={{
                        margin: "auto",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        width: "200px",
                        // backgroundColor set to ash
                        backgroundColor: "#f5f5f5",
                    }}>
                          <center>
                          <p>
                            You can upload image file only
                          </p>
                          </center>
                     </Paper>
                   
                </Grid>
                <Grid item xs={5}/>
                </Grid>
               
                </Grid>
          </div>
     );
}

                   
export default upload;
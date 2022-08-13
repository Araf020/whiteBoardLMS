import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import Header from "../../Static/Header";
import Box from "@mui/material";
import TextField from "@mui/material";
import {makeStyles} from "@mui/material";
import { color } from "@mui/system";
import { useState, useEffect } from "react";

// take a image file and preview it


const UploadDetail = (url) => {
    console.log("got url:", url);
     url = 'https://firebasestorage.googleapis.com/v0/b/locations-6642d.appspot.com/o/images%2F282_4ur2-uh.jpg?alt=media&token=6ca1df3d-5b4c-48fb-ac68-874dc5ab45fc'
    return (
        <div>
            <Header />
            <Grid container >
                <Grid item xs={12} sm={1} />
                
                {/* image preview section */}
                <Grid item xs={7} container direction="row" >
                    <Grid item xs = {12} sm={12} spacing={2}>
                        {/* put add button */}
                        <Button variant="contained" color="primary" style={{
                        }}>
                            Add
                        </Button>
                        {/* put a space between two button */}

                        <Button variant="contained" color="primary" style={{
                            marginLeft: "20px",

                        }}>
                            multiple
                        </Button>
                    
                    

                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <Grid item xs={12} sm={12}>
                        {/* put a image preview 200x200*/}
                        <img src={url} alt = "image" style={{
                            width: "600px",
                            height: "400px",
                            
                            margin: "auto",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "20px",
                            marginRight: "20px",
                            backgroundColor: "#f5f5f5",
                        }} />


                    </Grid>
                    </Grid>
                    

                    <Grid item sm={10}/>

                    <Grid item sm={1}>
                   
                    </Grid>


                </Grid>
                {/* image preview section ends */}
                <Grid item xs={3}>
                    <h1>Your image details</h1>
                </Grid>
                <Grid item xs={1} />

            </Grid>
        
        </div>
    );

}

export default UploadDetail;
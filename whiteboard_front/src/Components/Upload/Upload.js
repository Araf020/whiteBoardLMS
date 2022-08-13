
import React, { Component } from 'react'
import { Grid,TextField,Button,MenuItem,InputLabel,Select,FormControl,Box} from "@mui/material";
import Header from '../../Static/Header';
import {useState, useEffect} from "react";
import Autocomplete from '@mui/material/Autocomplete';


const  Upload=()=>{
    const [CategoryList, setCategoryList] = useState([]);
    const [Category, setCategory] = useState('');
    const [post_title, setPostTitle] = useState('');
    const [PostDesc, setPostDesc] = useState('');
    // const [Area, setArea] = useState('');
    // const [City, setCity] = useState('');
    // const [Country, setCountry] = useState('');
    const [PlaceID,setPlace]=useState();
    const [photo_url, setPhotoUrl] = useState('');
    const places=[
        {id:1,name: 'Azimpur',city:'Dhaka',country: 'Bangladesh'},
        {id:2,name: 'Sonaimuri',city:'Noakhali',country: 'Bangladesh'},
        {id:3,name: 'Padma',city:'Rajshahi',country: 'Bangladesh'},
    ]

    const getCategory=category=>{
        return(
            <MenuItem value={category.id}>{category.name}</MenuItem>
        )
    }

    const submitPost=(e)=>
    {   
      
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            //   "comment_txt": commentTxt,
            //   "user": uid,
            //   "post": id
            })
          };
          fetch("http://localhost:8000/api/comment_insert", requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // setcomments(data);
          
          }
          )
          .catch(error => console.log('error', error));
    }


    useEffect(() => {
        fetch("http://localhost:8000/api/categories")
          .then(res => res.json())
          .then(
            (result) => {
              setCategoryList(result);
            }
            // 
          )
      }, []);
    
    return ( //flexGrow={1} display="flex"
    <div>
    <Header/>
      <Grid container>
        <Grid item container xs={6} >
            <TextField
                        id="PhotoUrl"
                        label="Photo Url"
                        sx={{
                            marginBottom:4,
                            marginLeft:4,
                            // marginRight:4,
                            
                        }}
                        />
        </Grid>
{/* style={{overflowY: 'auto'}} */}
        {/* <Grid item container xs={6} > */}
            <Grid item container xs={6} direction="column" >
                <TextField id="postTitle" label="Post Title" sx={{
                    marginBottom:4,
                    marginRight:4,
                    
                }}
                onChange={e => setPostTitle(e.target.value)}
            
                />
                <TextField
                    id="postDescription"
                    multiline
                    rows={2}
                    maxRows={5}
                    label="Post Description"
                    sx={{
                        marginBottom:4,
                        marginRight:4,
                        
                    }}
                    onChange={e => setPostDesc(e.target.value)}
                    />
                    <label>Location</label><br></br>
                    {/* <TextField
                    id="LocationArea"
                    label="Area"
                    sx={{
                        marginBottom:4,
                        marginLeft:4,
                        marginRight:4,
                        
                    }}
                    onChange={e => setArea(e.target.value)}
                    />
                    <TextField
                    id="LocationCity"
                    label="City"
                    sx={{
                        marginBottom:4,
                        marginLeft:4,
                        marginRight:4,
                        
                    }}
                    onChange={e => setCity(e.target.value)}
                    />
                    <TextField
                    id="LocationCountry"
                    label="Country"
                    sx={{
                        marginBottom:2,
                        marginLeft:4,
                        marginRight:4,
                        
                    }}
                    onChange={e => setCountry(e.target.value)}
                    /> */}

                    <Autocomplete
                        id="place-select"
                        sx={{ width: 300 }}
                        value={PlaceID}
                        onChange={(event, newValue) => {
                        console.log(newValue.id);
                        setPlace(newValue.id);
                        
                        }}
                        options={places}
                        autoHighlight
                        getOptionLabel={(option) => option.name+' , '+option.city+' , '+option.country}
                        renderOption={(props, option) => (
                            <Box component="li" {...props} >
                            {option.name} , {option.city} , {option.country}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Choose a place"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                        />
                <label>Keywords</label><br></br>
                
                    <TextField
                        id="AddKeyword"
                        label="Add Keyword"
                        sx={{
                            marginBottom:4,
                            marginLeft:4,
                            marginRight:4,
                            
                        }}
                        // onChange={e => setKeywords(e.target.value)}
                        />
                        {/* <Button variant="outlined" 
                        sx={{
                            marginBottom:4,
                            marginLeft:4,
                            marginRight:4,
                        }}
                        > Add </Button> */}
                    
                
                
                    
                    {/* <TextField
                    label="Suggested Keywords"
                    sx={{
                        marginBottom:4,
                        marginLeft:4,
                        marginRight:4,
                        
                    }}
                    /> */}
                    {/* <label>Keywords</label> */}
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        // labelId="demo-simple-select-label"
                        // id="demo-simple-select"
                        value={Category}
                        // defaultValue = ""
                        label="Category"
                        onChange={e => setCategory(e.target.value)}
                        >
                        <MenuItem value="">
                                    <em>None</em>
                        </MenuItem>
                        {CategoryList.map(category=>getCategory(category))}
                    </Select>
                </FormControl>

                <Button variant="outlined" 
                        sx={{
                            marginTop:4,
                            marginBottom:4,
                            marginLeft:4,
                            marginRight:4,
                        }}
                        onClick={submitPost}
                        > Post </Button>

                          
            </Grid>


      </Grid>
      </div>
    )
  }


export default Upload


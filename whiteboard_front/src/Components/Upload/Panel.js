import React from "react";
import ReactDOM from "react-dom";
import Header from "../../Static/Header";
import {Grid, Button,FormControl,InputLabel,Box, Select, Typography,MenuItem, TextField,Autocomplete, TextareaAutosize, Paper} from "@mui/material";
import {makeStyles} from "@mui/material";
import { color } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";

// take a image file and preview it



const UploadDetail = (url) => {

    const ownerId = 2000;
    console.log("got url:", url);
    url = url.url;
    // url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/UNSC_P5.PNG/1200px-UNSC_P5.PNG";
    const [PlaceID,setPlace]=useState();
    const [CatID,setCat]=useState();
    const [privacy,setPrivacy]=useState();
    const [postDesc,setPostDesc]=useState();
    const [selectedTags, setSelectedTags] = useState([]);
    const [places, setPlaces] = useState([]);
    // const places=[
    //     {id:1,name: 'Azimpur',city:'Dhaka',country: 'Bangladesh'},
    //     {id:2,name: 'Sonaimuri',city:'Noakhali',country: 'Bangladesh'},
    //     {id:3,name: 'Padma',city:'Rajshahi',country: 'Bangladesh'},
    // ]

    const [CategoryList, setCategoryList] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [ tags , setTags] = useState([]);
    const [reqBody,setReqBody]=useState({});
    // url = 'https://firebasestorage.googleapis.com/v0/b/locations-6642d.appspot.com/o/images%2F282_4ur2-uh.jpg?alt=media&token=6ca1df3d-5b4c-48fb-ac68-874dc5ab45fc'

    const getCagegoryName = (id) => {
        console.log("id:", id);
        const cat = CategoryList.find(c => c.id === id);
        console.log("cat:", cat);
        return cat? cat.name:'no name';
    }

    useEffect(() => {
        // set the request body
        // setReqBody({
        //     post_title: postTitle,
        //     post_date: "2022-06-11",
        //     photo_url: url,
        //     description: postDesc,
        //     owner: ownerId,
        //     place: PlaceID,
        //     category: CatID,
        //     privacy: privacy,
        //     tags: selectedTags,
            
        // });
        


        // "post_title": "Destruction",
        // "post_date": "2022-06-11",
        // "description":"Taken in deep breath!",
        // "photo_url": "https://i0.wp.com/www.horroritalia24.it/wp-content/uploads/2018/12/aaaaa-3.jpg?resize=1140%2C640&ssl=1",
        // "owner": 2000,
        // "category": 101,
        // "place":2,
        // "tags":["shadow","dark"]

        console.log("reqBody:", reqBody);
    }, [PlaceID, CatID, privacy, postTitle, selectedTags, url]);
    
    useEffect(() => {
            
        fetch("http://localhost:8000/api/categories")
          .then(res => res.json())
          .then(
            (result) => {
              setCategoryList(result);
              console.log(result);
            }
            // 
          )
            .catch(error => console.log(error));
        
        fetch("http://localhost:8000/api/places")
            .then(res => res.json())
            .then(
                (result) => {
                    setPlaces(result);
                    console.log(result);
                }
            )
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        // sort by name and make it upper case
        setCategoryList(CategoryList.sort((a, b) => a.name.localeCompare(b.name)).map(c => ({...c, name: c.name.toUpperCase()})));
        setCategoryList(CategoryList.sort((a, b) => (a.name > b.name) ? 1 : -1));

    }, [CategoryList]);

    useEffect(() => {
        // get tags
        let body = {url: url};
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        };
        
        fetch("http://localhost:8000/api/upload/tags", reqOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setTags(result);
                    console.log("got tags");
                    console.log(result);
                }
            )
            .catch(error => console.log(error));
            

    }, [url]);

    useEffect(() => {
        console.log("tags:", selectedTags);
    }, [selectedTags]);

    const handlePost = ()=>{
        console.log("posting");
       const postData ={
            post_title: postTitle,
            post_date: new Date(),
            photo_url: url,
            description: postDesc,
            owner: ownerId,
            place: PlaceID,
            category: CatID,
            
            tags: selectedTags,
            
        };
        // setReqBody({
        //     post_title: postTitle,
        //     post_date: "2022-06-11",
        //     photo_url: url,
        //     description: postDesc,
        //     owner: ownerId,
        //     place: PlaceID,
        //     category: CatID,
        //     privacy: privacy,
        //     tags: selectedTags,
            
        // });
        console.log("postData:", postData);
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        };

        fetch("http://localhost:8000/api/upload/photo", reqOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("posted");
                    console.log(result);
                    // redirect to home page
                    window.location.href = "/posts/"+result.id;

                }
            )
            .catch(error => console.log(error));



    
};

    return (
        <div>
            <Header />
            <Grid container >
                <Grid item xs={12} sm={1}  />
                
                {/* image preview section */}
                <Grid item xs={7} container  >
                    
                    <Grid item xs = {12} sm={12} spacing={2}>
                        {/* put add button */}
                        <Paper  style={{padding: '10px', backgroundColor:'#f5f5f5'}} >
                            <Grid container  justify="center" alignItems="center">
                            {/* make it bold and uppercase */}
                            <Grid item sm={5}/>
                            <Grid item>
                            <Typography variant="h6" style={{fontSize:'20',fontFamily:'sans-serif'}}>
                                PREVIEW</Typography>
                            </Grid>
                            <Grid item sm={5}/>
                            </Grid>
                        </Paper>      
                       
                    
                    

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs={12} sm={6}>
                            {/* put a image preview 200x200*/}
                        <Grid item>
                            <img src={url} alt="preview" style={{width:'300%', height:'300%'}}/>
                        </Grid>

                        </Grid>
                    </Grid>
                    

                    <Grid item sm={10}/>

                    <Grid item sm={1}>
                        
                    </Grid>


                </Grid>
                {/* image preview section ends */}
               
                <Grid item xs={3} container direction='column' spacing={2} >
                    <Grid item/>
                    <Grid item/>
                    <Grid item/>
                    <Grid item/>
                    <Grid item/>
                    <Grid item/>
                    <Grid item>
                        <FormControl sx={{ width: 450 }}>
                            <InputLabel id="demo-simple-select-label">Privacy</InputLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                // id="demo-simple-select"
                                value={privacy}
                                // defaultValue = ""
                                label="Privacy"
                                onChange={e => {setPrivacy(e.target.value)
                                console.log(e.target.value)
                                }

                                }
                                >
                                
                                <MenuItem value='public'>Public</MenuItem>
                                <MenuItem value='private'>Private</MenuItem>
                            </Select>   
                        </FormControl>
                    </Grid>

                    <Grid item>
                        <TextField id="postTitle" label="Post Title" 
                             onChange={e => setPostTitle(e.target.value)}
                             sx={{ width: 450 }}
                        />


                    </Grid>

                    <Grid item>
                        <TextField
                            id="postDescription"
                            multiline
                            rows={2}
                            maxRows={5}
                            label="Post Description"
                            
                            onChange={e => setPostDesc(e.target.value)}
                            sx={{ width: 450 }}
                        />
                       
                    </Grid>

                    <Grid item>
                        <Autocomplete
                            id="place-select"
                            sx={{ width: 450 }}
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
                                label="Select a Location"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            />
                    </Grid>

                    <Grid item container direction='column' spacing={2}>
                        <Grid item>
                            <Typography>
                                Suggested Keywords
                            </Typography>
                        </Grid>
                        <Grid item container spacing={1}>
                        
                            
                            {tags.map(tag => (
                                <Grid item>
                                <Button variant="outlined" endIcon={<AddIcon />}
                                onClick={(e)=> setSelectedTags([...selectedTags, tag])} >
                                    {tag}
                                </Button>
                                </Grid>
                            ))}
                            
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            id="place-select"
                            sx={{ width: 450 }}
                            value={CatID}
                            onChange={(event, newValue) => {
                            console.log(newValue.id);
                            setCat(newValue.id);
                            
                            }}

                            options={CategoryList}
                            autoHighlight
                            getOptionLabel={(option) => option.name}
                            renderOption={(props, option) => (
                                <Box component="li" {...props} >
                                {option.name}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Select a Category"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                            />
                    </Grid>
                    
                    <Grid item container>
                        <Grid item sm={2}/>
                        <Button variant="contained" sx={{ width: 350 }}
                        onClick={handlePost}
                        >
                            Post 
                        </Button>
                        <Grid item sm={2}/>
                    </Grid>
                    

                    
                    
                </Grid>

                <Grid item xs={1} />

            </Grid>
        
        </div>
    );

}

export default UploadDetail;




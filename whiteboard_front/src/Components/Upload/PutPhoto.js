import {React, useState, useEffect,useRef} from "react";
import {storage} from "../Firebase_/Conf";
import UploadDetail from "./UploadDetail";
import {Grid, Button,FormControl,InputLabel,Box, Select, Typography,MenuItem, TextField,Autocomplete, TextareaAutosize, Paper} from "@mui/material";
import Header from "../../Static/Header";
import useStyles from './ImageStyle';
import Panel from './Panel';

const FireUpload = () => {
    
    const classes = useStyles();
    const fileInput = useRef();
    const [PlaceID,setPlace]=useState();
    const [CatID,setCat]=useState();
    const places=[
        {id:1,name: 'Azimpur',city:'Dhaka',country: 'Bangladesh'},
        {id:2,name: 'Sonaimuri',city:'Noakhali',country: 'Bangladesh'},
        {id:3,name: 'Padma',city:'Rajshahi',country: 'Bangladesh'},
    ]

    const privacy=['public','only me']
    const [CategoryList, setCategoryList] = useState([]);
    const [Category, setCategory] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([{url: null, file:null}]);
    const [url, setUrl] = useState(null);
    const [urlList, setImgList] = useState([]);
    const [progress, setProgress] = useState(0);

    
    const getPlaceByID = (id) => {
        const place = places.find(place => place.id === id);
        if (place)
            return place.name;
        else
            return id;
    };
    
    

    const getCategory=category=>{
        return(
            <MenuItem value={category.id}>{category.name}</MenuItem>
        )
    }

 

    const handleChange = (e) => {
        // fileInput.current.click();
        
        if(e.target.files[0]){
            // setFile(fileInput.current.files[0]);
            setFile(e.target.files[0]);
            // set files url:url  file:e.target.files[0]
            // setFiles([...files, {url: url, file:e.target.files[0]}]);
            // setFiles([...files, {file:e.target.files[0]}]);

        }
    }

    // upload a file to firebase storage
    // and  get the url

    useEffect(() => {

        // console.log("file: ",file);
        if(file)
    
        {

            console.log("uploading");
           
       
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        },

        (error) => {
            console.log(error);
        },
        () => {
            storage
            .ref('images')
            .child(file.name)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                setUrl(url);
                setImgList([...urlList, url]);
                // set url:url
                setFiles([...files, {url: url, file:file}]);


            })
        });
        }
    }, [file]);


    useEffect(() => {
        if(files)
        {
            console.log("files:", files);
            
        }
    }, [files]);
    useEffect(() => {
        if(url)
        {
            setComponent (
                <Panel url={url}/>
            );
        }
    }, [url]);
    

    const handleupload = () => {
        console.log("uploading");
        if(file)
        {
       
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        },

        (error) => {
            console.log(error);
        },
        () => {
            storage
            .ref('images')
            .child(file.name)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                setUrl(url);
                setImgList([...urlList, url]);
    //             // set url:url
                // setFiles([...files, {url: url, file:file}]);


            })
        });
    }
    else{
        console.log("no file selected");
    }
    };


    console.log("progress: ", progress);

    const [Component, setComponent] = useState(
        
        <div>
            <Grid container direction="column" spacing={5}>
                <Grid item sm={2} />
                <Grid item container>
                    <Grid item sm={5}/>
                    <Grid item>
                        <br/>
                        {/* <UpButton setFile={setFile}/> */}
                        {/* big round upload button */}
                        {/* <input type="file" style={{ "display": "none" }} ref={fileInput} />
                        <Button variant="contained" color="primary" onClick={handleChange}>
                            Upload
                        </Button> */}
                        
                        <input  type="file" onChangeCapture={handleChange} />
                        {/* <Button onClick={(e)=>{
                           
                        }}>
                            Upload
                            
                        </Button> */}
                        {/* <button onClick={ handleupload}>Upload</button> */}
                        {/* <progress value={progress} max="100"/> */}
                        {/* show image in 400x600 */}
                        {url && <img src={url} alt="image" style={{
                            width:600, height:400}} />}
                    </Grid>
                    <Grid item sm={5}/>
                </Grid>
                <Grid item container >
                <Grid item sm={5}/>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" component="h3" sx={{ bgcolor:'#f5f5f5', paddingLeft:'20px', paddingRight:'20px', paddingTop:'20px', paddingBottom:'20px'}}>
                               Only Image file can be uploaded
                            </Typography>
                            </Paper>
                    </Grid>
                    <Grid item sm={5}/>
                </Grid>
            </Grid>
                
        </div>);



    return(
        <div>
            <Header/>
          {Component}
          
          <br/>
        </div>
    );
};

export default FireUpload;
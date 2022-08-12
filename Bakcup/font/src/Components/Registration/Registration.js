import { Card, Typography,TextField,Grid,Checkbox, Button} from '@mui/material';
import React from 'react';
import useStyles from './RegistrationStyle';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Registration() {
    const classes = useStyles();
    const {
      handleSubmit,
      register,    
      formState: { errors },

    } = useForm();
   
    const onSubmit = (data) => {
      console.log(data);
     
    };

    return (
        <div  style={{
            backgroundColor: "#f7f8fa",
            height: "100vh",
            justifyContent: "center",
          }}>
          <div style={{ textAlign: "center" }}>
            <Typography
              className={classes.title}
              variant="h3"
            >
            Want to be a member?
            </Typography>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>

          <Card className={classes.card}>
          <Typography color="primary" variant='h4'>Registration</Typography>
          <br/>
          <Grid>
              <Grid item>
                  <TextField style={{ width: "70%", height: "78px" }} {...register("name", { required: " Name is required" })} error={Boolean(errors.name)} helperText={errors.name?.message} className={classes.textField} id="outlined-basic" name="name" label="Name*" variant="outlined" />
                  <TextField style={{ width: "70%", height: "78px" }} helperText={errors.email?.message} {...register("email", { required: " Email is required" })} error={Boolean(errors.email)} className={classes.textField} id="outlined-basic" name="email" label="Email*" variant="outlined" />
                  <TextField style={{ width: "70%", height: "78px" }} type="password" {...register("password", { required: " Password is required" })} helperText={errors.password?.message} error={Boolean(errors.password)} className={classes.textField} id="outlined-basic" name="password" label="Password*" variant="outlined" />
                  <TextField style={{ width: "70%", height: "78px" }} type="password" error={Boolean(errors.confirmPassword)}  helperText={errors.confirmPassword?.message}  {...register("confirmPassword", { required: " Confirm Password is required" })}  className={classes.textField} id="outlined-basic" name="confirmPassword" label="Confirm Password*" variant="outlined" />
                  <div>
                  <Checkbox
                  color="primary"
                  />
                  Remember Me 
                  </div>
                
                  <Button type="submit" variant="outlined">Register</Button>
                  <Typography className={classes.title}>
                    <strong>Not a member yet?</strong>
                    <Link to="/">
                      <Button  color="primary">Login</Button>
                    </Link>
                  </Typography>
              </Grid>
            </Grid>
          </Card>
        </form>

        </div>
    );
}

export default Registration;
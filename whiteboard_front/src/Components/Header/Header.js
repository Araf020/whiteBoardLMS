import React from 'react';
import { Button } from '@mui/material';
import useStyles from './HeaderStyle';
import { Link } from '@mui/material';


function Header(props) {
  const classes = useStyles();
  const {page } = props;

    return (
      <div className={classes.root}>
      <Link href="/" underline="none">
        <Button  style={{
          color: page == 1 ? "#fff" : "#444",
          background:page == 1 ? "#00756A":'transparent' ,
          fontWeight: page == 1 ? "700" : "400",
        }}
         variant="outlined"  className={classes.btn}>
           Layout 1
        </Button>
        </Link>
        &nbsp;
        <Link href="/layout2" underline="none">
        <Button variant="outlined"   style={{
          color: page == 2 ? "#fff" : "#444",
          background:page == 2 ? "#00756A":'transparent' ,
          fontWeight: page == 2 ? "700" : "400",
        }} className={classes.btn}>
         Layout 2
        </Button>
        </Link>
        &nbsp;
        <Link href="/layout3" underline="none">
        <Button variant="outlined"  style={{
          color: page == 3 ? "#fff" : "#444",
          background:page == 3 ? "#00756A":'transparent' ,
          fontWeight: page == 3 ? "700" : "400",
        }} className={classes.btn}>
          Layout 3
        </Button>
        </Link>

      </div>
    )
  }
  
export default Header;
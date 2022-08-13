import { Grid, Typography} from '@mui/material';
import React from 'react';

import useStyles from '../Dashboard/StudentDashBoard/TeamsStyle';
import {useState, useEffect} from 'react';
import SideDrawer from './SideDrawer';
import Approve from './Approve';

import AssignInstructor from './AssignInstructor';

const Dashboard = () => {
    const classes = useStyles();
    const[component, setComponent] = useState(<div> <AssignInstructor/></div>);
    const[option, setOption] = useState('post');

    useEffect(() => {
        if(option === 'assign'){
            setComponent(
                <div>
                   
                       
                   <AssignInstructor/>
                        
                    
                </div>
            );
        }

        // else if (option === 'announcement'){
        else if(option=== 'approve'){
            setComponent(
            <div>
                <Approve/>
            </div>
            );
        }

        else if (option === 'overview'){
            setComponent(
            <div>
                <h1>overview</h1>
            </div>
            );
        }
       


    }, [option]);


    return (
        <div className={classes.root}>
            <SideDrawer setOption={setOption}/>
            <main className={classes.content}>
                {component}
            </main>
        </div>
    );

};

export default Dashboard;
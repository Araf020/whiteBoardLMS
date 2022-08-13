import { Grid, Typography,Card,CardContent} from '@mui/material';
import React from 'react';

import useStyles from '../../Dashboard/StudentDashBoard/TeamsStyle';
import {useState, useEffect} from 'react';
import Sidebar from './Sidebar_A';
import CreateAssignment from './CreateAssignment';
import Responses from './Responses';
import Publish from './PublishResult';
import Announce from './Announce';

const Dashboard = () => {
    const classes = useStyles();
    const[component, setComponent] = useState(<div></div>);
    const[option, setOption] = useState('post');

    useEffect(() => {
        if(option === 'post'){
            setComponent(
                <div>
                   
                       
                        <CreateAssignment />
                        
                    
                </div>
            );
        }

        // else if (option === 'announcement'){
        else if(option=== 'announce'){
            setComponent(
            <div>
                <Announce/>
            </div>
            );
        }

        else if (option === 'submission'){
            setComponent(
            <div>
                <Responses />
            </div>
            );
        }
        else if (option === 'grade'){
            setComponent(
                <div>
                    <Publish/>
                </div>
            );
        }


    }, [option]);


    return (
        <div className={classes.root}>
            <Sidebar setOption={setOption}/>
            <main className={classes.content}>
                {component}
            </main>
        </div>
    );

};

export default Dashboard;
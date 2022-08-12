import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper,TextField, Typography} from '@mui/material';
import {useState, useEffect} from 'react';

function createData(roll) {
  return { roll};
}

const studentList = [
    '1','2','3','4','5','6'
];

const rows = [];

// createData for each student from studentList and add it to rows
for(let i=0;i<studentList.length;i++){
    rows.push(createData(studentList[i]));
}



export default function BasicTable(assignmentId) {
    
    const [assTitle, setAssTitle] = useState();
    const [studentPoint, setStudentPoint] = useState([{}]);

    useEffect(() => {
        console.log("studetnPointList: ",studentPoint);
    }, [studentPoint]);



  return (
    <TableContainer component={Paper} sx={{ maxHeight:500,overflow:'auto'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'#005671'}}>
          <TableRow>
            <TableCell>
                <Typography sx={{color:'white'}}>STUDENT ROLL</Typography>
            </TableCell>
            <TableCell align="right">
                <Typography sx={{color:'white', paddingRight:'20px'}}>POINTS</Typography>
            </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.roll}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.roll}
              </TableCell>
              <TableCell align="right">
              <TextField
                        id="outlined-basic"
                        label="Points"
                        variant="outlined"
                        
                        type='number'
                        InputLabelProps={{
                            shrink: true,
                          }}
                        sx={{maxWidth:100}}

                        onChange={(e) =>{
                            console.log(e.target.value);
                            setStudentPoint({...studentPoint, [row.roll]:e.target.value});
                        }}
                        
                        />
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

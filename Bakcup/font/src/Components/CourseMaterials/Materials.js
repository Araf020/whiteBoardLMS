import { Grid, Typography,Card,CardContent} from '@mui/material';
import React from 'react';
import useStyles from '../Scores/Style';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const columns: Column[] = [
  { id: 'fName', label: 'File Name', minWidth: 170 },
  { id: 'desc', label: 'Description', minWidth: 300 },
 
];

function createData(
  fName: string,
  desc: string,
 
): Data {
  // const density = population / size;
  return { fName, desc };
}

const rows = [
  createData('India', 'IN'),
  createData('China', 'CN'),
  createData('Italy', 'IT' ),
  createData('United States', 'US'),
  createData('Canada', 'CA'),
  createData('Australia', 'AU'),
  createData('Germany', 'DE' ),
  createData('Ireland', 'IE'),
  createData('Mexico', 'MX'),
  createData('Japan', 'JP'),
  createData('France', 'FR' ),
  createData('United Kingdom', 'GB' ),
  createData('Russia', 'RU'),
  createData('Nigeria', 'NG'),
  createData('Brazil', 'BR'),
];


const CourseMaterials = (courseId) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

 
    
    return (
        <div>
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" colSpan={2}>
                        Course Materials
                      </TableCell>
                      <TableCell align="center" colSpan={3}>
                        Details
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ top: 57, minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            
            </Paper>
        </div>
    );
}

export default CourseMaterials;
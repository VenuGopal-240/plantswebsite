import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Button } from '@mui/material';
import { myProvider } from '../App';

const columns = [
    { id: 'CreatedOn', label: 'CreatedOn', minWidth:200 },
    { id: 'username', label: 'Username', minWidth: 200 },
    { id: 'firstName', label: 'First Name', minWidth: 200 },
    // { id: 'lastName', label: 'Last Name', minWidth: 200 },
    { id: 'mobile', label: 'Mobile', minWidth: 200 },
    
    { id: 'gender', label: 'Gender', minWidth: 200 },
    { id: 'course', label: 'Course', minWidth: 200 },
    // { id: 'edit', label: 'Edit', minWidth: 50 },
    // { id: 'delete', label: 'Delete', minWidth: 50 },
];

 const AdminTable=()=> {
    const {data}  = React.useContext(myProvider)
    return (
        <TableContainer
        sx={{
            maxHeight: 700, 
            overflow: 'auto', 
            width: '100%' 
        }}
    >
        <Table stickyHeader aria-label="sticky table" className="table">
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align="left"
                            style={{ width: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.map((e, i) => (
                    <TableRow key={i}>
                        <TableCell>Date</TableCell>
                        <TableCell>{e.userName}</TableCell>
                        <TableCell>{e.firstName}</TableCell>
                        {/* <TableCell>{e.lastName}</TableCell> */}
                        <TableCell>{e.mobile}</TableCell>
                        <TableCell>{e.gender}</TableCell>
                        <TableCell>{e.course}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    
    );
}
export default AdminTable;
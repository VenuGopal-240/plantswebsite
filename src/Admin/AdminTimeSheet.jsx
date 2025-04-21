import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { myProvider } from "../App";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";


const AdminTimeSheet = () => {
    const { data,setNotification } = React.useContext(myProvider);
    const navigate = useNavigate();
    const columns = [
        { id: 'Month', label: 'Month', minWidth: 300 },
        // { id: 'EndDay', label: 'EndDay', minWidth: 300 },
        { id: 'firstName', label: 'First Name', minWidth: 300 },
        { id: 'status', label: 'Status', minWidth: 200 },
        { id: 'view', label: 'View', minWidth: 300 },

        // { id: 'gender', label: 'Gender', minWidth: 200 },
        // { id: 'course', label: 'Course', minWidth: 200 },
        // { id: 'edit', label: 'Edit', minWidth: 50 },
        // { id: 'delete', label: 'Delete', minWidth: 50 },
    ];
    const handleNavigate=(obj)=>{
        console.log("Hello",obj);
        navigate("/header/adminoperations");
        setNotification([
            {
                message: "Open Preview",
                severity: "success",
            },
        ]);
        removeNotification();
    }
    const removeNotification = () => {
        setTimeout(() => {
            setNotification([]);
        }, 1000);
    };
    return (
        <div style={{
            display: "flex", justifyContent: "center", alignContent: 'center', width: "98vw", height: "100vh", paddingTop: "4rem",
            // minHeight: "100vh",
            backgroundColor: "#DDEFD6",
            // backgroundImage:
            //     'url("https://img.freepik.com/free-photo/detailed-structure-marble-natural-pattern-background-design_1258-79155.jpg?t=st=1741858893~exp=1741862493~hmac=cebb08cbd4599ad01ae8de79595e2e754c9d7b9f0283c6f9288e8a597d6086cf&w=900")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // marginTop: "4rem",
            boxSizing: "border-box"
        }}>
            <div>
                <h1 style={{ textAlign: 'center' }}>AdminTimeSheet</h1>

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
                        <TableBody sx={{ color:"white"}}>
                            {data?.map((e, i) => (
                                <TableRow key={i} >
                                    <TableCell >Date</TableCell>
                                    <TableCell>{e.userName}</TableCell>
                                    <TableCell>{e.firstName}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={()=>handleNavigate(e)}>
                                        <VisibilityIcon/>
                                        </IconButton>
                                    </TableCell>
                                    {/* <TableCell >Date</TableCell>
                                    <TableCell>{e.userName}</TableCell>
                                    <TableCell>{e.firstName}</TableCell>
                                    <TableCell>{e.mobile}</TableCell> */}


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>

    )
}
export default AdminTimeSheet;
import { Button, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import AdminTable from "./AdminTable";

const Admin = () => {

    return (
        <>
            <div style={{
                display: "flex", justifyContent: "center", alignContent: 'center', width: "98vw", height: "100vh", paddingTop: "5rem"

                ,
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
                    <h1 style={{ textAlign: 'center' }}>Student's List</h1>
                    <AdminTable />
                </div>
            </div>
        </>
    )
}
export default Admin;
import { Button, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { myProvider } from "../App";
import { useNavigate } from "react-router-dom";

const AdminOperation=()=>{
    const navigate = useNavigate();
    return(
        <>
           <div style={{display:"flex",justifyContent:"center",alignContent:"center",paddingTop:"4rem",width:"100vw"}}>
            <h1>Hello</h1>
          <Button variant="contained"  onClick={()=>navigate("/header/admintimesheet")}> Back</Button>
         
           </div>
          
        </>
    )
}
export default AdminOperation;
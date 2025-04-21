import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";

const AddMedicineList = ({setMedicines,medicines,setOpenDialog}) => {


     const useData = useRef();
    const handleData=(e)=>{
        useData.current = { ...useData.current, [e.target.name]: e.target.value, }
    }
    const handleDoctor=()=>{
        setMedicines([...medicines,useData.current]);
        setOpenDialog(false);
    }

    return (
        <>
            <div >
                <TextField style={{margin:"1rem"}} label="Name" variant="outlined" id="name" name="name" type="text" onChange={handleData}/>
                <TextField style={{margin:"1rem"}} label="rate" variant="outlined" id="rate"name="rate" type="text" onChange={handleData}/>
                <TextField  style={{margin:"1rem"}}label="quantity" variant="outlined" name="quantity"id="quantity" type="text" onChange={handleData}/>
                <TextField style={{margin:"1rem"}} label="category" variant="outlined" name="category" id="category" type="text" onChange={handleData}/>
                <label style={{margin:"1rem",color:"red"}} htmlFor="date">ExpiryDate:   </label>
                <TextField  style={{margin:"1rem",width:"13rem  "}} type="date" name="expiryDate" variant="outlined" onChange={handleData}/><br />
                 <Button  style={{margin:"1rem",marginRight:"5rem"}} onClick={()=>setOpenDialog(false)}>cancel</Button>
                 <Button style={{margin:"1rem"}} onClick={handleDoctor}>Add</Button>
            </div>
        </>
    )

}
export default AddMedicineList;
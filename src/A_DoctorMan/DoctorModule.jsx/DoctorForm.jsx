import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";

const DoctorForm = ({doctorsList,setDoctorList,setNewDoctor}) => {

    console.log(doctorsList);

     const useData = useRef();
    const handleData=(e)=>{
        useData.current = { ...useData.current, [e.target.name]: e.target.value, }
    }
    const handleDoctor=()=>{
        setDoctorList([...doctorsList,useData.current]);
        setNewDoctor(false);
    }

    return (
        <>
            <div >
                <TextField style={{margin:"1rem"}} label="Id" variant="outlined" name="id" id="id" type="number" onChange={handleData} />
                <TextField style={{margin:"1rem"}} label="Name" variant="outlined" id="name" name="name" type="text" onChange={handleData}/>
                <TextField style={{margin:"1rem"}} label="Gender" variant="outlined" id="gender"name="gender" type="text" onChange={handleData}/>
                <TextField  style={{margin:"1rem"}}label="age" variant="outlined" name="age"id="age" type="text" onChange={handleData}/>
                <TextField style={{margin:"1rem"}} label="specialization" variant="outlined" name="specialization" id="specialization" type="text" onChange={handleData}/>
                <TextField style={{margin:"1rem"}} label="Experience" variant="outlined" id="experience"name="experience" type="text" onChange={handleData}/>
                <TextField style={{margin:"1rem"}} label="contact" variant="outlined" id="contact"name="contact" type="text" onChange={handleData}/>
                 <TextField style={{margin:"1rem"}} label="email" variant="outlined" id="email" name="email" type="text" onChange={handleData}/>
                 <TextField  style={{margin:"1rem"}}label="location" variant="outlined" id="location" name="location" type="text" onChange={handleData}/><br /><br />   
                 <Button  style={{margin:"1rem",marginRight:"5rem"}} onClick={()=>setNewDoctor(false)}>cancel</Button>
                 <Button style={{margin:"1rem"}} onClick={handleDoctor}>Add</Button>
            </div>
        </>
    )

}
export default DoctorForm;
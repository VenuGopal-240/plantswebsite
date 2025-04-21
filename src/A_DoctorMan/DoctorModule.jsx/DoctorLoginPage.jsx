import React from "react";
import LoginDetails from "./LoginDetails";

const DoctorLoginPage=()=>{
    return(
        <>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{border:"1px solid black",width:"60vw",height:"auto"}}>
                    <img src="https://img.freepik.com/premium-photo/futuristic-healthcare-room-modern-hospital-ai-generated_778980-2571.jpg?w=2000" alt="" style={{width:"60vw",height:"98vh"}}  />
                </div>
                <div style={{border:"1px solid black",width:"40vw",height:"98vh"}}>
                    <LoginDetails/>
                </div>
            </div>
        </>
    )
}
export default DoctorLoginPage;
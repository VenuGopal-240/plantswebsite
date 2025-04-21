import React, { useEffect } from "react";

const DoctorList = ({setDoctorList,doctorsList}) => {
   

    return (
        <>
            <table style={{marginTop:"5rem",width:"98%"}}>
                <thead>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>specialization</th>
                    <th>experience</th>
                    <th>location</th>
                </thead>
                <tbody>
                    {
                        doctorsList?.map((e)=>(
                            <tr style={{backgroundColor:"green"}}>
                                <td>{e.name}</td>
                                <td>{e.gender}</td>
                                <td>{e.specialization}</td>
                                <td>{e.experience}</td>
                                <td>{e.location}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default DoctorList;
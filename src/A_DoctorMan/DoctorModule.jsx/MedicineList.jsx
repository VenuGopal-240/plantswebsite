import react, { useState } from "react"

const MedicineList=({medicines})=>{
    
  

    return(
        <>
              <table style={{marginTop:"5rem",width:"98%"}}>
                <thead>
                    <th>Name</th>
                    <th>rate</th>
                    <th>quantity</th>
                    <th>expiryDate</th>
                    <th>category</th>
                </thead>
                <tbody>
                    {
                        medicines?.map((e)=>(
                            <tr style={{backgroundColor:"green"}}>
                                <td>{e.name}</td>
                                <td>{e.rate}</td>
                                <td>{e.quantity}</td>
                                <td>{e.expiryDate}</td>
                                <td>{e.category}</td>
                            </tr>
                        ))
                    }   
                </tbody>
            </table>
        </>
    )
}
export default MedicineList;
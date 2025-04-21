import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import './CartStyles.css'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router-dom";
import DialogBox from "../Dialog/Dialog";
// import Checkout from "../PaymentPage/PaymentPage";
export const Cart = () => {
    const { duplicatePlants, order, setDuplicatesPlants, setPlants, plants, setOriginals, originals,userDetails } = useContext(MyContext);

    const [count, setCount] = useState(0);
    const [mrp, setMrp] = useState(0);
    const [total, setTotal] = useState(0);

    // const [open,setOpen] = useState(false);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);

    // console.log(userDetails);
    useEffect(() => {
        setCount(duplicatePlants.length);
        let a = duplicatePlants.reduce((acc, ele) => (acc + ele.total), 0);
        setMrp(a);
        let total = a - 50 + 50;
        setTotal(total);
    }, [duplicatePlants]);
    const increment = (data) => {
        setDuplicatesPlants((list) =>
            list?.map((obj) =>
                obj?.id === data?.id
                    ? { ...obj, quantity: parseInt(obj.quantity) + 1 }
                    : obj
            )
        );
        setPlants((list) =>
            list?.map((obj) =>
                obj?.id === data?.id
                    ? { ...obj, quantity: parseInt(obj.quantity) + 1 }
                    : obj
            )
        );
        setOriginals((list) =>
            list?.map((obj) =>
                obj?.id === data?.id
                    ? { ...obj, quantity: parseInt(obj.quantity) + 1 }
                    : obj
            )
        );
    }
    const decrement = (data) => {
        if(data.quantity<=1){
            alert("Cart Minimun Reached")
           }
           else{
        setDuplicatesPlants((list) =>
            list?.map((obj) =>
                obj?.id === data?.id
                    ? { ...obj, quantity: parseInt(obj.quantity) - 1 }
                    : obj
            )
        );
        setPlants((list) =>
            list?.map((obj) =>
                obj?.id === data?.id
                    ? { ...obj, quantity: parseInt(obj.quantity) - 1 }
                    : obj
            )
        );
        setOriginals((list) =>
            list?.map((obj) =>
                obj?.id === data?.id
                    ? { ...obj, quantity: parseInt(obj.quantity) - 1 }
                    : obj
            )
        );
    }
    }

   

    const onDelete=(data)=>{
        let deletes = duplicatePlants.filter((e)=>e.id!==data.id);
        setDuplicatesPlants(deletes);
        setPlants((list) =>
            list?.map((obj) =>
              obj?.id === data?.id
                ? { ...obj, cartStatus: false ,quantity:1}
                : obj
            )
          );
          setOriginals((list) =>
            list?.map((obj) =>
              obj?.id === data?.id
                ? { ...obj, cartStatus: false ,quantity:1}
                : obj
            )
          );

    }

    return (
        <>
            <div id="tab" style={{ marginTop: "5rem" }}>
                <div>
                    <table >
                        <thead>
                            <tr x={{ color: "white", backgroundColor: "#393440" }}>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {
                            duplicatePlants.length >=1 ?   <tbody>
                            {
                                duplicatePlants?.map((e) => (
                                    <tr>
                                        <td><img src={e.image} alt={e.name} width='100%' height='100px' objectFit='cover' borderRadius='4px' /></td>
                                        <td>{e.name}</td>
                                        <td>{e.price}</td>
                                        <td><button onClick={() => increment(e)}>+</button>{e.quantity} <button onClick={() => decrement(e)}>-</button></td>
                                        <td>{e.total = e.price * e.quantity}</td>
                                        <td><DeleteIcon onClick={()=>onDelete(e)} style={{color:"yellowgreen"}}/></td>
                                    </tr>
                                ))
                            }
                            {
                                plants?.forEach((e) => e.total = e.price * e.quantity)
                            }
                            {
                                originals?.forEach((e) => e.total = e.price * e.quantity)
                            }
                        </tbody> : <tr style={{columnSpan:"5"}}><td>'NO Data Found'</td></tr>
                        }
                      
                    </table>
                </div>
                <div style={{ backgroundColor: "whitesmoke", marginRight: "5rem", marginTop: "4rem", position: 'fixed', right: "8vw", width: "20vw", textAlign: "center" }}>
                    <h3 >PriceDetails</h3><hr />
                    <h3>MRP({count})Items:{mrp}</h3>
                    <h3>Product Discount:50/-</h3>
                    <h3>Delivery Fee:50/-</h3><hr />
                    <h2>Total Amount: {total}</h2>
                    {total>=1 ?   <Button variant="contained" color="success" onClick={handleClickOpen}>
                      BUY
                    </Button>  : ' '}
                    
                </div>
            </div>
           {open ? <DialogBox open={open} setOpen={setOpen} userDetails={userDetails} total={total} setDuplicatesPlants={setDuplicatesPlants} setPlants={setPlants} setOriginals={setOriginals}/> : ''}
        </>
    )
}
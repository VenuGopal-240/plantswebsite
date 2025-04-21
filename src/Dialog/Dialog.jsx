import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React from "react";
import plant from "../Data";
import Swal from 'sweetalert2';

const DialogBox = ({ open, setOpen, userDetails, total,setDuplicatesPlants,setPlants ,setOriginals}) => {
    console.log(userDetails)
    const handleClose = () => setOpen(false);
    const handleOrders=()=>{
        setOpen(false);
        setDuplicatesPlants([]);
        Swal.fire({
            title: 'Success!',
            text: 'Order Success!',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
          });
        setOriginals(plant);
        setPlants(plant);
    }
    return (
        <>
            <Dialog open={open} onClose={handleClose} sx={{
                "& .MuiDialog-paper": {
                    width: "30vw", // Set custom width
                    height: "auto", // Set custom height
                    color:"green",
                    backgroundColor:" #3c3742"
                },
            }} >
                <DialogTitle >Payment page</DialogTitle>
                <DialogContent>
                    <h3>Name:{userDetails?.name}</h3>
                    <h3>TotalAmount:{total}</h3>
                    <TextField name="userName" id="name" label="Address" variant="outlined" style={{ marginBottom: "2rem" }} /><br />
                    <TextField name="userName" id="name" label="ContactNumber" variant="outlined" style={{ marginBottom: "2rem" }} /><br/>
                    {/* <TextField name="userName" id="name" label="UserName" variant="outlined" style={{ marginBottom: "2rem" }} /> */}
                *Note:Only accept the Cash on delivery
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleOrders} color="secondary">
                        PlaceOrder
                    </Button>
                </DialogActions>
            </Dialog >
        </>
    )
}
export default DialogBox;

import { Button, DialogContent } from "@mui/material";
import React from "react";

export const Dialog=()=>{
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };
  
    return (
      <div>
      
        <Button variant="outlined" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <DialogContent
          open={open}
          onClose={handleClose}
        />
      </div>
    );
  
}
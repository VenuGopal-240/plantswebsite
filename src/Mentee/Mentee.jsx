import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useContext, useState } from "react";
import MenteeTable from "./MenteeTable";
import { myProvider } from "../App";
import FormDetails from "./FormDetails";
import CloseIcon from '@mui/icons-material/Close';

const Mentee = () => {

    const { data, setData ,setNotification} = useContext(myProvider);
    const [openDialog, setOpenDialog] = useState(false);
    const [obj, setObj] = useState({});
    const [openDelete,setOpenDelete] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };


    const handleCloseDialog = () => {
        setOpenDialog(false);
        setObj({});
    };
    
      const handleOpenDelete = (e) => {
        console.log(e)
        setObj(e)
        setOpenDelete(true);
    };


    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    const submit = (value) => {
        console.log("User", value);
        setData([...data, value]);
        handleCloseDialog();
        setObj({});
        setNotification([
            {
                message: "New User Addes Success",
                severity: "success",
            },
        ]);
        removeNotification();
    }

    const handleEdit = (obj) => {
        handleOpenDialog();
        setObj(obj);
    }

    const handleDelete=()=>{
        // console.log(obj);
        setData(data?.filter((e)=>e.userName!==obj?.userName));
        handleCloseDelete();
        setObj({})
        setNotification([
            {
                message: "Delete Success",
                severity: "success",
            },
        ]);
        removeNotification();
    }

    const removeNotification = () => {
        setTimeout(() => {
            setNotification([]);
        }, 5000);
    };
    
    return (
        <>
            <div style={{

                // minHeight: "100vh",
                backgroundColor: "#DDEFD6",

                // backgroundImage:
                //     'url("https://img.freepik.com/free-photo/detailed-structure-marble-natural-pattern-background-design_1258-79155.jpg?t=st=1741858893~exp=1741862493~hmac=cebb08cbd4599ad01ae8de79595e2e754c9d7b9f0283c6f9288e8a597d6086cf&w=900")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginTop: "4rem",
                boxSizing: "border-box"
                , display: "flex", justifyContent: "center", alignContent: 'center', width: "98vw", height: "93.5vh",
            }}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Mentee</h1>
                    <div style={{ display: 'flex', justifyContent: "flex-end", margin: "2rem" }}>
                        <Button variant="contained" onClick={handleOpenDialog}>CreateUser</Button>
                    </div>
                    <MenteeTable data={data} setData={setData} handleEdit={handleEdit} handleOpenDelete={handleOpenDelete}/>
                </div>
            </div>
            <Dialog sx={{width:"90vw"}}  open={openDialog} >
              {obj?.userName ? <DialogTitle>Edit the Existing User</DialogTitle> : <DialogTitle>Create a New User</DialogTitle> }  
                <IconButton
                    aria-label="close"
                    onClick={handleCloseDialog}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon/>
                </IconButton>
                <DialogContent>
                    <FormDetails submit={submit} obj={obj} handleCloseDialog={handleCloseDialog}/>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCloseDialog} color="primary">
                        Save
                    </Button>
                </DialogActions> */}
            </Dialog>

              <Dialog open={openDelete} onClose={handleCloseDelete} >
              <DialogTitle>Delete the Existing user</DialogTitle>
                     {/* <DialogContent>Conform to Deletr</DialogContent> */}
                     <DialogActions>
                    <Button onClick={handleCloseDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="primary">
                        conform
                    </Button>
                </DialogActions>
              </Dialog>
        </>
    )
}
export default Mentee;
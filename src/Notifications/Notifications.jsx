import React,{forwardRef,useContext,useEffect} from "react";
import Box from "@mui/material/Box";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { myProvider } from "../App";

const Alert = forwardRef(function Alert(props, ref){
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = () => {
    const { notification} = useContext(myProvider);

    const handleClose = (event,reason) => {
        if(reason === "clickaway"){
            return;
        }
    };

    if(!notification?.length){
        return null;
    }else{
        return(
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right"}}
                open
                onClose={handleClose}
            >
                <Box
                    width={"100%"}
                    display="flex"
                    sx={{ marginRight:4 }}
                    flexDirection="column"
                   >
                    {notification.map((n) => (
                        <Alert 
                            severity={n.severity}
                            sx={{ width: "100%",marginBottom:1}}
                            >
                                {n.message}
                            </Alert>
                    ))}
                    </Box> 

            </Snackbar>
        );
    }
};

export default Notification;
import { Height, Opacity } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react"
import { Global_context } from "./Context.api";

const Message = ({ title }) => {

    const { message, setMessage } = useContext(Global_context)

    return (
        <Container
            disableGutters
            maxWidth={false}
            onClick={() => setMessage(!message)}
            sx={{
                position: "fixed",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(248, 248, 248,90%)",
                zIndex: 1000,
                cursor: "pointer"
            }}>
            <Stack sx={{
                width: "30%",
                height: "10%",
                bgcolor: "white",
                borderRadius: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px rgba(128, 128, 128,20%)",
                borderStyle: "dashed"
            }}>
                <Typography sx={{ color: "red", fontSize: "20px" }}>{title}</Typography>
                <Typography sx={{ color: "red", fontSize: "10px" }}>Click away to close</Typography>
            </Stack>
        </Container>
    )
};



export default Message;

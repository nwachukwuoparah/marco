import { Container, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Global_context } from "../Component/Context.api";
import { Padding } from "@mui/icons-material";
import Pie_chart from "../Component/Pie.chart ";

const Transaction = (props) => {
  
  const { setRouth } = useContext(Global_context);

  useEffect(() => {
    setRouth("Transactions");
  }, []);


  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "97.5%", display: "flex", gap: "10px"}}
    >
      <Stack
        sx={{
          width: "70%",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            width: "100%",
            padding: " 15px",
            bgcolor: "rgb(128, 147, 211,20%)",
          }}
        >
            <Typography> NAME</Typography>
          <Typography>TRANSACTION ID</Typography>
          <Typography>DATE</Typography>
          
          <Typography>STATUS</Typography>
          <Typography>AMOUNT</Typography>
        </Stack>

        <Stack
          sx={{
            width: "100%",
            maxHeight: "75vh",
            overflowY: "scroll",
            alignItems: "center",
          }}
        >
          {Array.from(Array(20)).map((i,index) => (
            <Stack
            key={index}
              direction="row"
              sx={{
                justifyContent: "space-between",
                width: "100%",
                padding: " 10px",
                cursor: "pointer",
                borderBottom: " 1px solid #e3ebf6",
                transition: "all .5s",
                "&:hover": {
                  bgcolor: "rgb(128, 147, 211,10%)",
                  borderTop: " 1px solid #f8f8f8",
                },
              }}
            >
              <Stack
                direction="row"
                sx={{
                  width: "58%",
                  justifyContent: "space-between",
                }}
              >
                   <Typography>NAME</Typography>
                <Typography>#*****1245</Typography>
                <Typography>{new Date().toUTCString().slice(5, 16)}</Typography>
             
              </Stack>
              <Stack
                direction="row"
                sx={{
                  width: "30%",
                  justifyContent: "space-between",
         }}
              >
                <Typography
                  sx={{
                    bgcolor: "rgb(3, 216, 127,45%)",
                    padding: "5px 10px",
                    fontSize: "10px",
                    borderRadius: "20px",
                  }}
                >
                  SUSCESS
                </Typography>
                <Typography>20000000</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack
        spacing={3}
        sx={{
          borderRadius: "10px",
          width: "30%",
          bgcolor: "#f8f8f8",
          bgcolor: "rgb(128, 147, 211,20%)",
          height: "55vh",
          justifyContent: "center",
        }}
      >
        <Pie_chart />
        <Stack spacing={0.5} sx={{ alignSelf: "center" }}>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <Stack
              sx={{
                width: "10px",
                height: "10px",
                bgcolor: "#84e6ff",
                borderRadius: "2px",
              }}
            ></Stack>
            <Typography>Income</Typography>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <Stack
              sx={{
                width: "10px",
                height: "10px",
                bgcolor: "#008ffb",
                borderRadius: "2px",
              }}
            ></Stack>
            <Typography>Outcome</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Transaction;

import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Display_card from "../Component/Display.card";
import ChartComponent from "../Component/Chart";

const Wallet = () => {
  return (
    // padding: "11px 15px",
    <Container
      disableGutters
      maxWidth
      sx={{ display: "flex", justifyContent: "space-between", width: "97.5%" }}
    >
      <Grid container columns={20} spacing={2} sx={{ width: "70%" }}>
        <Grid md={6.665} item>
          <Display_card />
        </Grid>
        <Grid md={6.665} item>
          <Display_card />
        </Grid>
        <Grid md={6.665} item>
          <Display_card />
        </Grid>
        <Grid md={20} item>
          <ChartComponent />
        </Grid>
      </Grid>

      <Stack
        sx={{
          height: "81vh",
          border: " 1px solid #e3ebf6",
          width: "30%",
          borderRadius: "5px",
        }}
      >
        <Stack
          sx={{
            padding: "15px",
            fontSize: "17px",
            borderBottom: " 1px solid #e3ebf6",
            color: "#1d2c48",
            fontWeight:"900"
          }}
        >
          {" "}
          Last 20 transactions only
        </Stack>

        <Stack
          sx={{
            height: "90%",
            bgcolor: "",
            overflowY: "scroll",
            bgcolor: "",
          }}
        >
          {Array.from(Array(10)).map((i) => (
            <Stack
              direction="row"
              sx={{
                padding: "15px",
                fontSize: "17px",
                borderBottom: " 1px solid #e3ebf6",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack>
                <Typography>FBNMOBILE:Nwachukwu oparah</Typography>
                <Typography sx={{ color: "#a4abc5" }}>
                  {new Date().toUTCString().slice(5, 16)}
                </Typography>
              </Stack>
              <Typography sx={{ color: "#03d87f" }}> ₦ 5000</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Wallet;

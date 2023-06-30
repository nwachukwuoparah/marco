import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Display_card from "../Component/Display.card";
import ChartComponent from "../Component/Chart";
import { Global_context } from "../Component/Context.api";
import Banner_card from "../Component/Banner.card";
import zIndex from "@mui/material/styles/zIndex";

const Wallet = () => {
  const { setRouth, transaction, setTransaction } = useContext(Global_context);

  useEffect(() => {
    setRouth("Wallet");
  }, []);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: { md: "97.5%", xs: "100%" },
        padding: "0px 15px",
      }}
    >
      <Grid
        container
        columns={20}
        spacing={{ md: 2, xs: 0 }}
        sx={{
          width: { md: "70%", xs: "100%" },
          display: { md: "flex" },
          gap: { md: "0px", xs: "30px" },
        }}
      >
        <Grid md={6.665} xs={20} item>
          <Display_card />
        </Grid>
        {[
          {
            type: "Airtime",
            text1: "Buy Airtime",
            text2: "Buy Airtime with just few",
          },
          {
            type: "transfer",
            text1: "Transfer",
            text2: "Transfer money with just few",
          },
        ].map((i) => (
          <Grid md={6.665} item>
            <Banner_card {...i} />
          </Grid>
        ))}
        <Grid md={20} xs={20} item>
          <ChartComponent />
        </Grid>
      </Grid>

      <Stack
        sx={{
          display: { md: "block", xs: transaction ? "block" : "none" },
          position: transaction && "fixed",
          height: { md: "81vh", xs: "85vh" },
          border: " 1px solid #e3ebf6",
          width: { md: "30%", xs: transaction && "100%" },
          borderRadius: !transaction && "5px",
          bgcolor: "#f8f8f8",
          zIndex: 1000,
          left: "0px",
          right: "0px",
          paddingBottom:transaction&&"20px"
        }}
      >
        <Stack
          sx={{
            padding: "15px",
            fontSize: "17px",
            borderBottom: " 1px solid #e3ebf6",
            color: "#1d2c48",
            fontWeight: "900",
            bgcolor: "rgb(172, 166, 204,15%)",
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
          }}
        >
          {Array.from(Array(10)).map((i, index) => (
            <Stack
              key={index}
              direction="row"
              sx={{
                padding: "15px",
                fontSize: "17px",
                borderBottom: " 1px solid #e3ebf6",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all .5s",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "rgb(172, 166, 204,15%)",
                },
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

import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Display_card from "../Component/Display.card";
import ChartComponent from "../Component/Chart";
import { Global_context } from "../Component/Context.api";
import Banner_card from "../Component/Banner.card";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import { useNavigate } from "react-router-dom";
const Wallet = ({ data }) => {
  const Navigate = useNavigate();

  const { setRouth, transaction } = useContext(Global_context);

  useEffect(() => {
    setRouth("Wallet");
  }, []);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: { md: "flex", xs: "block" },
        justifyContent: "space-between",
        width: { md: "97.5%", xs: "100%" },
        height: "82vh",
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
          <Display_card
            accountNo={data?.accountNumber}
            wallet={data?.wallet[0]}
          />
        </Grid>
        {[
          {
            id: 1,
            type: "Airtime",
            text1: "Buy Airtime",
            text2: "Buy Airtime with just few",
            path: "/dashboard/airtime",
          },
          {
            id: 2,
            type: "transfer",
            text1: "Transfer",
            text2: "Transfer money with just few",
            path: "/dashboard/transfer",
          },
        ].map((i) => (
          <Grid key={i.id} md={6.665} item>
            <Banner_card {...i} />
          </Grid>
        ))}
        <Grid md={20} xs={20} item>
          <ChartComponent />
        </Grid>
      </Grid>

      <Stack spacing={5} marginTop="15vh">
        <Stack
          onClick={() => {
            Navigate("/dashboard/airtime");
          }}
          direction="row"
          spacing={1}
          sx={{
            display: { md: "none", xs: "flex" },
            padding: "5px 10px",
            border: "1px solid rgb(128, 147, 211,50%) ",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ color: "#7081b9", fontSize: "20px", fontWeight: 600 }}
          >
            Airtime
          </Typography>
          <SendToMobileIcon
            sx={{ color: "#7081b9", fontSize: "35px", fontWeight: 600 }}
          />
        </Stack>

        <Stack
          onClick={() => {
            Navigate("/dashboard/transfer");
          }}
          direction="row"
          spacing={1}
          sx={{
            display: { md: "none", xs: "flex" },
            padding: "10px 10px",
            border: "1px solid rgb(128, 147, 211,50%) ",
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#03a9f4",
          }}
        >
          <Typography
            sx={{ color: "#f8f8f8", fontSize: "20px", fontWeight: 600 }}
          >
            Transfer
          </Typography>
          <CompareArrowsIcon sx={{ color: "#f8f8f8", fontSize: "35px" }} />
        </Stack>
      </Stack>

      <Stack
        sx={{
          display: { md: "block", xs: transaction ? "block" : "none" },
          position: { md: "relative", xs: "fixed" },
          height: { md: "100%", xs: "85vh" },
          border: " 1px solid #e3ebf6",
          width: { md: "30%", xs: transaction && "100%" },
          borderRadius: !transaction && "5px",
          bgcolor: "#f8f8f8",
          zIndex: { md: 1, xs: 1000 },
          top: { md: "0px", xs: "135px" },
          left: "0px",
          right: "0px",
          paddingBottom: transaction && "10px",
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

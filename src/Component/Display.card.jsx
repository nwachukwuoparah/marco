import { Stack, Typography } from "@mui/material";
import ApexCharts from "apexcharts";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WalletIcon from "@mui/icons-material/Wallet";
import React, { useState } from "react";

const Display_card = (props) => {
  const [view, setView] = useState(false);

  return (
    <Stack
      sx={{
        border: " 1px solid #e3ebf6",
        padding: "20px 15px",
        borderRadius: "5px",
        bgcolor: "rgb(172, 166, 204,10%)",
        // backgroundImage: `url(${bg_shape})`,
        bgcolor: "#03a9f4",
      }}
    >
      <Typography
        sx={{ fontSize: "14px", lineHeight: "30px", color: "#f8f8f8" }}
      >
        ACCOUNT # 3141052259
      </Typography>
      {view ? (
        <Typography
          letterSpacing={3}
          sx={{
            fontSize: "25px",
            lineHeight: "30px",
            color: "#f8f8f8",
            fontWeight: 900,
          }}
        >
          $ 500000
        </Typography>
      ) : (
        <Typography
          letterSpacing={3}
          sx={{
            fontSize: "25px",
            lineHeight: "30px",
            color: "#f8f8f8",
            fontWeight: 900,
          }}
        >
          $*********
        </Typography>
      )}
      <Stack>
        <Stack direction="row" alignItems="center">
          <TrendingUpIcon
            sx={{
              fontSize: "12px",
              lineHeight: "30px",
              color: "green",
            }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "30px",
              color: "#f8f8f8",
              "&:before": {
                content: `"8.5% "`,
                position: "relative",
                color: "green",
              },
            }}
          >
            New Sessions Today
          </Typography>
        </Stack>

        <Typography sx={{ fontSize: "14px", lineHeight: "30px" }}></Typography>
      </Stack>
      <Stack
        sx={{
          width: "45px",
          height: "45px",
          margin: "0px auto",
          bgcolor: "red",
          borderRadius: "50%",
          bgcolor: "rgb(128, 147, 211,45%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WalletIcon onClick={() => setView(!view)} sx={{ color: "#fbfbfb " }} />
      </Stack>
    </Stack>
  );
};

export default Display_card;

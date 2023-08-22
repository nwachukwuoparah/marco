import { Stack, Typography } from "@mui/material";
import ApexCharts from "apexcharts";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WalletIcon from "@mui/icons-material/Wallet";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useContext, useState } from "react";
import { Global_context } from "./Context.api";

function formatNumberAbbreviated(number) {
  const abbreviations = [
    [1e9, "B"],
    [1e6, "M"],
    [1e3, "K"],
  ];

  for (const [factor, symbol] of abbreviations) {
    if (number >= factor) {
      const formattedNumber = number / factor;
      return `${formattedNumber.toFixed(2)}${symbol}`;
    }
  }

  return number.toString();
}

const Display_card = ({ wallet }) => {
  const [view, setView] = useState(false);
  const { transaction } = useContext(Global_context);

  return (
    <Stack
      sx={{
        border: " 1px solid #e3ebf6",
        padding: "20px 15px",
        borderRadius: "5px",
        bgcolor: "#03a9f4",
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{ fontSize: "14px", lineHeight: "30px", color: "#f8f8f8" }}
        >
          ACCOUNT # {wallet?.accountNumber}
        </Typography>
        {view ? (
          <VisibilityIcon
            onClick={() => setView(!view)}
            sx={{ color: "#fbfbfb " }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={() => setView(!view)}
            sx={{ color: "#fbfbfb " }}
          />
        )}
      </Stack>

      <Typography
        letterSpacing={3}
        sx={{
          fontSize: "25px",
          lineHeight: "30px",
          color: "#f8f8f8",
          fontWeight: 900,
        }}
      >
        ₦ {view ? formatNumberAbbreviated(wallet?.accountBalance) : "*********"}
      </Typography>
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
        <WalletIcon sx={{ color: "#fbfbfb " }} />
      </Stack>
    </Stack>
  );
};

export default Display_card;

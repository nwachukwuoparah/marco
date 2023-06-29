import { Stack, Typography } from "@mui/material";
import ApexCharts from "apexcharts";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WalletIcon from "@mui/icons-material/Wallet";
import React, { useState } from "react";

const Banner_card  = (props) => {
  const [view, setView] = useState(false);

  return (
    <Stack
      sx={{
        border: " 1px solid #e3ebf6",
        padding: "20px 15px",
        borderRadius: "5px",
        bgcolor: "#C7C8B7",
      }}
    >
     
    </Stack>
  );
};

export default Banner_card ;

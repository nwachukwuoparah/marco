import { Stack, Typography } from "@mui/material";
import ApexCharts from "apexcharts";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
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
      }}
    >
      <Typography
        sx={{ fontSize: "14px", lineHeight: "30px", color: "#1d2c48" }}
      >
        ACCOUNT # 3141052259
      </Typography>
      {view ? (
        <Typography
          letterSpacing={3}
          sx={{
            fontSize: "25px",
            lineHeight: "30px",
            color: "#1d2c48",
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
            color: "#1d2c48",
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
              color: "#03d87f",
            }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "30px",
              color: "#a4abc5",
              "&:before": {
                content: `"8.5% "`,
                position: "relative",
                color: "#03d87f",
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
          bgcolor: "#fbfbfb ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PeopleIcon onClick={() => setView(!view)} sx={{ color: "#a4abc5" }} />
      </Stack>
    </Stack>
  );
};

export default Display_card;
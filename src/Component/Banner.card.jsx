import { Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React, { useState } from "react";

const Banner_card = (props) => {
  const [view, setView] = useState(false);

  return (
    <Stack
      spacing={1.8}
      sx={{
        border: " 1px solid #e3ebf6",
        padding: "20px 15px",
        borderRadius: "5px",
        bgcolor: "#C7C8B7",
        overflowY: "hidden",
      }}
    >
      <Typography
        variant="p"
        sx={{
          padding: "8px 20px",
          width: "fit-content",
          bgcolor: "#f8f8f8",
          borderRadius: "20px",
        }}
      >
        {props.type}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Typography variant="h5" sx={{ color: "white" }}>
          {props.text1}
        </Typography>
        <Stack>
          <KeyboardDoubleArrowRightIcon
            sx={{ fontSize: "30px", color: "white" }}
          />
        </Stack>
      </Stack>
      <Typography sx={{color: "white" }}>
        {props.text2}
        <br /> steps
      </Typography>
    </Stack>
  );
};

export default Banner_card;

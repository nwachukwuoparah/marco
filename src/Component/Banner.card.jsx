import { Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner_card = (props) => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  return (
    <Stack
      onClick={() => navigate(props.path)}
      spacing={1.8}
      sx={{
        display: { md: "flex", xs: "none" },
        border: " 1px solid #e3ebf6",
        padding: "20px 15px",
        borderRadius: "5px",
        bgcolor: "#C7C8B7",
        overflowY: "hidden",
        cursor: "pointer",
        "&:hover": {
          bgcolor: "rgba(199, 200, 183,90%)",
        },
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
      <Typography sx={{ color: "white" }}>
        {props.text2}
        <br /> steps
      </Typography>
    </Stack>
  );
};

export default Banner_card;

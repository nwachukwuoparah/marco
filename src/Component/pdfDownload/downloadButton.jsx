import React from "react";
import { saveAs } from "file-saver";
import CardPDF from "./CardPDF";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Container, Stack, Typography } from "@mui/material";

const DownloadButton = ({ title, content }) => {
  const handleDownload = () => {
    const pdfBlob = new Blob([<CardPDF />], {
      type: "application/pdf",
    });
    saveAs(pdfBlob, "card.pdf");
  };

  return (
    <Stack
      onClick={handleDownload}
      direction="row"
      spacing={1}
      sx={{
        padding: "5px 10px",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#03a9f4",
        cursor: "pointer",
      }}
    >
      <CloudDownloadIcon style={{ color: "white" }} />
      <Typography sx={{ color: "#f8f8f8", fontSize: "15px", fontWeight: 600 }}>
        Download
      </Typography>
    </Stack>
  );
};

export default DownloadButton;

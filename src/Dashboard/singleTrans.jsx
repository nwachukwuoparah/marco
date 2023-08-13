import React, { useRef, useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import background from "../assets/background.jpg";
import { useNavigate, useParams } from "react-router-dom";
import TransactionCard from "../Component/transactionCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { singleTransact } from "../Component/Apis/query";
import DownloadButton from "../Component/pdfDownload/downloadButton";

const SingleTransaction = (props) => {
  const queryClient = useQueryClient();
  const { Ref } = useParams();
  const Navigate = useNavigate();

  const { data, error, isLoading, mutate, status } = useQuery(
    ["getOneUser", Ref],
    singleTransact,
    {
      onSettled: async (data, error) => {
        if (error?.response?.data.message === "Token has expired") {
          await queryClient.invalidateQueries({ queryKey: ["getUser"] });
        }
      },
    }
  );

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        position: "fixed",
        height: "100vh",
        backgrounflexFlow: "row wrap",
        boxSizing: " border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        top: 0,
        left: 0,
        zIndex: 20,
      }}
    >
      <Stack
        sx={{
          width: { md: "40%", xs: "100%" },
          padding: "30px 0px",
          bgcolor: { md: "white", xs: "none" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
        }}
        spacing={3}
      >
        <Stack sx={{}}>
          <Stack sx={{}}>
            <Stack sx={{}}></Stack>
          </Stack>
          <Typography variant="h5">Transaction successful!</Typography>
        </Stack>

        <TransactionCard data={data} />

        <Stack spacing={2} marginTop="15vh" width="90%">
          {/* <DownloadButton /> */}
          <Stack
            onClick={() => {
              Navigate("/dashboard");
            }}
            direction="row"
            spacing={1}
            sx={{
              padding: "5px 10px",
              border: "1px solid rgb(128, 147, 211,20%) ",
              borderRadius: "10px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{ color: "#7081b9", fontSize: "15px", fontWeight: 600 }}
            >
              Done
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SingleTransaction;

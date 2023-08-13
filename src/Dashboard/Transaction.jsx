import { Container, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Global_context } from "../Component/Context.api";
import { Padding } from "@mui/icons-material";
import Pie_chart from "../Component/Pie.chart ";
import { Link } from "react-router-dom";

const Transaction = (data) => {

  const reversedData = [...data?.data?.transaction].reverse();

  const { setRouth } = useContext(Global_context);

  useEffect(() => {
    setRouth("Transactions");
  }, []);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "97.5%", display: "flex", gap: "10px" }}
    >
      <Stack
        sx={{
          width: "70%",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            width: "100%",
            padding: " 15px",
            bgcolor: "rgb(128, 147, 211,20%)",
          }}
        >
          {/* <Typography> NAME</Typography> */}
          <Typography>TRANSACTION ID</Typography>
          <Typography>DATE</Typography>

          <Typography>STATUS</Typography>
          <Typography>AMOUNT</Typography>
        </Stack>

        <Stack
          sx={{
            width: "100%",
            maxHeight: "75vh",
            overflowY: "scroll",
            alignItems: "center",
          }}
        >
          {reversedData.map((i) => (
            <Link
              to={`/dashboard/single-transaction/${i?.transactionRef}`}
              style={{
                width: "100%",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Stack
                key={i?.id}
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  width: "100%",
                  padding: " 10px",
                  cursor: "pointer",
                  borderBottom: " 1px solid #e3ebf6",
                  transition: "all .5s",
                  "&:hover": {
                    bgcolor: "rgb(128, 147, 211,10%)",
                    borderTop: " 1px solid #f8f8f8",
                  },
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    minWidth: "45%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ overflow: "hidden" }}>
                    {i?.transactionRef.slice(0, 28)}
                  </Typography>
                  <Typography>{i?.createDate.slice(0, 10)}</Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    minWidth: "37%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      bgcolor:
                        i?.status === "success"
                          ? "rgba(3, 216, 127,40%)"
                          : "rgba(255, 0, 0,40%)",
                      padding: "5px 10px",
                      fontSize: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    {i?.status}
                  </Typography>
                  <Typography
                    sx={{
                      color:
                        i?.payMethod === "transfer" ||
                        i?.payMethod === "airtime"
                          ? "rgb(255, 0, 0)"
                          : "rgb(3, 216, 127)",
                    }}
                  >
                    {i?.payMethod === "transfer" || i?.payMethod === "airtime"
                      ? "-"
                      : "+"}
                    {i?.amount}
                  </Typography>
                </Stack>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Stack>

      <Stack
        spacing={3}
        sx={{
          borderRadius: "10px",
          width: "30%",
          bgcolor: "#f8f8f8",
          bgcolor: "rgb(128, 147, 211,20%)",
          height: "55vh",
          justifyContent: "center",
        }}
      >
        <Pie_chart />
        <Stack spacing={0.5} sx={{ alignSelf: "center" }}>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <Stack
              sx={{
                width: "10px",
                height: "10px",
                bgcolor: "#84e6ff",
                borderRadius: "2px",
              }}
            ></Stack>
            <Typography>Income</Typography>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <Stack
              sx={{
                width: "10px",
                height: "10px",
                bgcolor: "#008ffb",
                borderRadius: "2px",
              }}
            ></Stack>
            <Typography>Outcome</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Transaction;

import { Container, Stack, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Wallet from "./Wallet";
import Sidebar from "../Component/Sidebar";
import { Global_context } from "../Component/Context.api";
import Transaction from "./Transaction";
import Compliance from "./Compliance";
const Dashboard = (props) => {
  const { hover, routh } = useContext(Global_context);
  const [sidebar, setSidebar] = useState(false);

  return (
    <Container disableGutters maxWidth sx={{ display: "flex" }}>
      <Sidebar sidebar={sidebar} />
      <Container disableGutters maxWidth sx={{ height: "100vh" }}>
        <Stack
          direction={{ md: "row" }}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: " 1px solid #e3ebf6",
            padding: "11px 15px",
          }}
        >
          <MenuRoundedIcon
            onClick={() => setSidebar(!sidebar)}
            sx={{ color: "#7081b9", fontSize: "30px", cursor: "pointer" }}
          />

          <Stack direction={{ md: "row" }} alignItems="center" spacing={2.5}>
            <Stack
              sx={{
                padding: "3.5px",
                borderRadius: "20px",
                "&:hover": { bgcolor: "rgb(128, 147, 211,10%)" },
              }}
            >
              <SearchRoundedIcon
                sx={{ color: "#7081b9", fontSize: "25px", cursor: "pointer" }}
              />
            </Stack>

            <Stack
              sx={{
                padding: "3.5px",
                borderRadius: "20px",
                "&:hover": { bgcolor: "rgb(128, 147, 211,10%)" },
              }}
            >
              <NotificationsNoneRoundedIcon
                sx={{ color: "#7081b9", fontSize: "25px", cursor: "pointer" }}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                bgcolor: "#fbfbfb",
                padding: "5px",
                borderRadius: "20px",
                cursor: "pointer",
                "&:hover": { bgcolor: "rgb(128, 147, 211,10%)" },
              }}
            >
              <AccountCircleIcon sx={{ color: "#7081b9" }} />
              <Typography>Dimkpa Oparah</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={{ md: "row" }}
          justifyContent={{ md: "space-between" }}
          alignItems={{ md: "flex-end" }}
          sx={{ padding: "15px 15px" ,  borderBottom: " 1px solid #e3ebf6",}}
        >
          <span>
            <Stack spacing={0.5} direction="row" alignItems="center">
              <p>Dashboard</p> <p>/</p> <Typography>{routh}</Typography>
            </Stack>
          </span>
          <Typography>Date</Typography>
        </Stack>

        <Routes>
          <Route path="/" element={<Wallet />} />
          <Route path="/transaction" element={<Transaction />} />
           <Route path="/compliance" element={<Compliance />} />
        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
        </Routes>
      </Container>
    </Container>
  );
};

export default Dashboard;

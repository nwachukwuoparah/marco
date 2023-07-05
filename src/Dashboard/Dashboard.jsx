import { Container, Stack, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import React, { useContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Wallet from "./Wallet";
import Sidebar from "../Component/Sidebar";
import { Global_context } from "../Component/Context.api";
import Transaction from "./Transaction";
import Compliance from "./Compliance";
import Profile from "./Profile";

const Dashboard = (props) => {
  const { routh, transaction, setTransaction } = useContext(Global_context);
  const [sidebar, setSidebar] = useState(false);
  const Navigate = useNavigate();

  return (

    <Container disableGutters maxWidth={false} sx={{ display: "flex" }}>
      <Sidebar sidebar={sidebar} />
      <Container disableGutters maxWidth={false}>
        <Stack
          direction={{ md: "row", xs: "row" }}
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

          <Stack
            direction={{ md: "row", xs: "row" }}
            alignItems="center"
            spacing={2.5}
          >
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
              onClick={() => Navigate("/dashboard/profile")}
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
          direction={{ md: "row", xs: "row" }}
          justifyContent={{ md: "space-between", xs: "space-between" }}
          alignItems="center"
          sx={{ padding: "25px 15px" }}
        >
          <span>
            <Stack spacing={0.5} direction="row" alignItems="center">
              <p>Dashboard</p> <p>/</p> <Typography>{routh}</Typography>
            </Stack>
          </span>

          <Stack
            onClick={() => setTransaction(!transaction)}
            direction="row"
            spacing={1}
            sx={{
              display: { md: "none", xs: "flex" },
              padding: "5px 10px",
              border: "1px solid rgb(128, 147, 211,50%) ",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ color: "#7081b9" }}>History</Typography>
            <HistoryToggleOffIcon sx={{ color: "#7081b9" }} />
          </Stack>
        </Stack>

        <Routes>
          <Route path="/" element={<Wallet />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default Dashboard;

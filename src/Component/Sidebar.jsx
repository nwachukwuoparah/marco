import { Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Global_context } from "./Context.api";
import WalletIcon from "@mui/icons-material/Wallet";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TaskIcon from "@mui/icons-material/Task";

import OutboxIcon from "@mui/icons-material/Outbox";

import marco from "../assets/marco.png";
import bg_shape from "../assets/bg-shape.jpeg";
import { NavLink } from "react-router-dom";
const Sidebar = ({ sidebar }) => {
  const { hover, setHover } = useContext(Global_context);

  const data = [
    {
      id: 1,
      icon: <WalletIcon />,
      text: "Wallet",
      path: "/",
    },
    {
      id: 2,
      icon: <ReceiptLongIcon />,
      text: "Transaction",
      path: "/transaction",
    },
    {
      id: 3,
      icon: <OutboxIcon />,
      text: "Transfer",
      path: "/transfer",
    },
    {
      id: 4,
      icon: <WalletIcon />,
      text: "Airtime",
      path: "/airtime",
    },

    // {
    //   icon: <WalletIcon />,
    //   text: "Deposit",
    // },
  ];

  //   console.log(sidebar);
  return (
    <Stack
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      spacing={8}
      sx={{
        display: { md: "block", xs: "none" },
        height: "100vh",
        width: hover || sidebar ? "15%" : "5%",
        borderRight: "1px solid #e3ebf6",
        transition: "ease-in-out .5s",
        backgroundImage: `url(${bg_shape})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        sx={{
          //   borderBottom: " 1px solid #e3ebf6",
          // width: "100px",
          // bgcolor:"red",
          padding: "11px 15px",
          color: "white",
        }}
      >
        <img
          src={marco}
          style={{
            width: "28.5px",
            margin: "0px auto",
            display: (sidebar || hover) && "none",
          }}
        />
        <Typography
          sx={{
            fontSize: "20px",
            display: sidebar || hover ? "block" : "none",
          }}
        >
          Dashboard
        </Typography>
      </Stack>

      <Stack spacing={4}>
        {data.map((i) => (
          <NavLink
            key={i.id}
            to={`/dashboard${i.path}`}
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "none", color: "#f8f8f8" }
                : { textDecoration: "none", color: "#aca6cc" }
            }
          >
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                // bgcolor: "red",
                overflow: "hidden",
                justifyContent: sidebar || (!hover && "center"),
                paddingLeft: (hover || sidebar) && "13px",
                "&:hover": {
                  color: "#f8f8f8",
                },
                cursor: "pointer",
              }}
            >
              {i.icon}
              {(hover || sidebar) && <Typography>{i.text}</Typography>}
            </Stack>
          </NavLink>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;

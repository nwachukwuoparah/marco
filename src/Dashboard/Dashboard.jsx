const { VITE_userToken } = import.meta.env;
import { Container, Stack, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Wallet from "./Wallet";
import Sidebar from "../Component/Sidebar";
import { Global_context } from "../Component/Context.api";
import Transaction from "./Transaction";
import Profile from "./Profile";
import Transfer from "./Transfer";
import Airtime from "./Airtime";
import zIndex from "@mui/material/styles/zIndex";
import Loadind from "../Component/loading.state";
import Message from "../Component/message";
import { getUser } from "../Component/Apis/query";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { userLogOut } from "../Component/Apis/mutate";
import Pin from "./pin";
import SingleTransaction from "./singleTrans";
import Deposite from "./deposit";
import BusinessCompliance from "./businessCompliance";
import Personal_compliance from "./personalCompliance";

const Dashboard = (props) => {
  const queryClient = useQueryClient();
  const { routh, transaction, setTransaction, error, message, setMessage } =
    useContext(Global_context);
  const [sidebar, setSidebar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const Navigate = useNavigate();

  const {
    data: logOutData,
    isFetching: logOutFetching,
    error: logOutError,
  } = useQuery(["logOut"], userLogOut, {
    enabled: logOut,
    refetchOnWindowFocus: false,
    cacheTime: 0,
    onSuccess: () => {
      localStorage.removeItem(VITE_userToken);
      Navigate("/login");
    },
  });

  const {
    data: userdata,
    isFetching: userFetching,
    error: userError,
  } = useQuery(["getUser"], getUser, {
    enabled: !!localStorage.getItem(VITE_userToken),
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: 1,
    onError: (error) => {
      console.log(error);
      if (error?.response?.data.message === "Token has expired") {
        setLogOut(true);
      } else {
        queryClient.invalidateQueries({ queryKey: ["getUser"] });
      }
    },
  });

  const value = userdata?.data?.data;
  console.log(value);
  useLayoutEffect(() => {
    if (!localStorage.getItem(VITE_userToken)) {
      Navigate("/login");
    }
    if (value?.user.status && value?.compliance === null) {
      Navigate("/dashboard/businesscompliance");
    } else if (!value?.user.status && value?.compliance === null) {
      Navigate("/dashboard/personalcompliance");
    } else {
      return;
    }
    if (logOutError) setMessage(!message);
  }, [userError, logOutError, userdata]);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        bgcolor: "#fdfcfc",
      }}
    >
      {(logOutFetching || userFetching) && <Loadind />}
      {(logOutError || (userError && message)) && (
        <Message title={error?.response?.data.message} />
      )}

      {value?.compliance && <Sidebar sidebar={sidebar} />}
      {value?.compliance && value?.bankPin === null && <Pin />}

      <Container disableGutters maxWidth={false}>
        <Stack
          direction={{ md: "row", xs: "row" }}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e3ebf6",
            padding: "0px 15px",
            height: "8vh",
            zIndex: 5000,
            bgcolor: "white",
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
            zIndex={10}
            height="100%"
            bgcolor="white"
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
              onMouseEnter={() => setMenu(true)}
              onMouseLeave={() => setMenu(false)}
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#fbfbfb",
                padding: "5px",
                borderRadius: "20px",
                cursor: "pointer",
                "&:hover": { bgcolor: "rgb(128, 147, 211,10%)" },
              }}
            >
              {value?.user.imageurl === null ? (
                <AccountCircleIcon
                  sx={{ fontSize: "25px", color: "#7081b9" }}
                />
              ) : (
                <Stack
                  sx={{
                    width: "22px",
                    height: "22px",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img src={value?.user.imageurl} style={{}} />
                </Stack>
              )}
              <Typography>{value?.user.accountName}</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
          sx={{
            width: "160px",
            position: "absolute",
            top: menu ? 56 : -160,
            right: 0,
            zIndex: 5,
            transition: "ease-in-out 0.5s",
            bgcolor: "white",
            borderRadius: "0px 0px 5px 5px",
            overflow: "hidden",
          }}
        >
          {[
            {
              id: 1,
              icon:
                value?.user.imageurl === null ? (
                  <AccountCircleIcon
                    sx={{ color: "#7081b9", fontSize: "25px" }}
                  />
                ) : (
                  <Stack
                    sx={{
                      width: "22px",
                      height: "22px",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <img src={value?.user.imageurl} style={{}} />
                  </Stack>
                ),
              title: "Profile",
              call: () => {
                Navigate("/dashboard/profile");
              },
            },
            {
              id: 2,
              icon: <LogoutIcon sx={{ color: "#7081b9", fontSize: "25px" }} />,
              title: "Logout",
              call: () => {
                setLogOut(true);
              },
            },
          ].map((i) => (
            <Stack
              key={i.id}
              onClick={i.call}
              direction="row"
              spacing={2}
              sx={{
                alignItems: "center",
                width: "100%",
                borderBottom: "1px dashed #f8f8f8",
                padding: 1.5,
                cursor: "pointer",
                "&:hover": { bgcolor: "rgb(128, 147, 211,10%)" },
              }}
            >
              {i.icon}
              <Typography>{i.title}</Typography>
            </Stack>
          ))}
        </Stack>

        <Stack
          direction={{ md: "row", xs: "row" }}
          justifyContent={{ md: "space-between", xs: "space-between" }}
          alignItems="center"
          sx={{ padding: "0px 15px", height: "10vh" }}
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
          <Route path="/" element={<Wallet data={value} />} />
          <Route path="/transaction" element={<Transaction data={value} />} />
          {/* <Route path="/compliance" element={<Compliance compData={value} />} /> */}
          <Route
            path="/businesscompliance"
            element={<BusinessCompliance compData={value} />}
          />
          <Route
            path="/personalcompliance"
            element={<Personal_compliance compData={value} />}
          />
          <Route path="/profile/*" element={<Profile data={value} />} />
          <Route path="/transfer" element={<Transfer data={value} />} />
          <Route path="/airtime" element={<Airtime data={value} />} />
          <Route
            path="/single-transaction/:Ref"
            element={<SingleTransaction data={value} />}
          />
          <Route path="/deposite" element={<Deposite />} />
        </Routes>
      </Container>
    </Container>
  );
};

export default Dashboard;

import { Container, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import { Global_context } from "./Context.api";
import { useNavigate } from "react-router-dom";
const Display_profile = ({ setToggleProfile }) => {
  const { setRouth } = useContext(Global_context);
  const Navigate = useNavigate();
  useEffect(() => {
    setRouth("Profile");
  }, []);
  return (
    <Container
      sx={{
        width: "97.5%",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "80vh",
        padding: "20px 0px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ bgcolor: "#f7f9fb", padding: "30px 30px", borderRadius: "10px" }}
      >
        <Stack>
          <Stack>
            <AccountCircleIcon sx={{ fontSize: "110px" }} />
          </Stack>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
            variant="body1"
          >
            Dimkpa Oparah
          </Typography>
        </Stack>

        <Stack
          onClick={() => {
            setToggleProfile(false);
          }}
          direction="row"
          gap={0.5}
          sx={{ position: "relative", cursor: "pointer" }}
        >
          <Typography sx={{ color: "rgb(28 28 28 / 0.4)" }}>
            Edit Profile
          </Typography>
          <EditIcon
            sx={{
              color: "rgb(28, 28, 28,70%)",
              position: "relative",
              top: "-7px",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        spacing={2}
        sx={{ bgcolor: "#f7f9fb", padding: "50px 30px", borderRadius: "10px" }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontSize: "15px", lineHeight: "1.25rem" }}
        >
          Profile Details
        </Typography>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Stack direction="row" spacing={40}>
            <Typography
              sx={{
                color: "rgb(28 28 28 / 0.4)",
                fontSize: "14px",
                lineHeight: "1rem",
              }}
            >
              Company
            </Typography>
            <Typography
              sx={{
                color: "#1C1C1C",
                fontSize: "14px",
                lineHeight: "1rem",
              }}
            >
              Cold Design
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ bgcolor: "#f7f9fb", padding: "50px 30px", borderRadius: "10px" }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: "15px", lineHeight: "1.25rem" }}
          >
            Compliance Details
          </Typography>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Stack direction="row" spacing={40}>
              <Typography
                sx={{
                  color: "rgb(28 28 28 / 0.4)",
                  fontSize: "14px",
                  lineHeight: "1rem",
                }}
              >
                Company
              </Typography>
              <Typography
                sx={{
                  color: "#1C1C1C",
                  fontSize: "14px",
                  lineHeight: "1rem",
                }}
              >
                Cold Design
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack
          onClick={() => {
            Navigate("/dashboard/compliance");
          }}
          direction="row"
          gap={0.5}
          sx={{ position: "relative", cursor: "pointer" }}
        >
          <Typography sx={{ color: "rgb(28 28 28 / 0.4)" }}>
            Edit Compliance
          </Typography>
          <EditIcon
            sx={{
              color: "rgb(28, 28, 28,70%)",
              position: "relative",
              top: "-7px",
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Display_profile;

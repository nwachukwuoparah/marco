import { Container, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import { Global_context } from "./Context.api";
import { useNavigate } from "react-router-dom";
import { CropLandscapeOutlined } from "@mui/icons-material";

const Display_profile = ({ value }) => {
  const { setRouth } = useContext(Global_context);
  const Navigate = useNavigate();

  useEffect(() => {
    setRouth("Profile");
  }, []);

  const userDate = [
    {
      id: 1,
      title: "First Name",
      value: value?.user.firstName,
    },
    {
      id: 2,
      title: "Last Name",
      value: value?.user.lastName,
    },
    {
      id: 3,
      title: "Email",
      value: value?.user.email,
    },
    {
      id: 4,
      title: "Phone Number",
      value: value?.user.phoneNumber,
    },
    {
      id: 5,
      title: "Sex",
      value: value?.user.sex,
    },
    {
      id: 6,
      title: "Account Type",
      value: value?.user.accountType,
    },
  ];

  const complianceDate = [
    {
      id: 1,
      title: "BVN",
      value: value?.compliance?.BVN,
    },
    {
      id: 2,
      title: "National Id",
      value: value?.compliance?.NIN,
    },
    {
      id: 3,
      title: "Country",
      value: value?.compliance?.country,
    },
    {
      id: 4,
      title: "State",
      value: value?.compliance?.state,
    },
    {
      id: 5,
      title: "City",
      value: value?.compliance?.city,
    },
    {
      id: 6,
      title: "LGA",
      value: value?.compliance?.LGA,
    },
    {
      id: 7,
      title: "Home Adress",
      value: value?.compliance?.address,
    },
    {
      id: 8,
      title: "Business Name",
      value: value?.compliance?.businessName,
    },
    {
      id: 8,
      title: "Business Address",
      value: value?.compliance?.businessAddress,
    },
  ];
  console.log(complianceDate);
  return (
    <Stack
      sx={{
        width: "100%",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "80vh",
        padding: "20px 15px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          width: "100%",
          bgcolor: "#f7f9fb ",
          padding: "30px 30px",
          borderRadius: "10px",
          border: "1px dotted rgb(219, 217, 217)",
        }}
      >
        <Stack>
          <Stack>
            {value?.user.imageurl === null ? (
              <AccountCircleIcon sx={{ fontSize: "110px" }} />
            ) : (
              <Stack
                sx={{
                  width: "100px",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <img src={value?.user.imageurl} style={{}} />
              </Stack>
            )}
          </Stack>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
            variant="body1"
          >
            {value?.user.accountName}
          </Typography>
        </Stack>

        <Stack
          onClick={() => {
            Navigate("/dashboard/profile/editprofile");
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
              top: "-3.5px",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        spacing={{ md: 2, xs: 4 }}
        sx={{
          bgcolor: "#f7f9fb ",
          padding: "50px 30px",
          borderRadius: "10px",
          border: "1px dotted rgb(219, 217, 217)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontSize: "15px", lineHeight: "1.25rem" }}
        >
          Profile Details
        </Typography>
        {userDate.map((i) => (
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: "rgb(28 28 28 / 0.4)",
                fontSize: "14px",
                lineHeight: "1rem",
              }}
            >
              {i?.title}
            </Typography>

            <Stack
              sx={{
                width: "70%",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#1C1C1C",
                  fontSize: "14px",
                  lineHeight: "1rem",
                }}
              >
                {i?.value ? i?.value : "null"}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Stack
        justifyContent="space-between"
        sx={{
          bgcolor: "#f7f9fb ",
          padding: "50px 30px",
          borderRadius: "10px",
          border: "1px dotted rgb(219, 217, 217)",
        }}
      >
        <Stack spacing={{ md: 2, xs: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: "15px", lineHeight: "1.25rem" }}
          >
            Compliance Details
          </Typography>

          {complianceDate.map(
            (i) =>
              i.value && (
                <Stack
                  direction={{ md: "row", xs: "column" }}
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      color: "rgb(28 28 28 / 0.4)",
                      fontSize: "14px",
                      lineHeight: "1rem",
                    }}
                  >
                    {i?.title}
                  </Typography>

                  <Stack
                    sx={{
                      width: "70%",
                    }}
                  >
                    {i?.value && (
                      <Typography
                        sx={{
                          color: "#1C1C1C",
                          fontSize: "14px",
                          lineHeight: "1rem",
                        }}
                      >
                        {i?.value}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              )
          )}
        </Stack>

        {/* <Stack
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
              top: "-3.5px",
            }}
          />
        </Stack> */}
      </Stack>
    </Stack>
  );
};

export default Display_profile;

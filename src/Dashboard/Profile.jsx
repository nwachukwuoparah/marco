import { Container, Stack } from "@mui/material";
const { VITE_userToken } = import.meta.env;
import React, { useContext, useState, useLayoutEffect, useEffect } from "react";
import Display_profile from "../Component/Display.profile";
import Edit_profile from "../Component/Edit.profile";
import { Global_context } from "../Component/Context.api";
import { Routes, Route, useNavigate } from "react-router-dom";
const Profile = ({ data }) => {
  const [toggleProfile, setToggleProfile] = useState(true);

  const Navigate = useNavigate();

  useEffect(() => {
    if (data?.user.status && data?.compliance === null) {
      Navigate("/dashboard/businesscompliance");
    } else if (!data?.user.status && data?.compliance === null) {
      Navigate("/dashboard/personalcompliance");
    } else {
      return;
    }
    if (!localStorage.getItem(VITE_userToken)) {
      Navigate("/login");
    }
  }, []);

  return (
    <Container disableGutters maxWidth sx={{ width: "97.5%" }}>
      <Routes>
        <Route path="/" element={<Display_profile value={data} />} />
        <Route path="/editprofile" element={<Edit_profile value={data} />} />
      </Routes>
    </Container>
  );
};

export default Profile;

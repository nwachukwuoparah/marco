import { Container, Stack } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import Display_profile from "../Component/Display.profile";
import Edit_profile from "../Component/Edit.profile";
import { Global_context } from "../Component/Context.api";
const Profile = (props) => {
  const [toggleProfile, setToggleProfile] = useState(true);
  return (
    <Container disableGutters maxWidth sx={{ width: "97.5%" }}>
      {toggleProfile ? (
        <Display_profile setToggleProfile={setToggleProfile} />
      ) : (
        <Edit_profile setToggleProfile={setToggleProfile} />
      )}
    </Container>
  );
};

export default Profile;

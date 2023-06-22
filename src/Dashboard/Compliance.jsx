import {
  Container,
  FormControlLabel,
  Stack,
  Typography,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Global_context } from "../Component/Context.api";
import Input from "../Component/Input";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const Compliance = (props) => {
  const { setRouth } = useContext(Global_context);

  useEffect(() => {
    setRouth("Compliance");
  }, []);

  return (
    <Container
      disableGutters
      maxWidth
      sx={{
        width: "97.5%",
        display: "flex",
        gap: "10px",
        padding: "15px 0px 0px 0px",
      }}
    >
      <Stack spacing={4.5} sx={{ width: "60%", bgcolor: "" }}>
        <Stack
          justifyContent="space-between"
          direction="row"
          sx={{ width: "100%" }}
        >
          <Input
            width="47%"
            id="first.name"
            label="First Name"
            variant="standard"
          />
          <Input
            width="47%"
            id="last.name"
            label="Last Name"
            variant="standard"
          />
        </Stack>

        <Stack
          justifyContent="space-between"
          direction="row"
          sx={{ width: "100%" }}
        >
          <Input width="47%" id="phone" label="Phone" variant="standard" />
          <Input
            width="47%"
            id="email"
            label="E-mail Address"
            variant="standard"
          />
        </Stack>

        <Stack
          justifyContent="space-between"
          direction="row"
          sx={{ width: "100%" }}
        >
          <Input
            width="47%"
            id="nationality"
            label="Nationality"
            variant="standard"
          />
          <Input
            width="47%"
            id="state"
            label="State of origin"
            variant="standard"
          />
        </Stack>

        <Input
          id="Residential Address"
          label="Residential address"
          variant="standard"
        />
        <FormControl>
          <FormLabel>Form of Identification:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="Form of Identification"
            name="Form of Identification"
          >
            <FormControlLabel
              value="National I.D. Card"
              control={<Radio />}
              label="National I.D. Card"
            />
            <FormControlLabel
              value="Passport"
              control={<Radio />}
              label="Passport"
            />
            <FormControlLabel
              value="Driver’s License"
              control={<Radio />}
              label="Driver’s License"
            />
          </RadioGroup>
        </FormControl>

        <Stack>
          <Button
            startIcon={<CameraAltIcon />}
            disableRipple
            disableElevation
            variant="contained"
            component="label"
            sx={{ padding: "10px 0px", fontSize: "15px" }}
          >
            Upload a clear picture
            <input hidden type="file" />
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Compliance;

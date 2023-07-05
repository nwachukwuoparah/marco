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
import React, { useContext, useEffect, useRef } from "react";
import { Global_context } from "../Component/Context.api";
import Input from "../Component/Input";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button_component from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { Compliance_schema } from "../Component/Schema";

const Compliance = (props) => {
  const { setRouth } = useContext(Global_context);
  const imageref = useRef(null);
  const Navigate = useNavigate();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Compliance_schema),
  });

  useEffect(() => {
    setRouth("Compliance");
    console.log(errors);
  }, [errors]);

  const onSubmit = (data) => {
    const { image, ...others } = data;
    console.log({ ...others, image: image[0] });
  };

  const From_input = [
    {
      id: 1,
      name: "bvn",
      type: "text",
      placeholder: "BVN",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 2,
      name: "country",
      type: "text",
      placeholder: "Country",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 3,
      name: "state",
      type: "text",
      placeholder: "State",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 4,
      name: "city",
      type: "text",
      placeholder: "City",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 5,
      name: "lga",
      type: "text",
      placeholder: "LGA",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "Address",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 7,
      name: "businessname",
      type: "text",
      placeholder: "Business Name",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 8,
      name: "businessaddress",
      type: "text",
      placeholder: "Business Address",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
    {
      id: 9,
      name: "nin",
      type: "text",
      placeholder: "NIN Number",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: { md: "97.5%", xs: "100%" },
        padding: { md: "0px", xs: " 30px 10px" },
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          position: "relative",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={4.5} sx={{ width: { md: "70%", xs: "100%" } }}>
          <Stack
            justifyContent="space-between"
            direction="row"
            flexWrap="wrap"
            gap="30px"
            sx={{ width: "100%" }}
          >
            {From_input.map((i) => (
              <Input
                key={i.id}
                width="48%"
                {...i}
                register={register}
                errors={errors}
              />
            ))}
          </Stack>
        </Stack>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "16px",
            textDecoration: "underline",
            color: errors["image"] ? "red" : "#03a9f4",
            cursor: "pointer",
          }}
        >
          <CameraAltIcon sx={{ fontSize: "25px" }} />
          Upload a clear picture of your NIN
          <input name="image" hidden type="file" {...register("image")} />
        </label>
        <Stack
          spacing={3}
          direction="row"
          borderTop=" 1px solid #e3ebf6"
          paddingTop="28px"
          width={{ md: "33.5%", xs: "100%" }}
        >
          <Button_component
            content="Submit"
            boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
            bgcolor="#03a9f4"
            width="35%"
            height="45px"
            radius="2px"
            color="#fff"
            fontSize="15px"
          />

          <Button_component
            routh="/dashboard/profile"
            content="Cancel"
            boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
            bgcolor="#ffff"
            width="35%"
            height="45px"
            radius="2px"
            // color="#fff"
            border=" 1px solid #e3ebf6"
            fontSize="15px"
          />
        </Stack>
      </form>
    </Container>
  );
};

export default Compliance;

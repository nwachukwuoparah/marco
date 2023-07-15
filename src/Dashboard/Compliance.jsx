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
        display: "flex",
        justifyContent: "space-between",
        padding: { md: "0px", xs: " 30px 10px" },
        height: "82vh",

        padding: "0px 15px 30px",
      }}
    >
      <Stack
        width={{
          md: "50%",
          xs: "100%",
          overflowY: "scroll",
          padding: "0px 0px 30px",
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
          <Stack gap="30px" sx={{ width: "100%" }}>
            {From_input.map((i) => (
              <Input key={i.id} {...i} register={register} errors={errors} />
            ))}
          </Stack>
          <Stack
            spacing={3}
            direction="row"
            borderTop=" 1px solid #e3ebf6"
            paddingTop="28px"
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
      </Stack>
      <Stack
        sx={{
          width: "45%",
          height: "100%",
          borderRadius: "10px",
          border: "1px rgba(128, 128, 128,20%)",
          borderStyle: "dashed",
          position: "sticky",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            fontSize: "16px",
            color: errors["image"] ? "red" : "rgba(3, 169, 244,20%)",
            cursor: "pointer",
          }}
        >
          <CameraAltIcon sx={{ fontSize: "30px" }} />
          <Typography
            sx={{
              padding: "15px",
              bgcolor: "rgba(3, 169, 244,15%)",
              color: "rgba(3, 169, 244)",
              borderRadius: "10px",
            }}
          >
            Upload a clear picture of your NIN
          </Typography>
          <input name="image" hidden type="file" {...register("image")} />
        </label>
      </Stack>
    </Container>
  );
};

export default Compliance;

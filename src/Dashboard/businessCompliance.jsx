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
import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Global_context } from "../Component/Context.api";
import Input from "../Component/Input";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button_component from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { businessCompliance_schema } from "../Component/Schema";
import { createCompliance } from "../Component/Apis/mutate";
import Message from "../Component/message";

const BusinessCompliance = ({ compData }) => {
  const queryClient = useQueryClient();
  const { setRouth, message, setMessage } = useContext(Global_context);
  const imageref = useRef(null);
  const inputRef = useRef();
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(businessCompliance_schema),
  });

  useEffect(() => {
    setRouth("Compliance");
  }, [errors]);

  const {
    data: complianceData,
    error,
    isLoading,
    mutate,
    status,
  } = useMutation(["compliance"], createCompliance, {
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["getUser"] });
      Navigate("/dashboard");
    },
    onError: async (error) => {
      if (error?.response?.data.message === "Token has expired") {
        console.log(error?.response?.data.message);
        await queryClient.invalidateQueries({ queryKey: ["getUser"] });
      } else {
        console.log(error);
      }
    },
  });

  const onSubmit = async (data) => {
    const { cert, memo, ...others } = data;
    inputRef.current = data;
    // console.log({ ...others, cert: cert?.[0], memo: memo?.[0], NIN: "12344556685" });
    mutate({ ...others, cert: cert?.[0], memo: memo?.[0] });
  };

  useLayoutEffect(() => {
    if (compData?.compliance !== null) {
      Navigate("/dashboard");
    }
  }, []);

  let From_input = [
    {
      id: 1,
      name: "BVN",
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
      name: "LGA",
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
      name: "businessName",
      type: "text",
      placeholder: "Business Name",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
      disabled: compData?.user?.accountType !== "Business" ? true : false,
    },
    {
      id: 8,
      name: "businessAddress",
      type: "text",
      placeholder: "Business Address",
      border: "1px solid rgba(28, 28, 28, 25%)",
      padding: "10px 15px",
      disabled: compData?.user?.accountType !== "Business" ? true : false,
    },
  ];
  let ImageFiles = [
    {
      id: 2,
      title: "Upload Memorandum",
      name: "memo",
      disabled: compData?.user?.accountType !== "Business" ? true : false,
    },
    {
      id: 3,
      title: "Upload Certificate of incorporation",
      name: "cert",
      disabled: compData?.user?.accountType !== "Business" ? true : false,
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            position: "relative",
          }}
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
              click={handleSubmit(onSubmit)}
              loading={isLoading}
              content="Submit"
              boxShadow="box-shadow: 0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)"
              bgcolor="#03a9f4"
              width="35%"
              height="45px"
              radius="2px"
              color="#fff"
              fontSize="15px"
            />
          </Stack>
        </div>
      </Stack>
      <Stack
        sx={{
          width: "45%",
          height: "100%",
          borderRadius: "10px",
          border: "1px rgba(128, 128, 128,20%)",
          borderStyle: "dashed",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          gap: "30px",
        }}
      >
        {ImageFiles.map((i) => (
          <Stack
            key={i.id}
            sx={{
              width: compData?.user?.accountType !== "Business" ? "70%" : "48%",
              height:
                compData?.user?.accountType !== "Business" ? "70%" : "40%",
              borderRadius: "10px",
              border: errors[i.name]
                ? "1px red"
                : "1px rgba(128, 128, 128,20%)",
              borderStyle: "dashed",
            }}
          >
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                fontSize: "16px",
                color: errors[i.name] ? "red" : "rgba(3, 169, 244,20%)",
                cursor: "pointer",
                padding: "0px 15px",
              }}
            >
              <CameraAltIcon sx={{ fontSize: "30px" }} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 900,

                  color: "rgba(3, 169, 244)",
                }}
              >
                {i.title}
              </Typography>
              <input
                name={i.name}
                disabled={i.disabled}
                hidden
                type="file"
                {...register(i.name)}
              />
            </label>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default BusinessCompliance;

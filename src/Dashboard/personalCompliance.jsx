import { Container, Stack, Typography } from "@mui/material";
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
import { personalCompliance_schema } from "../Component/Schema";
import { createCompliance } from "../Component/Apis/mutate";
import Message from "../Component/message";
import Toste from "../Component/toste";

const Personal_compliance = ({ compData }) => {
  const queryClient = useQueryClient();
  const { setRouth, setToste } = useContext(Global_context);
  const imageref = useRef(null);
  const inputRef = useRef();
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalCompliance_schema),
  });

  useEffect(() => {
    setRouth("Compliance");
  }, []);

  const {
    data: complianceData,
    error,
    isLoading,
    mutate,
    status,
  } = useMutation(["compliance"], createCompliance, {
    onSuccess: async (data) => {
      setToste(true);
      setTimeout(async () => {
        await queryClient.invalidateQueries({ queryKey: ["getUser"] });
        Navigate("/dashboard");
        setToste(false);
      }, 3000);
    },
    onError: async (error) => {
      if (error?.response?.data.message === "Token has expired") {
        console.log(error?.response?.data.message);
        await queryClient.invalidateQueries({ queryKey: ["getUser"] });
      }
    },
  });

  const onSubmit = async (data) => {
    const { nin, cert, memo, ...others } = data;
    inputRef.current = data;
    mutate({ ...others, nin: nin?.[0] });
  };

  useLayoutEffect(() => {
    if (compData?.compliance !== null) {
      Navigate("/dashboard");
    }
  }, []);

  useEffect(() => {
    console.log(error);
    if (error) {
      setToste(true);
    }
    setTimeout(() => {
      setToste(false);
    }, 5000);
  }, [error, complianceData]);

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
      id: 9,
      name: "NIN",
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
      <Toste
        error={error?.response?.data.message}
        suscess={complianceData?.data.message}
      />
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
        <Stack
          sx={{
            width: compData?.user?.accountType !== "Business" ? "70%" : "48%",
            height: compData?.user?.accountType !== "Business" ? "70%" : "40%",
            borderRadius: "10px",
            border: errors["nin"] ? "1px red" : "1px rgba(128, 128, 128,20%)",
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
              color: errors["nin"] ? "red" : "rgba(3, 169, 244,20%)",
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
              Upload NIN
            </Typography>
            <input name="nin" hidden type="file" {...register("nin")} />
            <p>{errors["nin"]?.message}</p>
          </label>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Personal_compliance;

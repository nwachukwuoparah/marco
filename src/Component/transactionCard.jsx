import { Container, Stack, Typography } from "@mui/material";

const TransactionCard = ({ data }) => {
  const value = data?.data.data;
  console.log(value);
  return (
    <Stack
      sx={{
        bgcolor: "#f7f9fa",
        width: "90%",
        padding: "13px 20px",
        borderRadius: "15px",
      }}
    >
      <Stack
        spacing={1.5}
        sx={{
          paddingBottom: "25px",
          bgcolor: "",
          borderBottom: "1px solid #e7e9ea",
        }}
      >
        <Stack
          direction="row"
          sx={{
            minWidth: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ overflow: "hidden" }}>Amount</Typography>

          <Typography
            sx={{
              color:
                value?.payMethod === "transfer" ||
                value?.payMethod === "airtime"
                  ? "rgb(255, 0, 0)"
                  : "rgb(3, 216, 127)",
            }}
          >
            {value?.payMethod === "transfer" || value?.payMethod === "airtime"
              ? "- "
              : "+ "}
            $ {value?.amount}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{
            minWidth: "37%",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{}}>Payment status</Typography>
          <Typography
            sx={{
              bgcolor:
                value?.status === "success"
                  ? "rgba(3, 216, 127,40%)"
                  : "rgba(255, 0, 0,40%)",
              padding: "3.5px 10px",
              fontSize: "10px",
              borderRadius: "20px",
            }}
          >
            {value?.status}
          </Typography>
        </Stack>
      </Stack>

      <Stack
        spacing={1.5}
        sx={{
          paddingTop: "25px",
          bgcolor: "",
        }}
      >
        <Stack
          direction="row"
          sx={{
            minWidth: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ overflow: "hidden" }}>Name</Typography>
          <Typography>
            {value?.senderName ? value?.senderName : value?.recieverName}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            minWidth: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ overflow: "hidden" }}>Payment Method</Typography>
          <Typography>{value?.payMethod}</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            minWidth: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ overflow: "hidden" }}>REF</Typography>
          <Typography>{value?.transactionRef.slice(0, 15)}</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            minWidth: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ overflow: "hidden" }}>Date</Typography>
          <Typography>{value?.createDate.slice(0, 19)}</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            minWidth: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ overflow: "hidden" }}>Narration</Typography>
          <Typography>
            {value?.narration ? value?.narration : "- - - -"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TransactionCard;

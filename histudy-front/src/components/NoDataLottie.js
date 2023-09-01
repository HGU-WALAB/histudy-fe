import { Box, Typography } from "@mui/material";
import animationData from "../noData.json";
import Lottie from "lottie-react";

export default function NoDataLottie() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <Box sx={{}}>
      <Lottie animationData={animationData} style={{ width: "250px" }} />
      <Typography
        variant="body1"
        sx={{ textAlign: "center", mt: "20px", fontSize: "20px" }}
      >
        아직 데이터가 없습니다!
      </Typography>
    </Box>
  );
}

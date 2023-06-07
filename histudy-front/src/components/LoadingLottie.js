import { Box } from "@mui/material";
import animationData from "loading.json";
import Lottie, { useLottie } from "lottie-react";

export default function LoadingLottie() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <Box>
      <Lottie animationData={animationData} />
    </Box>
  );
}

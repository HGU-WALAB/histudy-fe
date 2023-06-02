import { Box } from "@mui/material";
import { motion } from "framer-motion";

const LayoutVariant = {
  hidden: {
    opacity: 0,
  },
  showing: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export function CodeModal({ onClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component={motion.div}
        variants={LayoutVariant}
        initial="hidden"
        animate="showing"
        exit="exit"
        onClick={onClick}
        id="no"
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "10",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Box
          sx={{
            position: "absolute",

            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "20",
            width: "50%",
            height: "500px",
            backgroundColor: "white",
          }}
          alt="bigPoster"
        />
      </Box>
    </Box>
  );
}

import { Box, Button, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import RoundButton from "../RoundButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authorityState } from "../../store/atom";

export default function MainTest() {
  const role = useRecoilValue(authorityState);
  const mainButtonReturner = (type) => {
    if (type === "link") {
      switch (role) {
        case "NONUSER":
          return "/rank";
        case "USER":
          return "/enroll";
        case "MEMBER":
          return "/group";
        case "ADMIN":
          return "/manageClass";
      }
    } else if (type === "text") {
      switch (role) {
        case "NONUSER":
          return "Look Around";
        case "USER":
          return "Apply Study";
        case "MEMBER":
          return "My Study";
        case "ADMIN":
          return "Manage Study";
      }
    }
  };

  const navigate = useNavigate();
  return (
    <Box sx={{}}>
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))",
            zIndex: 10,
            width: "100%",
            minHeight: "100%",
            height: "100vh",
          }}
        />
        <img
          src="./img/mainImg3.png"
          alt="Main Image"
          sx={{ zIndex: 0, objectFit: "cover" }}
          width={"100%"}
          height={"800px"}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "0",
            zIndex: "30",
            color: "white",
            alignItems: "center",
            // justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            sx={{
              fontSize: "80px",
              mt: "200px",
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            Histudy
          </Typography>
          <Typography
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
            }}
            sx={{
              fontSize: "40px",
              mt: "100px",
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            Make your study Group and Enjoy
          </Typography>

          <Button
            component={motion.button}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 3,
            }}
            variant="outlined"
            sx={{
              mt: "50px",
              borderRadius: "50px",
              fontSize: "20px",
              px: "30px",
              py: "10px",
              color: "primary.main",
              borderColor: "primary.main",
            }}
            onClick={() => navigate(mainButtonReturner("link"))}
          >
            {mainButtonReturner("text")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

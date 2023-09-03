import { Box, Button, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authorityState } from "../../store/atom";

const StyledContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
});

const StyledGradient = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))",
  zIndex: 10,
  width: "100%",
  minHeight: "100%",
  height: "100vh",
});

const StyledImage = styled(Box)({
  zIndex: 0,
  objectFit: "cover",
});

const StyledTextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "0",
  zIndex: "30",
  color: "white",
  alignItems: "center",
  width: "100%",
});

const StyledFirstTypo = styled(Typography)({
  fontSize: "80px",
  marginTop: "200px",
  fontWeight: "300",
  textAlign: "center",
});

const StyledSecondTypo = styled(Typography)({
  fontSize: "40px",
  marginTop: "100px",
  fontWeight: "300",
  textAlign: "center",
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "50px",
  borderRadius: "50px",
  fontSize: "20px",
  padding: "10px 30px", // 합쳐진 px와 py
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
}));

export default function MainImage() {
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
    <Box>
      <StyledContainer>
        <StyledGradient />
        <StyledImage
          component={`img`}
          src="./img/mainImg3.png"
          alt="Main Image"
          width={"100%"}
          height={"800px"}
        />
        <StyledTextContainer>
          <StyledFirstTypo
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            sx={{}}
          >
            Histudy
          </StyledFirstTypo>
          <StyledSecondTypo
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
            }}
            sx={{}}
          >
            Make your study Group and Enjoy
          </StyledSecondTypo>

          <StyledButton
            component={motion.button}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 3,
            }}
            variant="outlined"
            onClick={() => navigate(mainButtonReturner("link"))}
          >
            {mainButtonReturner("text")}
          </StyledButton>
        </StyledTextContainer>
      </StyledContainer>
    </Box>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import LoginButton from "../../components/LoginButton";
import { useRecoilValue } from "recoil";
import { isLoginState, isRegisterModalState } from "../../store/atom";
import { Input, TextField, Typography } from "@mui/material";
import "./css/Textfield.css";
// import Input from "../../theme/overrides/Input";

export default function Main() {
  const isLogin = useRecoilValue(isLoginState);
  const isRegisterModal = useRecoilValue(isRegisterModalState);
  return (
    <Box
      sx={{
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isLogin && <LoginButton />}
      {isRegisterModal && (
        <Box
          sx={{
            border: 1,
            borderColor: "primary.main",
            backgroundColor: "primary.light",
            borderRadius: "20px",
            width: "430px",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: " center",
          }}
        >
          <Typography sx={{ fontSize: "20px", color: "black" }}>
            정보 입력하기
          </Typography>

          <TextField
            className="login-textInput"
            sx={{ mt: "40px", width: "300px", zIndex: 1300 }}
            label="Name"
            variant="outlined"
          />
          <TextField
            className="login-textInput"
            sx={{ mt: "15px", width: "300px" }}
            label="Student Number"
            variant="outlined"
          />
          <TextField
            className="login-textInput"
            sx={{ mt: "15px", width: "300px" }}
            label="Contact Number"
            variant="outlined"
          />
          <Button variant="contained" sx={{ mt: "40px", width: "100px" }}>
            가입완료
          </Button>
        </Box>
      )}
    </Box>
  );
}

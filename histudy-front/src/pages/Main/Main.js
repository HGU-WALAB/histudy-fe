import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

import { useRecoilState } from "recoil";
import {
  isLoginState,
  isRegisterModalState,
  userLoginInfo,
} from "../../store/atom";
import { TextField, Typography } from "@mui/material";
import "./css/Textfield.css";
import { userSignup } from "../../apis/users";
import GoogleButton from "../../auth/GoogleButton";
import ImportCSV from "../../components/scv/ImportCSV";

// import Input from "../../theme/overrides/Input";

export default function Main() {
  const [sid, setSid] = React.useState("");

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [isRegisterModal, setIsRegisterModal] =
    useRecoilState(isRegisterModalState);
  const [userLoginInfoState, setUserLoginInfoState] =
    useRecoilState(userLoginInfo);
  console.log(userLoginInfoState);

  const nameConverter = (name) => {
    if (name.slice(-3) === "학부생") console.log(name.slice(0, -3));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const newUser = {
      sub: userLoginInfoState.sub,
      email: userLoginInfoState.email,
      name: nameConverter(userLoginInfoState.name),
      sid: sid,
    };
    if (sid.length === 0) {
      alert("학번을 입력해주세요");
      return;
    }
    if (sid.length !== 8) {
      alert("학번을 정확히 입력해주세요.");
      return;
    }
    const response = await userSignup(newUser);
    console.log(response);

    if (response.status === 201) {
      alert("회원가입이 완료되었습니다.");
      localStorage.setItem("accessToken", response.data.tokens.accessToken);
      localStorage.setItem("refreshToken", response.data.tokens.refreshToken);
      setIsRegisterModal(false);
      setUserLoginInfoState(null);
      setIsLogin(true);
      window.location.reload();
    }
  };

  // console.log(isLogin);
  return (
    <Box
      sx={{
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isLogin && <GoogleButton />}
      {isRegisterModal && (
        <Box
          sx={{
            // border: 1,
            // borderColor: "primary.light",
            backgroundColor: "primary.lighter",
            borderRadius: "20px",
            width: "430px",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: " center",
          }}
        >
          <Typography sx={{ fontSize: "20px", color: "text.default" }}>
            정보 입력하기
          </Typography>

          <TextField
            className="login-textInput"
            sx={{ mt: "40px", width: "300px", zIndex: 1300 }}
            label="Name"
            variant="outlined"
            value={userLoginInfoState?.name}
          />
          <TextField
            className="login-textInput"
            sx={{ mt: "15px", width: "300px" }}
            label="Student Number"
            variant="outlined"
            value={sid}
            onChange={(e) => setSid(e.target.value)}
          />
          <TextField
            // inputProps={{ }}
            className="login-textInput"
            sx={{ mt: "15px", width: "300px" }}
            label="Email"
            variant="outlined"
            value={userLoginInfoState?.email}
          />
          <Button
            variant="contained"
            sx={{ mt: "40px", width: "100px" }}
            onClick={handleClick}
          >
            가입완료
          </Button>
        </Box>
      )}

      <ImportCSV />
    </Box>
  );
}

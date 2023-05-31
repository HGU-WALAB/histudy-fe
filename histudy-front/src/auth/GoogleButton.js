// GoogleButton.js

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import React, { useRef } from "react";
import { userLogin, userSignup } from "../apis/users";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  isLoginState,
  isRegisterModalState,
  userLoginInfo,
} from "../store/atom";
import { useNavigate } from "react-router-dom";
import HeaderButton from "../components/HeaderButton";
import { Button } from "@mui/material";

// const clientId = "425799046707-34ek2gt3b287jdl3knk9ib796l998trt.apps.googleusercontent.com";

export default function GoogleButton() {
  const navigate = useNavigate();
  const setRegisterModalState = useSetRecoilState(isRegisterModalState);
  const setUserLoginInfo = useSetRecoilState(userLoginInfo);
  const setIsLogin = useRecoilValue(isLoginState);
  // const { loginWithCredential } = useAuthContext();
  const googleLoginRef = useRef(null);
  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);

    userLogin(decodedToken.sub)
      .then((response) => {
        if (response.data.isRegistered === true) {
          localStorage.setItem("accessToken", response.data.tokens.accessToken);
          localStorage.setItem(
            "refreshToken",
            response.data.tokens.refreshToken
          );
          window.location.href = "/";
          setIsLogin(true);
        }
      })
      .catch((error) => {
        if (error.response.data.isRegistered === false) {
          console.log("ddd", error.response.data);
          navigate("/");
          setRegisterModalState(true);
          setUserLoginInfo(decodedToken);
        }
      });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  const handleClick = () => {
    console.log(googleLoginRef.current);
    console.log(document.getElementById("google-login"));
    // document.getElementById("google-login").click();
    // if (googleLoginRef.current) {
    //   googleLoginRef.current.click();
    //   console.log("!");
    // }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <GoogleLogin
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={onFailure}
        useOneTap
        render={(renderProps) => {
          googleLoginRef.current = renderProps;
        }}
      />
    </GoogleOAuthProvider>
  );
}

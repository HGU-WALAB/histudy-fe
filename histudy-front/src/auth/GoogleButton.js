// GoogleButton.js

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import React from "react";
import { userLogin, userSignup } from "../apis/users";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  isLoginState,
  isRegisterModalState,
  userLoginInfo,
} from "../store/atom";
import { useNavigate } from "react-router-dom";

// const clientId = "425799046707-34ek2gt3b287jdl3knk9ib796l998trt.apps.googleusercontent.com";

export default function GoogleButton() {
  const navigate = useNavigate();
  const setRegisterModalState = useSetRecoilState(isRegisterModalState);
  const setUserLoginInfo = useSetRecoilState(userLoginInfo);
  const setIsLogin = useRecoilValue(isLoginState);
  // const { loginWithCredential } = useAuthContext();
  const onSuccess = async (credentialResponse) => {
    // console.log(credentialResponse);
    const decodedToken = jwtDecode(credentialResponse.credential);
    // console.log(decodedToken);

    userLogin(decodedToken.sub)
      .then((response) => {
        if (response.data.isRegistered === true) {
          localStorage.setItem("accessToken", response.data.tokens.accessToken);
          localStorage.setItem(
            "refreshToken",
            response.data.tokens.refreshToken
          );
          setIsLogin(true);
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.data.isRegistered === false) {
          navigate("/");
          setRegisterModalState(true);
          setUserLoginInfo(decodedToken);
        }
      });
    //   const data = {
    //     sub: decodedToken.sub,
    //     email: decodedToken.email,
    //     name: decodedToken.name,
    //     // sid:
    //   };

    //   userSignup(decodedToken.sub);

    // const data = {
    //   sub: decodedToken.sub,
    //   email: decodedToken.email,
    //   name: decodedToken.name,
    //   sid: decodedToken.sid,
    // };
    // console.log(data);

    // const loginResponse = await userLogin();
    // if (loginResponse.isRegistered) {
    //   localStorage.setItem("accessToken", loginResponse.tokens.accessToken);
    //   localStorage.setItem("refreshToken", loginResponse.tokens.refreshToken);
    // } else {
    // }

    // userLogin
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <GoogleLogin
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={onFailure}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
}

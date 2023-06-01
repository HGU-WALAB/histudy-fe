import { atom } from "recoil";

export const darkState = atom({
  key: "darkMode",
  default: false,
});

export const isLoginState = atom({
  key: "isLogin",
  default: true,
});

export const isRegisterModalState = atom({
  key: "isRegisterModal",
  default: false,
});

export const userLoginInfo = atom({
  key: "userLoginInfo",
  default: null,
});

import { Box, Button } from "@mui/material";
import { useMatch } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import GoogleButton from "../auth/GoogleButton";
import { authorityState, isLoginState } from "../store/atom";
import DarkModeToggle from "./DarkModeToggle";
import HeaderButton from "./HeaderButton";

export default function Header() {
  const homeMatch = useMatch("/");
  const groupMatch = useMatch("/group");
  const reportMatch = useMatch("/report");
  const rankMatch = useMatch("/rank");
  const enrollMatch = useMatch("/enroll");
  const managerMatch = useMatch("/manageClass");
  const profileMatch = useMatch("/profile");

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [role, setRole] = useRecoilState(authorityState);
  const handleLogOut = () => {
    alert("로그아웃 되었습니다.");
    setIsLogin(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setRole("NONUSER");
  };

  /**
   * @breif 해당 컴포넌트가 로그인한 유저의 권한에 맞는지 확인하는 함수
   * @param {*} component
   * @returns
   */
  const validateWithRole = (component) => {
    switch (component.props.name) {
      case "My Study":
        if (role === "MEMBER") return component;
        break;
      case "Report":
        if (role === "MEMBER") return component;
        break;
      case "Apply For HISTUDY":
        if (role === "USER") return component;
        break;
      case "MANAGER":
        if (role === "ADMIN") return component;
        break;
      case "My Profile":
        if (role !== "NONUSER") return component;
        break;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        // border: 1,
        backgroundColor: "",
        display: "flex",
        justifyContent: "space-between",
        paddingX: "40px",
        paddingY: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: "20px",
          alignItems: "center",
          width: "620px",
        }}
      >
        <HeaderButton
          link="/"
          name={<img src="./img/logo_histudy.png" width={130} />}
          match={homeMatch}
        />
        {/* <img src="./img/logo_histudy.png" width={130} /> */}
        {validateWithRole(
          <HeaderButton link="/group" name="My Study" match={groupMatch} />
        )}
        {validateWithRole(
          <HeaderButton link="/report" name="Report" match={reportMatch} />
        )}
        <HeaderButton link="/rank" name="Rank" match={rankMatch} />
        {validateWithRole(
          <HeaderButton
            link="/enroll"
            name="Apply For HISTUDY"
            color="text.header"
            match={enrollMatch}
          />
        )}
        {validateWithRole(
          <HeaderButton
            link="/manageClass"
            name="MANAGER"
            match={managerMatch}
          />
        )}
      </Box>

      <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {isLogin ? (
          <Button sx={{ color: "text.header" }} onClick={handleLogOut}>
            Log out
          </Button>
        ) : (
          <GoogleButton />
        )}

        {validateWithRole(
          <HeaderButton
            link="/profile"
            name="My Profile"
            match={profileMatch}
          />
        )}
        <DarkModeToggle />
      </Box>
    </Box>
  );
}

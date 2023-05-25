import { Box, Button, Paper, Switch, ToggleButton } from "@mui/material";
import { Link, useMatch } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import GoogleButton from "../auth/GoogleButton";
import { darkModeState } from "../store/atom";
import DarkModeToggle from "./DarkModeToggle";
import HeaderButton from "./HeaderButton";
import LoginButton from "./LoginButton";

export default function Header() {
  const homeMatch = useMatch("/");
  const groupMatch = useMatch("/group");
  const reportMatch = useMatch("/report");
  const rankMatch = useMatch("/rank");
  const enrollMatch = useMatch("/enroll");
  console.log(rankMatch);

  return (
    <Box
      sx={{
        // border: 1,
        backgroundColor: "",
        display: "flex",
        justifyContent: "space-between",
        paddingX: "50px",
        paddingY: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "650px",
        }}
      >
        <HeaderButton
          link="/"
          name={<img src="./img/logo_histudy.png" width={130} />}
          match={homeMatch}
        />
        {/* <img src="./img/logo_histudy.png" width={130} /> */}
        <HeaderButton link="/group" name="My Group" match={groupMatch} />
        <HeaderButton link="/report" name="Report" match={reportMatch} />
        <HeaderButton link="/rank" name="Rank" match={rankMatch} />
        <HeaderButton
          link="/enroll"
          name="Sign Up for HISTUDY"
          color="text.secondary"
          match={enrollMatch}
        />
      </Box>
      <Box>
        <GoogleButton />
      </Box>
      <Box>
        <Button sx={{ color: "text.secondary" }}>Log out</Button>
        <Button>My Account</Button>
        <DarkModeToggle />
      </Box>
    </Box>
  );
}

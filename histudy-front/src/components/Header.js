import { Box, Button, Paper, Switch, ToggleButton } from "@mui/material";
import { Link, useMatch } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { darkModeState } from "../store/atom";
import DarkModeToggle from "./DarkModeToggle";
import HeaderButton from "./HeaderButton";

export default function Header() {
  // const myGroupMatch = useMatch("/match")
  // const reporterMatch = useMatch("/report")
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
        paddingX: "25px",
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
        <img src="./img/logo_histudy.png" width={130} />
        <Button sx={{}}>My Group</Button>
        <Button>Report</Button>
        <HeaderButton link="/rank" name="Rank" match={rankMatch} />
        <HeaderButton
          link="/enroll"
          name="Sign Up for HISTUDY"
          color="text.secondary"
          match={enrollMatch}
        />
      </Box>
      <Box>
        <Button sx={{ color: "text.secondary" }}>Log out</Button>
        <Button>My Account</Button>
        <DarkModeToggle />
      </Box>
    </Box>
  );
}

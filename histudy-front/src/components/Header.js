import { Box, Button, Paper, Switch, ToggleButton } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { darkModeState } from "../store/atom";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
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
        <Button>Rank</Button>
        <Button sx={{}}>Sign Up for HISTUDY</Button>
      </Box>
      <Box>
        <Button sx={{}}>Log out</Button>
        <Button>My Account</Button>
        <DarkModeToggle />
      </Box>
    </Box>
  );
}

import { Box, Button } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        // border: 1,
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
        <Button>My Group</Button>
        <Button>Report</Button>
        <Button>Rank</Button>
        <Button sx={{ color: "gray" }}>Sign Up for HISTUDY</Button>
      </Box>
      <Box>
        <Button sx={{ color: "gray" }}>Log out</Button>
        <Button>My Account</Button>
      </Box>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import ExportCSV from "./scv/ExportCSV";
import { useMatch } from "react-router-dom";

export default function Footer() {
  const mainMatch = useMatch("/");
  return (
    <>
      {mainMatch ? (
        <Box></Box>
      ) : (
        <Box
          sx={{
            height: "100px",
            px: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "end" }}>
            <img src="./img/logo_histudy.png" width={120} />
            <Typography
              variant="caption"
              sx={{ mx: { md: 5, sm: 2, xs: 2 }, whiteSpace: "nowrap" }}
            >
              <strong>ⓒ </strong> 2023 SWTeam5. All rights reserved.
            </Typography>
          </Box>
          <Box>
            <a
              href="https://github.com/orgs/Hisstudy-team05/repositories"
              target="_blank"
            >
              <img
                src="/img/github.png"
                style={{ borderRadius: "100%" }}
                width={60}
              />
            </a>
          </Box>

          {/* <ExportCSV /> */}
        </Box>
      )}
    </>
  );
}

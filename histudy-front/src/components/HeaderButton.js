import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function HeaderButton({ link, name, match, color }) {
  return (
    <Link to={link}>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Button sx={{ color: color }}>{name}</Button>
        {match && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              mx: "auto",
              width: "10px",
              height: "10px",
              borderRadius: "100%",
              backgroundColor: `${color ? color : "primary.main"}`,
            }}
          ></Box>
        )}
      </Box>
    </Link>
  );
}

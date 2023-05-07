import { Button } from "@mui/material";

export default function LongButton({ onClick, name, bgColor, fontColor }) {
  return (
    <Button
      id={name}
      onClick={onClick}
      sx={{
        fontSize: "17px",
        py: "5px",
        px: 7,
        mt: 2,
        backgroundColor: bgColor,
        color: fontColor,
      }}
    >
      {name}
    </Button>
  );
}

import { Button } from "@mui/material";

export default function RoundButton({ onClick, name, bgColor, fontColor }) {
  return (
    <Button
      id={name}
      onClick={onClick}
      sx={{
        fontWeight: "normal", // 'bold
        fontSize: "12px",
        py: "3px",
        px: 3,
        backgroundColor: bgColor,
        color: fontColor,
        borderRadius: "15px",
      }}
    >
      {name}
    </Button>
  );
}

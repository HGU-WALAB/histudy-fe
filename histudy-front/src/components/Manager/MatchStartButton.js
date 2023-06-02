import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function MatchStartButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        style={{
          color: "#007AFF",
          backgroundColor: "#E4F1FF",
          borderRadius: 7,
        }}
      >
        그룹 매칭하기
      </Button>
    </Stack>
  );
}

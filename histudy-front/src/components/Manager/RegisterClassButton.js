import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function RegisterClassButton() {
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
        수업 목록 불러오기
      </Button>
    </Stack>
  );
}

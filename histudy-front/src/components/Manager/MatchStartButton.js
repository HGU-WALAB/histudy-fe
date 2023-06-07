import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { teamMatch } from "../../apis/manager";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { unGroupState } from "../../store/atom";

export default function MatchStartButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
        }}
        style={{
          color: "white",
          // backgroundColor: "primary.darker",
          borderRadius: 7,
        }}
        onClick={() => {
          teamMatch();
          alert("매칭 완료!");
        }}
      >
        그룹 매칭하기
      </Button>
    </Stack>
  );
}

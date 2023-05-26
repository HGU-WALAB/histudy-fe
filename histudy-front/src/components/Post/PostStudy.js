import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PostStudy({ studyTime, setStudyTime }) {
  const [startTime, setStartTime] = useState(getCurrentTime());
  const [endTime, setEndTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  function duringTime(startTime, endTime) {
    const start = startTime.split(":");
    const end = endTime.split(":");
    return (end[0] - start[0]) * 60 + (end[1] - start[1]);
  }

  useEffect(() => {
    const dT = duringTime(startTime, endTime);
    if (dT < 0) setStudyTime(0);
    else setStudyTime(dT);
  }, [startTime, endTime]);

  return (
    <Box sx={{ display: "flex", gap: "30px" }}>
      <Box sx={{ width: "25%" }}>
        <Typography>시작 시간</Typography>
        <TextField
          sx={{ width: "100%" }}
          type="time"
          value={startTime}
          onChange={(e) => {
            setStartTime(e.target.value);
            console.log(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: "25%" }}>
        <Typography>종료 시간</Typography>
        <TextField
          type="time"
          sx={{ width: "100%" }}
          value={endTime}
          onChange={(e) => {
            setEndTime(e.target.value);
            console.log(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: "50%" }}>
        <Typography>스터디 시간</Typography>
        <Box
          sx={{
            width: "100%",
            border: 1,
            borderColor: "lightGray",
            borderRadius: "7px",
            paddingY: "15px",
            paddingX: "20px",
            backgroundColor: "white",
          }}
        >
          {studyTime} 분
        </Box>
      </Box>
    </Box>
  );
}

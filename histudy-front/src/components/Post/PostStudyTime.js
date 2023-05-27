import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

export default function PostStudyTime({ setValue, getValues, control }) {
  function duringTime(startTime, endTime) {
    const start = startTime.split(":");
    const end = endTime.split(":");
    return (end[0] - start[0]) * 60 + (end[1] - start[1]);
  }

  useEffect(() => {
    const dT = duringTime(
      getValues("startTime") + "",
      getValues("endTime") + ""
    );
    if (dT < 0) setValue("totalMinutes", "0");
    else setValue("totalMinutes", dT + "");
    console.log("!");
  }, [getValues("startTime") + "", getValues("endTime") + ""]);

  return (
    <Box sx={{ display: "flex", gap: "30px" }}>
      <Box sx={{ width: "25%" }}>
        <Typography>시작 시간</Typography>
        <Controller
          name="startTime"
          control={control}
          render={({ field }) => (
            <TextField {...field} sx={{ width: "100%" }} type="time" />
          )}
        />
      </Box>
      <Box sx={{ width: "25%" }}>
        <Typography>종료 시간</Typography>
        <Controller
          name="endTime"
          control={control}
          render={({ field }) => (
            <TextField {...field} sx={{ width: "100%" }} type="time" />
          )}
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
          {getValues("totalMinutes")} 분
        </Box>
      </Box>
    </Box>
  );
}

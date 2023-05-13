import { Box, Typography } from "@mui/material";
import { useState } from "react";
import GrayBorderBox from "../../components/GrayBorderBox";
import LongButton from "../../components/LongButton";

export default function Group() {
  const [studies, setStudies] = useState([
    { name: "알고리즘 분석", professor: "이원형 교수님" },
    { name: "데이타 베이스", professor: "홍참길 교수님" },
  ]);
  const [friends, setFriends] = useState([
    {
      name: "오인혁",
      id: "21800446",
    },
    {
      name: "한시온",
      id: "21800888",
    },
  ]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "50px",
      }}
    >
      <Typography variant="h4" sx={{ mb: "10px" }}>
        스터디 그룹 정보
      </Typography>
      <Typography>스터디 그룹이 아직 배정되지 않았어요😅</Typography>

      <GrayBorderBox studies={studies} friends={friends} />
      <LongButton
        name="다시 제출하기"
        bgColor="primary.main"
        fontColor="white"
      />
    </Box>
  );
}

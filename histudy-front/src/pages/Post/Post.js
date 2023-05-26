import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import PostBox from "../../components/PostBox";
import LongButton from "../../components/LongButton";
import RoundButton from "../../components/RoundButton";
import { CheckBox } from "@mui/icons-material";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { useEffect, useState } from "react";
import PostStudy from "../../components/Post/PostStudy";
import PostMember from "../../components/Post/PostMember";
export default function Post({ children }) {
  const [checkedValues, setCheckedValues] = useState([]);
  const [studyTime, setStudyTime] = useState(0);

  const handleSubmit = () => {
    console.log("제출");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        mx: "auto",
      }}
    >
      <Typography variant="h5" sx={{ my: "50px", textAlign: "center" }}>
        스터디 모임 보고서 작성
      </Typography>
      <PostBox sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ mr: "10px" }}>
            코드를 생성해서 참여한 멤버들과 사진을 찍고 인증샷을 올려주세요.
          </Typography>
          <RoundButton
            onClick={() => {
              console.log("인증 코드 생성");
            }}
            name="인증 코드 생성"
            bgColor="primary.main"
            fontColor="white"
          />
        </Box>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "background.default",
            borderColor: "primary.main",
            color: "primary.main",
            fontWeight: "normal",
            mt: "20px",
          }}
        >
          인증샷 업로드
        </Button>
      </PostBox>

      <PostBox>
        <Typography variant="body2" sx={{ mb: "20px" }}>
          스터디에 참여한 맴버를 선택해주세요.
        </Typography>
        <PostMember
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
        />
      </PostBox>
      <PostBox>
        <Typography variant="body2" sx={{ mb: "20px" }}>
          스터디 시간을 알려주세요.
        </Typography>
        <PostStudy setStudyTime={setStudyTime} studyTime={studyTime} />
      </PostBox>

      <PostBox>
        <Typography variant="body2" sx={{ mb: "20px" }}>
          스터디 보고서를 작성해주세요.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextField variant="outlined" placeholder="제목" />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            placeholder="보고서 내용"
          />
        </Box>
      </PostBox>
      <LongButton
        name="제출"
        bgcolor="primary.main"
        fontColor="white"
        onClick={handleSubmit}
      />
    </Box>
  );
}

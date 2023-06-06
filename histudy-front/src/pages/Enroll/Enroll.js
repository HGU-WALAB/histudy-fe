import {
  Autocomplete,
  Button,
  InputAdornment,
  TextField,
  Typography,
  withStyles,
} from "@mui/material";
import { border, Box } from "@mui/system";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CustomTable from "../../components/CustomTable";
import LongButton from "../../components/LongButton";
import GrayBorderBox from "../../components/GrayBorderBox";
import ProgressBar from "../../components/ProgressBar";
import { autoCourses, getCourses, teamCourses } from "../../apis/course";
import { autoUser } from "../../apis/users";
import Friends from "../../components/Enroll/Friends";
import Courses from "../../components/Enroll/Courses";
import { studyEnroll } from "../../apis/study";
import { useLocation, useNavigate } from "react-router-dom";

export default function Enroll() {
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setSideCourses(
        location.state.courses.map((course) => [
          course.name,
          course.code,
          course.prof,
          course.id,
        ])
      );
      setSideFriends(
        location.state.friends.map((friend) => [friend.name, friend.sid])
      );
    }
  }, []);

  const firstData = [
    ["오인혁", "21800446", "8156217@naver.com"],
    ["한시온", "21800446", "8156217@naver.com"],
    ["배주영", "21800446", "8156217@naver.com"],
    ["이인혁", "21800446", "8156217@naver.com"],
    ["김진수", "21800446", "8156217@naver.com"],
  ];

  const secondDate = [
    ["Open-source Software Laboratories", "0000000", "홍참길"],
    ["Open-source Software Laboratories", "0000000", "홍참길"],
    ["Open-source Software Laboratories", "0000000", "홍참길"],
    ["Open-source Software Laboratories", "0000000", "홍참길"],
  ];

  const thirdData = [
    ["1", "알고리듬분석", "ECE40008", "용환기"],
    ["2", "RF회로 설계", "ECE30011", "김영식"],
  ];

  const [page, setPage] = useState(1);

  const [sideFriends, setSideFriends] = useState([]);

  const expandCourses = (courses) => {
    if (courses.length === 1) {
      return [courses[0], courses[0], courses[0]];
    } else if (courses.length === 2) {
      return [courses[0], courses[1], courses[1]];
    }
    return courses;
  };

  const navigate = useNavigate();
  const handleClick = (event) => {
    const ID = event.target.id;
    console.log(ID);
    if (ID === "다음") setPage((prev) => prev + 1);
    else if (ID === "이전") setPage((prev) => prev - 1);
    else if (ID === "제출") {
      const data = {
        friendIds: sideFriends.map((elem) => elem[1]),
        courseIds: expandCourses(sideCourses.map((elem) => elem[3])),
      };
      if (data.courseIds.length === 0) {
        alert("과목을 최소 1개는 선택해야 합니다.");
        return;
      }
      alert("스터디 신청이 완료되었습니다.");
      studyEnroll(data);
      navigate("/");
      console.log(data);
    }
  };
  const [sideCourses, setSideCourses] = useState([]);

  const rankConverter = (sideCourses) => {
    // let i = 1;
    const result = [];
    sideCourses.map((elem) => {
      result.push([elem[0], elem[1], elem[2]]);
    });
    return result;
  };

  return (
    <Box sx={{ display: "flex", py: "80px", px: "300px", minHeight: "100vh" }}>
      <Box sx={{ position: "absolute", left: "40px", top: "30px" }}>
        <ProgressBar page={page} setPage={setPage} />
        <GrayBorderBox
          courses={sideCourses}
          friends={sideFriends}
          setSideCourses={setSideCourses}
          setSideFriends={setSideFriends}
        />
      </Box>
      <Box sx={{ width: "100%", ml: "70px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: "20px", fontWeight: "500" }}
        >
          Histudy 신청하기
        </Typography>

        {page === 1 && (
          <>
            <Typography sx={{ textAlign: "center", fontWeight: "400" }}>
              스터디를 함께하고 싶은 친구가 있다면 추가하세요!
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                textAlign: "center",
                mt: "5px",
                mb: "30px",
                fontWeight: "600",
              }}
            >
              서로 함께 하고 싶은 친구로 신청해야 매칭됩니다! (최대 4명)
            </Typography>
            <Friends
              sideFriends={sideFriends}
              setSideFriends={setSideFriends}
            />
            {/* <Typography
              sx={{ color: "primary.main", textAlign: "center", mt: 4 }}
            >
              서로 함께 하고 싶은 친구로 신청해야 매칭됩니다!
            </Typography> */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <LongButton
                name="다음"
                onClick={handleClick}
                bgColor="primary.main"
                fontColor="white"
              />
            </Box>
          </>
        )}

        {page === 2 && (
          <>
            <Typography sx={{ textAlign: "center" }}>
              스터디를 하고 싶은 희망 과목들을 담아주세요!
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                textAlign: "center",
                mt: "5px",
                mb: "30px",
                fontWeight: "600",
              }}
            >
              최소 1과목, 최대 3과목
            </Typography>

            <Courses
              sideCourses={sideCourses}
              setSideCourses={setSideCourses}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                }}
              >
                <LongButton
                  name="이전"
                  onClick={handleClick}
                  bgColor="primary.border"
                  fontColor="primary.main"
                />
                <LongButton
                  name="다음"
                  onClick={handleClick}
                  bgColor="primary.main"
                  fontColor="white"
                />
              </Box>
            </Box>
          </>
        )}
        {page === 3 && (
          <>
            <Typography sx={{ textAlign: "center", height: "50px" }}>
              스터디 희망 과목의 우선 순위를 정해주세요!
            </Typography>

            <CustomTable
              data={rankConverter(sideCourses)}
              addData={setSideCourses}
              accentColumnNum={-1}
              longWidthColumnNum={2}
              type="third"
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                }}
              >
                <LongButton
                  name="이전"
                  onClick={handleClick}
                  bgColor="primary.border"
                  fontColor="primary.main"
                />

                <LongButton
                  name="제출"
                  onClick={handleClick}
                  bgColor="primary.main"
                  fontColor="white"
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

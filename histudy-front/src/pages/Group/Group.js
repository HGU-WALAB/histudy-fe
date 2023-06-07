import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import GrayBorderBox from "../../components/GrayBorderBox";
import LongButton from "../../components/LongButton";
import { getMyGroup } from "../../apis/study";
import { Link } from "react-router-dom";
import NoDataLottie from "../../components/NoDataLottie";
import { getMyTeamUsers } from "../../apis/users";
import CustomTable from "../../components/CustomTable";
import { motion } from "framer-motion";

export default function Group() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [convertedTeamMembers, setConvertedTeamMembers] = useState([]);

  const teamMembersConverter = (teamMembers) => {
    return [
      ...teamMembers?.map((teamMember) => {
        const memberRow = [teamMember.name, teamMember.sid, teamMember.email];

        return memberRow;
      }),
    ];
  };

  const [hasTeam, setHasTeam] = useState(false);

  // team 유저 정보
  useEffect(() => {
    getMyTeamUsers()
      .then((res) => {
        setTeamMembers(res);
        setHasTeam(true);
        // console.log(res);
        // console.log("!!" + typeof teamMembersConverter(res));
        setConvertedTeamMembers(teamMembersConverter(res));
      })
      .catch((err) => {
        setHasTeam(false);
      });
  }, []);

  const [courses, setCourses] = useState([
    // { name: "알고리즘 분석", professor: "이원형 교수님" },
    // { name: "데이타 베이스", professor: "홍참길 교수님" },
  ]);
  const [friends, setFriends] = useState([
    // {
    //   name: "오인혁",
    //   id: "21800446",
    // },
    // {
    //   name: "한시온",
    //   id: "21800888",
    // },
  ]);

  const [convertedCourses, setConvertedCourses] = useState([]);
  const [convertedFriends, setConvertedFriends] = useState([]);

  useEffect(() => {
    getMyGroup().then((res) => {
      setCourses(res.courses);

      setConvertedCourses(
        res.courses.map((course) => [course.name, course.prof, course.code])
      );
      setFriends(res.friends);
      setConvertedFriends(
        res.friends.map((friend) => [friend.name, friend.sid])
      );
    });
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "50px",
      }}
    >
      <Typography sx={{ fontSize: "30px", fontWeight: "300" }}>
        스터디 그룹 정보
      </Typography>
      {hasTeam ? (
        <Box sx={{ mt: 5 }}>
          <CustomTable
            // reportData={convertedTeamMembers}
            data={convertedTeamMembers}
            accentColumnNum={-1}
            longWidthColumnNum={-1}
            type="group"
          />
        </Box>
      ) : convertedCourses.length === 0 && convertedFriends.length === 0 ? (
        <Box sx={{ mt: "100px" }}>
          <NoDataLottie />
        </Box>
      ) : (
        <>
          <Typography>스터디 그룹이 아직 배정되지 않았어요😅</Typography>

          <GrayBorderBox
            courses={convertedCourses}
            friends={convertedFriends}
          />

          <Link
            to="/enroll"
            state={{
              courses,
              friends,
            }}
          >
            <LongButton
              name="다시 제출하기"
              bgColor="primary.main"
              fontColor="white"
            />
          </Link>
        </>
      )}
    </Box>
  );
}

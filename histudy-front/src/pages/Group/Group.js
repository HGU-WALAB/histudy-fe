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

export default function Group({ setReApply }) {
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
    getMyGroup().then((res) => {
      console.log("deb", res.courses);

      setCourses(res.courses);
      setConvertedCourses(
        res.courses.map((course) => [course.name, course.prof, course.code])
      );
      setFriends(res.friends);
      setConvertedFriends(
        res.friends.map((friend) => [friend.name, friend.sid])
      );
    });

    getMyTeamUsers().then((res) => {
      setTeamMembers(res);

      if (res.length === 0) setHasTeam(false);
      else setHasTeam(true);

      setConvertedTeamMembers(teamMembersConverter(res));
    });
  }, []);

  const [courses, setCourses] = useState([]);
  const [friends, setFriends] = useState([]);

  const [convertedCourses, setConvertedCourses] = useState([]);
  const [convertedFriends, setConvertedFriends] = useState([]);

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
          <Typography sx={{ mt: "10px", mb: "30px" }}>
            스터디 그룹이 아직 배정되지 않았어요😅
          </Typography>

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
              onClick={(e) => {
                // e.preventDefault();
                setReApply(false);
              }}
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

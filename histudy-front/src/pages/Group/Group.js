import { Box, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import GrayBorderBox from "../../components/common/GrayBorderBox";
import LongButton from "../../components/common/LongButton";
import { getMyGroup } from "../../apis/study";
import { Link } from "react-router-dom";
import NoDataLottie from "../../components/common/NoDataLottie";
import { getMyTeamUsers } from "../../apis/users";
import CustomTable from "../../components/common/CustomTable";
import { motion } from "framer-motion";
import Title from "../../components/common/Title";
import { StyledColumnAlignLayout } from "../../components/common/StyledLayout";

const StyledScrollTableSize = styled(Box)({
  width: "90%",
  maxWidth: "900px",
  overflow: "scroll",
});

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
    <StyledColumnAlignLayout
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Title text={"스터디 그룹 정보"} />
      {hasTeam ? (
        <StyledScrollTableSize>
          <CustomTable
            // reportData={convertedTeamMembers}
            data={convertedTeamMembers}
            accentColumnNum={-1}
            longWidthColumnNum={-1}
            type="group"
          />
        </StyledScrollTableSize>
      ) : convertedCourses.length === 0 && convertedFriends.length === 0 ? (
        <Box>
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
                setReApply(false);
              }}
              name="신청 수정하기"
              bgColor="primary.main"
              fontColor="white"
            />
          </Link>
        </>
      )}
    </StyledColumnAlignLayout>
  );
}

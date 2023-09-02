import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { border, Box } from "@mui/system";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CustomTable from "../../components/CustomTable";
import LongButton from "../../components/LongButton";
import GrayBorderBox from "../../components/GrayBorderBox";
import ProgressBar from "../../components/ProgressBar";
import SideBar from "../../components/Manager/SideBar";
import YearSelectButton from "../../components/Manager/YearSelectButton";
import SemesterSelectButton from "../../components/Manager/SemesterSelectButton";
import RegisterClassButton from "../../components/Manager/RegisterClassButton";
import ManagerTable from "../../components/Manager/ManagerTable";
import GroupTable from "../../components/Manager/GroupTable";
import UnGroupTable from "../../components/Manager/UnGroupTable";
import GroupTables from "../../components/Manager/GroupTables";
import CreateGroupTable from "../../components/Manager/CreateGroupTable";
import MatchStartButton from "../../components/Manager/MatchStartButton";
import { readApplicants } from "../../apis/manager";
import { useSetRecoilState } from "recoil";
import { isLoadingState } from "../../store/atom";
import Title from "../../components/Manager/Table/Title";
import { StyledLayout } from "./style/StyledLatout";
import { StyledTitleFlexBox } from "./style/StyledTitleFlexBox";

export default function CreateGroup() {
  const [allData, setAllData] = useState();
  const setIsLoading = useSetRecoilState(isLoadingState);
  useEffect(() => {
    setIsLoading(true);
    readApplicants().then((data) => {
      console.log(data);
      setAllData(data);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    console.log(allData);
  }, [allData]);
  // const allData = [
  //   {
  //     id: 1,
  //     name: "오인혁",
  //     number: "21800339",
  //     friends: [
  //       {
  //         id: 5,
  //         name: "김진수",
  //         number: "21800394",
  //       },
  //     ],
  //     courses: [
  //       {
  //         id: 1,
  //         name: "Software Engineering",
  //       },
  //       {
  //         id: 2,
  //         name: "Open-source Software Laboratories",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "배주영",
  //     number: "21800111",
  //     friends: [],
  //     courses: [
  //       {
  //         id: 1,
  //         name: "Software Engineering",
  //       },
  //       {
  //         id: 2,
  //         name: "Open-source Software Laboratories",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "한시온",
  //     number: "21800112",
  //     friends: [],
  //     courses: [
  //       {
  //         id: 1,
  //         name: "Software Engineering",
  //       },
  //       {
  //         id: 2,
  //         name: "Open-source Software Laboratories",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "이인혁",
  //     number: "21800239",
  //     friends: [],
  //     courses: [
  //       {
  //         id: 1,
  //         name: "Software Engineering",
  //       },
  //       {
  //         id: 2,
  //         name: "Open-source Software Laboratories",
  //       },
  //     ],
  //   },
  // ];

  return (
    <StyledLayout>
      <SideBar />

      <Box sx={{ width: "100%" }}>
        <Box>
          <StyledTitleFlexBox>
            <Title text={"신청자 리스트"} />
            <MatchStartButton />
          </StyledTitleFlexBox>
          {allData && (
            <CreateGroupTable
              data={allData}
              accentColumnNum={-1}
              longWidthColumnNum={-1}
              type="all"
            />
          )}
        </Box>
      </Box>
    </StyledLayout>
  );
}

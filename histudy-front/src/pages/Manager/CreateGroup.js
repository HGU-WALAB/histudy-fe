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

export default function CreateGroup() {
  const [allData, setAllData] = useState();

  useEffect(() => {
    readApplicants().then((data) => {
      setAllData(data);
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
    <Box sx={{ display: "flex", py: "50px", px: "300px" }}>
      <Box sx={{ position: "fixed", left: "30px", top: "10rem" }}>
        <SideBar />
      </Box>
      <Box sx={{ width: "100%", ml: "50px" }}>
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "1rem",
            }}
          >
            <Typography variant="h7">신청자 리스트</Typography>
            <MatchStartButton sx={{ ml: "auto" }} />
          </Box>
          {allData && (
            <CreateGroupTable
              data={allData}
              accentColumnNum={-1}
              longWidthColumnNum={-1}
              type="all"
            />
          )}
        </>
      </Box>
    </Box>
  );
}

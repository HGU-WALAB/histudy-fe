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
import StudyGroupTable from "../../components/Manager/StudyGroupTable";
import { readAllGroups } from "../../apis/manager";

export default function StudyGroup() {
  const [groupData, setGroupData] = useState();
  const [searchResult, setSearchResult] = useState();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    readAllGroups().then((data) => {
      setSearchResult(data);
      setGroupData(data);
    });
  }, []);
  // const groupData = [
  //   {
  //     group: 1,
  //     members: [
  //       {
  //         id: 1,
  //         name: "오인혁",
  //         sid: "21800339",
  //         friends: [
  //           {
  //             id: 5,
  //             name: "김진수",
  //             sid: "21800394",
  //           },
  //         ],
  //         courses: [
  //           {
  //             id: 1,
  //             name: "Software Engineering",
  //           },
  //           {
  //             id: 2,
  //             name: "Open-source Software Laboratories",
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         name: "배주영",
  //         sid: "21800111",
  //         friends: [],
  //         courses: [
  //           {
  //             id: 1,
  //             name: "Software Engineering",
  //           },
  //           {
  //             id: 2,
  //             name: "Open-source Software Laboratories",
  //           },
  //         ],
  //       },
  //       {
  //         id: 3,
  //         name: "한시온",
  //         sid: "21800112",
  //         friends: [],
  //         courses: [
  //           {
  //             id: 1,
  //             name: "Software Engineering",
  //           },
  //           {
  //             id: 2,
  //             name: "Open-source Software Laboratories",
  //           },
  //         ],
  //       },
  //       {
  //         id: 4,
  //         name: "이인혁",
  //         sid: "21800239",
  //         friends: [],
  //         courses: [
  //           {
  //             id: 1,
  //             name: "Software Engineering",
  //           },
  //           {
  //             id: 2,
  //             name: "Open-source Software Laboratories",
  //           },
  //         ],
  //       },
  //     ],

  //     reports: 3,
  //     totalMinutes: 120,
  //   },
  //   {
  //     group: 2,
  //     members: [
  //       {
  //         id: 5,
  //         name: "장유진",
  //         number: "21800459",
  //         friends: [],
  //         subjects: [
  //           {
  //             id: 1,
  //             name: "Software Engineering",
  //           },
  //           {
  //             id: 2,
  //             name: "Open-source Software Laboratories",
  //           },
  //         ],
  //       },
  //       {
  //         id: 6,
  //         name: "최혜림",
  //         number: "21800333",
  //         friends: [],
  //         subjects: [
  //           {
  //             id: 1,
  //             name: "Software Engineering",
  //           },
  //           {
  //             id: 2,
  //             name: "Open-source Software Laboratories",
  //           },
  //         ],
  //       },
  //       {
  //         id: 7,
  //         name: "정석민",
  //         number: "21800123",
  //         friends: [],
  //         subjects: [
  //           {
  //             id: 1,
  //             name: "Software Engineering",
  //           },
  //           {
  //             id: 2,
  //             name: "Open-source Software Laboratories",
  //           },
  //         ],
  //       },
  //       {
  //         id: 8,
  //         name: "송다빈",
  //         number: "21800233",
  //         friends: [],
  //         subjects: [
  //           {
  //             id: 1,
  //             name: "Software Engineering",
  //           },
  //           {
  //             id: 2,
  //             name: "Open-source Software Laboratories",
  //           },
  //         ],
  //       },
  //     ],

  //     reports: 4,
  //     times: 120,
  //   },
  // ];

  const [page, setPage] = useState(1);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  let sheetData;

  if (groupData) {
    sheetData = groupData.flatMap((group) =>
      group.members.map((member) => ({
        Group: group.group,
        MemberID: member.id,
        MemberName: member.name,
        MemberNumber: member.sid,
        Friends: member.friends.map((friend) => friend.name).join(", "),
        Subjects: member.courses.map((subject) => subject.name).join(", "),
        Reports: group.reports,
        Times: group.times,
      }))
    );
  }
  const xlsx = require("xlsx");

  const excelDownload = () => {
    if (groupData) {
      console.log("sheetData");
      console.log(sheetData);
      const ws = xlsx.utils.json_to_sheet([...sheetData]);
      const wb = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

      xlsx.writeFile(wb, "dramatis_personae.xlsx");
    } else {
      console.log("데이터가 비어있습니다.");
    }
  };

  useEffect(() => {
    if (searchValue) {
      let result;
      if (!isNaN(searchValue)) {
        result = groupData.filter((data) => data.group === Number(searchValue));
      } else {
        result = groupData.filter((data) => {
          return data.members.some((member) =>
            member.name.includes(searchValue)
          );
        });
      }

      setSearchResult(result);
    } else if (searchValue === "") {
      setSearchResult(groupData);
    }
  }, [searchValue]);

  return (
    <Box sx={{ display: "flex", py: "50px", px: "300px" }}>
      <Box sx={{ position: "fixed", left: "30px", top: "13rem" }}>
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
            <Typography variant="h7">그룹 활동 목록</Typography>
            <TextField
              id="search"
              type="search"
              label="Search"
              value={searchValue}
              onChange={handleChange}
              sx={{
                width: "30rem",
                borderRadius: "30px",
                mb: 4,
                "& .MuiInputBase-root": {
                  borderRadius: "30px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="학생 이름, 그룹 검색"
            />
          </Box>

          {searchResult && (
            <StudyGroupTable
              searchResult={searchResult}
              data={searchResult}
              accentColumnNum={-1}
              longWidthColumnNum={-1}
              type="studyGroup"
            />
          )}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <LongButton
              name="목록 받기"
              onClick={excelDownload}
              bgColor="primary.main"
              fontColor="white"
            />
          </Box>
        </>
      </Box>
    </Box>
  );
}

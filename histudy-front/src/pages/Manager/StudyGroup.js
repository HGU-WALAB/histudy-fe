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

  useEffect(() => {
    readAllGroups().then((data) => {
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
  //         number: "21800339",
  //         friends: [
  //           {
  //             id: 5,
  //             name: "김진수",
  //             number: "21800394",
  //           },
  //         ],
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
  //         id: 2,
  //         name: "배주영",
  //         number: "21800111",
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
  //         id: 3,
  //         name: "한시온",
  //         number: "21800112",
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
  //         id: 4,
  //         name: "이인혁",
  //         number: "21800239",
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

  //     reports: 3,
  //     times: 120,
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

  const [friendInput, setFriendInput] = useState("");
  const handleChange = (event) => {
    setFriendInput(event.target.value);
  };

  const handleClick = (event) => {
    const ID = event.target.id;
    console.log(ID);
    if (ID === "다음") setPage((prev) => prev + 1);
    else if (ID === "이전") setPage((prev) => prev - 1);
    else if (ID === "제출") alert("제출되었습니다.");
  };

  // const columns = [
  //   { A: "학과", B: "직급", C: "이름", D: "나이" },

  //   { A: "흉부외과", B: "PA간호사", C: "소이현", D: "33" },

  //   { A: "소아외과", B: "PA간호사", C: "한현희", D: "29" },

  //   { A: "산부인과", B: "분만실간호사", C: "한한승주현희", D: "41" },

  //   { A: "산부인과", B: "PA간호사", C: "은선진", D: "36" },

  //   { A: "간담췌외과", B: "수간호사", C: "송수빈", D: "45" },

  //   { A: "간담췌외과", B: "병동간호사", C: "이영하", D: "35" },

  //   { A: "간담췌외과", B: "병동간호사", C: "김재환", D: "28" },

  //   { A: "간담췌외과", B: "PA간호사", C: "국해성", D: "32" },

  //   { A: "간담췌외과", B: "이식코디네이터", C: "함덕주", D: "37" },

  //   { A: "신경외과", B: "PA간호사", C: "황재신", D: "39" },

  //   { A: "응급의학과", B: "응급실간호사", C: "선우희수", D: "26" },
  // ];
  // const sheetData = groupData.flatMap((group) =>
  //   group.members.map((member) => ({
  //     Group: group.group,
  //     MemberID: member.id,
  //     MemberName: member.name,
  //     MemberNumber: member.number,
  //     Friends: member.friends.map((friend) => friend.name).join(", "),
  //     Subjects: member.subjects.map((subject) => subject.name).join(", "),
  //     Reports: group.reports,
  //     Times: group.times,
  //   }))
  // );

  // const xlsx = require("xlsx");

  // const excelDownload = () => {
  //   const ws = xlsx.utils.json_to_sheet([...sheetData]);
  //   const wb = xlsx.utils.book_new(); // 가상의 엑셀파일 생성
  //   xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

  //   xlsx.writeFile(wb, "dramatis_personae.xlsx"); // 엑셀파일 생성 후 저장 형식
  // };

  return (
    <Box sx={{ display: "flex", py: "50px", px: "300px" }}>
      <Box sx={{ position: "fixed", left: "30px", top: "50px" }}>
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
            <Typography variant="h7">그룹 목록</Typography>
            <TextField
              id="search"
              type="search"
              label="Search"
              value={friendInput}
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

          {groupData && (
            <StudyGroupTable
              data={groupData}
              accentColumnNum={-1}
              longWidthColumnNum={-1}
              type="studyGroup"
            />
          )}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <LongButton
              name="목록 받기"
              // onClick={excelDownload}
              bgColor="primary.main"
              fontColor="white"
            />
          </Box>
        </>
      </Box>
    </Box>
  );
}

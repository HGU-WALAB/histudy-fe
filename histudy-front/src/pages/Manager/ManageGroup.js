import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { border, Box } from "@mui/system";
import { useState } from "react";
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

export default function ManageGroup() {
  const groupData = [
    {
      group: 1,
      members: [
        {
          id: 1,
          name: "오인혁",
          number: "21800339",
          friends: [
            {
              id: 5,
              name: "김진수",
              number: "21800394",
            },
          ],
          subjects: [
            {
              id: 1,
              name: "Software Engineering",
            },
            {
              id: 2,
              name: "Open-source Software Laboratories",
            },
          ],
        },
        {
          id: 2,
          name: "배주영",
          number: "21800111",
          friends: [],
          subjects: [
            {
              id: 1,
              name: "Software Engineering",
            },
            {
              id: 2,
              name: "Open-source Software Laboratories",
            },
          ],
        },
        {
          id: 3,
          name: "한시온",
          number: "21800112",
          friends: [],
          subjects: [
            {
              id: 1,
              name: "Software Engineering",
            },
            {
              id: 2,
              name: "Open-source Software Laboratories",
            },
          ],
        },
        {
          id: 4,
          name: "이인혁",
          number: "21800239",
          friends: [],
          subjects: [
            {
              id: 1,
              name: "Software Engineering",
            },
            {
              id: 2,
              name: "Open-source Software Laboratories",
            },
          ],
        },
      ],

      reports: 3,
      times: 120,
    },
    {
      group: 2,
      members: [
        {
          id: 5,
          name: "장유진",
          number: "21800459",
          friends: [],
          subjects: [
            {
              id: 1,
              name: "Software Engineering",
            },
            {
              id: 2,
              name: "Open-source Software Laboratories",
            },
          ],
        },
        {
          id: 6,
          name: "최혜림",
          number: "21800333",
          friends: [],
          subjects: [
            {
              id: 1,
              name: "Software Engineering",
            },
            {
              id: 2,
              name: "Open-source Software Laboratories",
            },
          ],
        },
        {
          id: 7,
          name: "정석민",
          number: "21800123",
          friends: [],
          subjects: [
            {
              id: 1,
              name: "Software Engineering",
            },
            {
              id: 2,
              name: "Open-source Software Laboratories",
            },
          ],
        },
        {
          id: 8,
          name: "송다빈",
          number: "21800233",
          friends: [],
          subjects: [
            {
              id: 1,
              name: "Software Engineering",
            },
            {
              id: 2,
              name: "Open-source Software Laboratories",
            },
          ],
        },
      ],

      reports: 4,
      times: 120,
    },
  ];

  const unGroupData = [
    {
      id: 1,
      name: "송다빈",
      number: "21800444",
      friends: [
        {
          id: 3,
          name: "홍길동",
          number: "21600493",
        },
      ],
      subjects: [
        {
          id: 1,
          name: "Software Engineering",
        },
        {
          id: 2,
          name: "Open-source Software Laboratories",
        },
      ],
    },
    {
      id: 2,
      name: "장유진",
      number: "21800123",
      friends: [
        {
          id: 3,
          name: "김한동",
          number: "21800093",
        },
      ],
      subjects: [
        {
          id: 1,
          name: "Software Engineering",
        },
        {
          id: 2,
          name: "Open-source Software Laboratories",
        },
      ],
    },
  ];

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
            <Typography variant="h7">매칭된 그룹 목록</Typography>
          </Box>

          <GroupTables
            data={groupData}
            accentColumnNum={-1}
            longWidthColumnNum={-1}
            type="group"
          />
          <Box sx={{ marginTop: "70px" }}>
            <Typography variant="h7">그룹 미배정 학생 목록</Typography>
          </Box>
          <UnGroupTable
            data={unGroupData}
            accentColumnNum={-1}
            longWidthColumnNum={-1}
            type="group"
          />
        </>
      </Box>
    </Box>
  );
}

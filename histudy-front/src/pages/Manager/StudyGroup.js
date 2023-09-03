import {
  Button,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { border, Box } from "@mui/system";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CustomTable from "../../components/common/CustomTable";
import LongButton from "../../components/common/LongButton";
import GrayBorderBox from "../../components/common/GrayBorderBox";
import ProgressBar from "../../components/common/ProgressBar";
import SideBar from "../../components/Manager/SideBar";
import YearSelectButton from "../../components/Manager/YearSelectButton";
import SemesterSelectButton from "../../components/Manager/SemesterSelectButton";
import RegisterClassButton from "../../components/Manager/RegisterClassButton";
import ManagerTable from "../../components/Manager/ManagerTable";
import StudyGroupTable from "../../components/Manager/StudyGroupTable";
import { readAllGroups } from "../../apis/manager";
import { isLoadingState } from "../../store/atom";
import { useSetRecoilState } from "recoil";
import { StyledTitleFlexBox } from "./style/StyledTitleFlexBox";
import Title from "../../components/Manager/Table/Title";
import { StyledLayout } from "./style/StyledLatout";
import { useQuery } from "react-query";
import LoadingLayout from "../../components/Manager/Loading/LoadingLayout";

export default function StudyGroup() {
  const [groupData, setGroupData] = useState();
  const [searchResult, setSearchResult] = useState();
  const [searchValue, setSearchValue] = useState("");

  const { isLoading } = useQuery(["courses"], readAllGroups, {
    casheTime: 5 * 60 * 1000,
    onSuccess: (data) => {
      setSearchResult(data);
      setGroupData(data);
    },
  });

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

  const theme = useTheme();
  return (
    <StyledLayout>
      <LoadingLayout isLoading={isLoading}>
        <SideBar />

        <Box sx={{ width: "100%" }}>
          <StyledTitleFlexBox>
            <Title text={"그룹 활동 목록"} />
            <TextField
              id="search"
              type="search"
              value={searchValue}
              onChange={handleChange}
              sx={{
                width: "50%",
                borderRadius: "30px",
                mb: 4,
                "& .MuiInputBase-root": {
                  borderRadius: "30px",
                },
              }}
              InputProps={{
                style: {
                  backgroundColor: theme.palette.background.default,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="학생 이름, 그룹 검색"
            />
          </StyledTitleFlexBox>

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
              name="그룹 활동 목록 엑셀 다운"
              onClick={excelDownload}
              bgColor="primary.main"
              fontColor="white"
            />
          </Box>
        </Box>
      </LoadingLayout>
    </StyledLayout>
  );
}

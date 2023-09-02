import {
  Button,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
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
import { readAllGroups, readUngroup } from "../../apis/manager";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  groupAutoCompleteState,
  isLoadingState,
  unGroupState,
} from "../../store/atom";
import { motion } from "framer-motion";
import Title from "../../components/Manager/Table/Title";
import { StyledLayout } from "./style/StyledLatout";
import { StyledTitleFlexBox } from "./style/StyledTitleFlexBox";

const SizedBox = styled(Box)({
  height: "50px",
});

export default function ManageGroup() {
  const [groupData, setGroupData] = useState();
  const [ungroupData, setUngroupData] = useState();
  const setGroupAutoCompleteState = useSetRecoilState(groupAutoCompleteState);
  const groupAutoCompleteConverter = (allGroup) => {
    return [
      ...allGroup.map((group) => {
        return { label: `group ${group.tag}` };
      }),
    ];
  };

  const setIsLoading = useSetRecoilState(isLoadingState);
  useEffect(() => {
    setIsLoading(true);
    readAllGroups().then((data) => {
      setGroupData(data);
      setGroupAutoCompleteState(groupAutoCompleteConverter(data));
      readUngroup().then((data) => {
        console.log(data);
        setUngroupData(data);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <StyledLayout>
      <SideBar />

      <Box sx={{ width: "100%" }}>
        <StyledTitleFlexBox>
          <Title text="매칭된 그룹 목록" />
        </StyledTitleFlexBox>

        {groupData && (
          <GroupTables
            data={groupData}
            accentColumnNum={-1}
            longWidthColumnNum={-1}
            type="group"
          />
        )}

        <SizedBox />

        <StyledTitleFlexBox>
          <Title text={"그룹 미배정 학생 목록"} />
        </StyledTitleFlexBox>
        {ungroupData && (
          <UnGroupTable
            data={ungroupData}
            accentColumnNum={-1}
            longWidthColumnNum={-1}
            type="group"
          />
        )}
      </Box>
    </StyledLayout>
  );
}

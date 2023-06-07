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
import { autoCourses } from "../../apis/course";

export default function ManageClass() {
  const [classData, setClassData] = useState();
  useEffect(() => {
    autoCourses().then((info) => {
      setClassData(info.courses);
    });
  }, []);

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
            <Typography variant="h7">등록된 수업 목록</Typography>
            <RegisterClassButton sx={{ ml: "auto" }} />
          </Box>
          {classData && (
            <ManagerTable
              data={classData}
              accentColumnNum={-1}
              longWidthColumnNum={-1}
              type="class"
            />
          )}
        </>
      </Box>
    </Box>
  );
}

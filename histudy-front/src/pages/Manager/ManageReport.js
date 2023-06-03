import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
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
import ReportTable from "../../components/Manager/ReportTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import { readGroupReport } from "../../apis/manager";

export default function ManageReport() {
  const { state } = useLocation();

  // const [reportData, setReportData] = useState();
  // useEffect(() => {
  //   if (state) {
  //     readGroupReport(state).then((data) => {
  //       setReportData(data);
  //     });
  //   }
  // }, []);
  const reportData = {
    group: 1,
    members: [
      { id: 1, name: "한시온" },
      { id: 2, name: "오인혁" },
      { id: 3, name: "장유진" },
      { id: 4, name: "강이경" },
    ],
    totalTime: 600,
    reports: [
      {
        id: 1,
        title: "알고리듬 분석 스터디1",
        writer: "한시온",
        regDate: "2023.04.15",
        time: 120,
      },
      {
        id: 2,
        title: "보고서 1",
        writer: "한시온",
        regDate: "2023.04.15",
        time: 120,
      },
      {
        id: 3,
        title: "보고서 2",
        writer: "한시온",
        regDate: "2023.04.15",
        time: 120,
      },
      {
        id: 4,
        title: "보고서 3",
        writer: "한시온",
        regDate: "2023.04.15",
        time: 120,
      },
      {
        id: 5,
        title: "보고서 4",
        writer: "한시온",
        regDate: "2023.04.15",
        time: 120,
      },
    ],
  };

  const [friendInput, setFriendInput] = useState("");
  const handleChange = (event) => {
    setFriendInput(event.target.value);
  };
  const navigate = useNavigate();

  const moveToBefore = () => {
    navigate("/studyGroup");
  };

  return (
    <Box sx={{ display: "flex", py: "50px", px: "300px" }}>
      <Box sx={{ position: "fixed", left: "30px", top: "50px" }}>
        <SideBar />
      </Box>
      <Box sx={{ width: "100%", ml: "50px" }}>
        <>
          <Box sx={{ display: "flex", mb: "3rem" }}>
            <IconButton onClick={() => moveToBefore()}>
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "1rem",
            }}
          ></Box>
          {reportData && (
            <ReportTable
              data={reportData}
              accentColumnNum={-1}
              longWidthColumnNum={-1}
              type="report"
            />
          )}
        </>
      </Box>
    </Box>
  );
}

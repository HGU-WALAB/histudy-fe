import {
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { border, Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
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
import { Image } from "@mui/icons-material";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { readReportDetail } from "../../apis/manager";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteReport, modifyReport } from "../../apis/report";
import Snackbars from "./Snackbars";
import { useRecoilState } from "recoil";
import { isDelete, reportDeleteState } from "../../store/atom";

export default function ReportDetail() {
  const [reportData, setReportData] = useState();
  const [open, setOpen] = useRecoilState(isDelete);

  const { state } = useLocation();

  const useUserReportDeatilMatch = useMatch("/report/:id");

  useEffect(() => {
    if (useUserReportDeatilMatch) {
      setReportData(state);
    } else {
      readReportDetail(state).then((info) => {
        setReportData(info);
      });
    }
  }, []);

  console.log(state);

  // const reportData = {
  //   title: "알고리듬 분석 스터디1",
  //   participants: [
  //     {
  //       id: 1,
  //       name: "한시온",
  //       number: "21800333",
  //     },
  //     {
  //       id: 2,
  //       name: "오인혁",
  //       number: "21800123",
  //     },
  //   ],
  //   totalMinutes: 90,
  //   content: "contents will be placed here",
  //   images: [
  //     {
  //       id: 1,
  //       url: "/img/puppy.jpeg",
  //     },
  //     {
  //       id: 2,
  //       url: "/img/puppy2.jpeg",
  //     },
  //   ],
  // };
  const navigate = useNavigate();

  const moveToBefore = () => {
    navigate(-1);
  };

  const handleClick = async (event, buttonId) => {
    event.preventDefault();

    if (buttonId === "modify") {
      navigate(`/report/modify/${state.id}`, { state: state });
    } else if (buttonId === "delete") {
      setOpen(true);
      if (useUserReportDeatilMatch) {
        await deleteReport(state.id);
      } else {
        await deleteReport(state);
      }
      navigate(-1);
    }
  };

  return (
    <>
      {reportData && (
        <Box sx={{ display: "flex", py: "50px", px: "300px" }}>
          <Box sx={{ position: "fixed", left: "30px", top: "50px" }}>
            {!useUserReportDeatilMatch && <SideBar />}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", marginLeft: "3rem", mb: "3rem" }}>
              <IconButton onClick={() => moveToBefore()}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                py: "5px",
                border: 1,
                backgroundColor: "primary.default",
                width: "100%",
                marginLeft: "40px",
                borderColor: "primary.main",
                borderRadius: "40px",
                marginBottom: "20px",

                padding: "40px 40px",
              }}
            >
              <>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "40px",
                      mb: "1rem",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ width: "100px", color: "text.secondary" }}>
                      제목
                    </Box>
                    <Typography sx={{ flex: "10 1 auto", marginLeft: "10px" }}>
                      {reportData.title}
                    </Typography>
                    {useUserReportDeatilMatch && (
                      <IconButton>
                        <DriveFileRenameOutlineIcon
                          onClick={() => handleClick("modify")}
                          color="primary"
                        />
                      </IconButton>
                    )}

                    <IconButton>
                      <DeleteIcon
                        onClick={(e) => {
                          handleClick(e, "delete");
                        }}
                        color="error"
                      />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "40px",
                      mb: "1rem",
                    }}
                  >
                    <Box sx={{ width: "100px", color: "text.secondary" }}>
                      참여 멤버
                    </Box>
                    <Typography sx={{ flex: "10 1 auto", marginLeft: "10px" }}>
                      {reportData?.participants?.map((member, index) => (
                        <Fragment key={index}>
                          {index > 0 && ", "}
                          {member.name}
                        </Fragment>
                      ))}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "40px",
                      mb: "1rem",
                    }}
                  >
                    <Box sx={{ width: "100px", color: "text.secondary" }}>
                      스터디 시간
                    </Box>
                    <Typography sx={{ flex: "10 1 auto", marginLeft: "10px" }}>
                      {reportData.totalMinutes}분
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "40px",
                      mb: "1rem",
                    }}
                  >
                    <Box sx={{ width: "100px", color: "text.secondary" }}>
                      보고서 내용
                    </Box>
                    <Typography sx={{ flex: "10 1 auto", marginLeft: "10px" }}>
                      {reportData.content}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      mb: "1rem",
                    }}
                  >
                    <ImageList>
                      {reportData.images?.map((item) => (
                        <ImageListItem key={item.id}>
                          <img src={item.url} alt="보고서 사진" />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                </Box>
              </>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

import { Box, Typography } from "@mui/material";
import CustomTable from "../../components/CustomTable";
import LongButton from "../../components/LongButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMyTeamReport, getmyTeamReport } from "../../apis/report";
import NoDataLottie from "../../components/NoDataLottie";
import { motion } from "framer-motion";
import LoadingLottie from "../../components/LoadingLottie";

export default function Report() {
  // const [data, setData] = useState([]);

  const [reports, setReports] = useState([]);
  const [convertedReports, setConvertedReports] = useState([]);

  const dateConverter = (regDate) => {
    const date = new Date(regDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  useEffect(() => {
    getMyTeamReport().then((res) => {
      setReports(res.reports);

      setConvertedReports(
        res.reports.map((report) => [
          report.title,
          report.totalMinutes,
          dateConverter(report.regDate),
          // new Date(report.regDate).toLocaleDateString("en-US"),
        ])
      );
    });
  }, []);

  return (
    <>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        sx={{
          minHeight: "100vh",
          display: " flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "900px",

            alignItems: "end",
            my: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "300" }}>
            제출한 보고서 목록
          </Typography>
        </Box>

        <Box
          sx={{
            width: "900px",
            display: "flex",
            justifyContent: "end",

            mb: "50px",
          }}
        >
          <Link to="/add">
            <LongButton
              name="보고서 작성"
              bgColor="primary.main"
              fontColor="white"
            />
          </Link>
        </Box>
        <Box sx={{ width: "900px" }}>
          <CustomTable
            data={convertedReports}
            reportData={reports}
            accentColumnNum={1}
            longWidthColumnNum={-1}
            type="report"
          />
          {reports.length === 0 && (
            // <Typography variant="h6" sx={{ textAlign: "center", mt: "50px" }}>
            //   ⚠️ 제출한 보고서가 없습니다.
            // </Typography>
            <Box sx={{ mt: 5 }}>
              <NoDataLottie />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

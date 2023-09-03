import { Box, Typography, styled } from "@mui/material";
import CustomTable from "../../components/common/CustomTable";
import LongButton from "../../components/common/LongButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMyTeamReport, getmyTeamReport } from "../../apis/report";
import NoDataLottie from "../../components/common/NoDataLottie";
import { motion } from "framer-motion";
import LoadingLottie from "../../components/common/LoadingLottie";
import { StyledColumnAlignLayout } from "../../components/common/StyledLayout";
import Title from "../../components/common/Title";

const StyledScrollTableSize = styled(Box)({
  width: "90%",
  maxWidth: "900px",
  overflow: "scroll",
});

const StyleButtonBox = styled(Box)({
  width: "90%",
  maxWidth: "900px",
  display: "flex",
  justifyContent: "end",
  marginBottom: "2rem",
});

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
      <StyledColumnAlignLayout
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Title text="제출한 보고서 목록" />
        <StyleButtonBox>
          <Link to="/add">
            <LongButton
              name="보고서 작성"
              bgColor="primary.main"
              fontColor="white"
            />
          </Link>
        </StyleButtonBox>
        <StyledScrollTableSize>
          <CustomTable
            data={convertedReports}
            reportData={reports}
            accentColumnNum={1}
            longWidthColumnNum={-1}
            type="report"
          />
          {reports.length === 0 && (
            <Box sx={{ mt: 5 }}>
              <NoDataLottie />
            </Box>
          )}
        </StyledScrollTableSize>
      </StyledColumnAlignLayout>
    </>
  );
}

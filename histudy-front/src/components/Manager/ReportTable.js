import { Cancel } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function ReportTable({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  const TableHead = {
    report: ["No.", "제목", "작성일", "스터디 시간"],
  };

  const navigate = useNavigate();
  const clickReport = (index) => {
    console.log(index);

    navigate("/reportDetail", { state: { reportId: index } });
  };
  const handleDeleteRow = (index) => {};
  return (
    <>
      <Box
        sx={{
          py: "5px",
          border: 1,

          backgroundColor: "primary.default",
          height: "60px",
          borderColor: "primary.main",
          borderRadius: "45px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 20px",
        }}
      >
        <span>Group {data.group}</span>
        {"   "}
        <span>
          {data.members.map((member, index) => (
            <Fragment key={index}>
              {index > 0 && ", "}
              {member.name}
            </Fragment>
          ))}
        </span>
        <span>총 스터디 시간 {data.totalTime}분</span>
      </Box>

      <Box
        sx={{
          py: "5px",
          border: 1,
          backgroundColor: "primary.default",

          borderColor: "primary.main",
          borderRadius: "45px",
        }}
      >
        <Box
          sx={{
            color: "text.secondary",
            display: "flex",
            py: "20px",
            borderBottom: 1,
            borderColor: "primary.main",
            px: "60px",
          }}
        >
          {TableHead[type].map((headElement, index) => (
            <Typography
              key={index}
              sx={{
                flexGrow: 1,
                width: longWidthColumnNum === index + 1 && "50%",
                minWidth: longWidthColumnNum !== index + 1 && "150px",
              }}
            >
              {headElement}
            </Typography>
          ))}
        </Box>
        {data.reports.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",

              borderTop: index !== 0 && 1,
              py: "20px",
              borderColor: "primary.border",
            }}
            onClick={() => {
              clickReport(index);
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  width: "50px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                  paddingLeft: "4rem",
                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.id}
              </Box>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  width: "50px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",

                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.title}
              </Box>
              {/* <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  width: "50px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",

                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.writer}
              </Box> */}
              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  width: "50px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",

                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.regDate}
              </Box>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  width: "50px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",

                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.time}분
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
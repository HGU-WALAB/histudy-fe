import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

//type에 따라 버튼 다르게 생기게
export default function CustomTable({
  reportData,
  sidebarValues = [],
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
  addData,
}) {
  const TableHead = {
    rank: [
      "순위",
      "그룹",
      "보고서 수",
      "누적 스터디 시간",
      "하루 평균 스터디 시간",
    ],
    first: ["이름", "학번", "이메일", ""],
    second: ["과목명", "과목코드", "담당 교수"],
    third: ["우선순위", "과목명", "과목코드", "담당 교수"],
    report: ["No.", "제목", "스터디 시간(분)", "작성일"],
    group: ["이름", "학번", "이메일"],
  };

  const idxConverter = (idx) => {
    if (type === "third" || type === "report") {
      return idx + 1;
    }
    return idx;
  };

  const COLUMN_NUM = TableHead[type].length;
  const ROW_NUM = data.length;

  const pkList = [
    ...sidebarValues.map((row, index) => {
      return row[1];
    }),
  ];

  const checkInclude = (pk) => {
    return pkList.includes(pk);
  };

  return (
    <Box
      sx={{
        // width: "100wh",
        py: "5px",
        backgroundColor: "primary.lighter",
        borderColor: "primary.border",
        borderRadius: "45px",
        maxHeight: "400px",
        minWidth: "800px",

        overflowX: ["auto", "hidden"],
      }}
    >
      <Box
        sx={{
          color: "text.secondary",
          display: "flex",
          py: "20px",
          borderBottom: data.length !== 0 && 1,
          borderColor: "primary.border",
          px: "60px",
          justifyContent: "start",
        }}
      >
        {TableHead[type].map((headElement, index) => (
          <Box
            key={index}
            sx={{
              // width: longWidthColumnNum === index + 1 && "50%",
              minWidth: "180px",
            }}
          >
            {headElement}
          </Box>
        ))}
        {/* <Typography
            sx={{
              minWidth: "180px",
            }}
          ></Typography> */}
      </Box>
      {data.map((row, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            alignItems: "center",
            mx: "60px",
            display: "flex",
            borderTop: index !== 0 && 1,
            py: "20px",
            borderColor: "primary.border",
          }}
        >
          {(type === "third" || type === "report") && (
            <Typography
              sx={{
                minWidth: "180px",
                // minWidth: longWidthColumnNum !== index + 1 && "180px",
                // color: accentColumnNum === index + 1 && "primary.main",
                // fontWeight: accentColumnNum === index + 1 && "bold",
              }}
            >
              {index + 1}
            </Typography>
          )}
          {row.map(
            (elem, idx) =>
              idx < 3 && (
                <Typography
                  key={idx}
                  sx={{
                    // width:
                    //   longWidthColumnNum === idxConverter(idx + 1) && "50%",
                    // minWidth:
                    //   longWidthColumnNum !== idxConverter(idx + 1) && "180px",
                    minWidth: "180px",
                    color:
                      accentColumnNum === idxConverter(idx + 1) &&
                      "primary.main",
                    fontWeight:
                      accentColumnNum === idxConverter(idx + 1) && "bold",
                  }}
                >
                  {elem}
                </Typography>
              )
          )}
          {/* 상세보기 */}
          {type === "report" && (
            <Link
              to={`/report/${reportData[index].id}`}
              state={reportData[index]}
            >
              <Button
                variant="outlined"
                sx={{ py: "3px", whiteSpace: "nowrap" }}
              >
                상세보기
              </Button>
            </Link>
          )}
          <Box sx={{ position: "absolute", right: 0 }}>
            {type === "first" || type === "second" ? (
              checkInclude(row[1]) ? (
                <Button
                  key={index}
                  onClick={() => {
                    addData((prev) => [
                      ...prev.filter((elem) => elem[1] !== row[1]),
                    ]);
                  }}
                  sx={{
                    borderRadius: "15px",
                    color: "white",
                    backgroundColor: "error.main",
                    paddingY: "3px",
                  }}
                >
                  제거
                </Button>
              ) : (
                <Button
                  key={index}
                  onClick={() => {
                    if (type === "second" && sidebarValues.length >= 3)
                      alert("최대 3개까지만 선택 가능합니다.");
                    else if (type === "first" && sidebarValues.length >= 4)
                      alert("최대 4개까지만 선택 가능합니다.");
                    else addData((prev) => [...prev, row]);
                  }}
                  sx={{
                    borderRadius: "15px",
                    color: "white",
                    backgroundColor: "primary.main",

                    // right: "0px"
                    // left: type === "first" ? "80px" : "-60px",

                    paddingY: "3px",
                  }}
                >
                  추가
                </Button>
              )
            ) : (
              type === "third" && (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <KeyboardArrowUpIcon
                    onClick={() => {
                      if (0 >= index) return;
                      const temp = data[index];

                      addData((prev) => [
                        ...prev.slice(0, index - 1),
                        temp,
                        prev[index - 1],
                        ...prev.slice(index + 1),
                      ]);
                    }}
                  />
                  <KeyboardArrowDownIcon
                    onClick={() => {
                      if (data.length - 1 <= index) return;
                      const temp = data[index];

                      addData((prev) => [
                        ...prev.slice(0, index),
                        prev[index + 1],
                        temp,
                        ...prev.slice(index + 2),
                      ]);
                    }}
                  />
                </Box>
              )
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

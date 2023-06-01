import { Box, Button, Typography } from "@mui/material";
import LongButton from "./LongButton";
import RoundButton from "./RoundButton";

const GroupRanking = [
  {
    rank: 1,
    group: "Group 1",
    reporter: "7장",
    studyTime: "1027시간",
    studyTimePerADay: "6시간",
  },
  {
    rank: 2,
    group: "Group 1",
    reporter: "7장",
    studyTime: "1027시간",
    studyTimePerADay: "6시간",
  },
  {
    rank: 3,
    group: "Group 1",
    reporter: "7장",
    studyTime: "1027시간",
    studyTimePerADay: "6시간",
  },
  {
    rank: 4,
    group: "Group 1",
    reporter: "7장",
    studyTime: "1027시간",
    studyTimePerADay: "6시간",
  },
  {
    rank: 5,
    group: "Group 1",
    reporter: "7장",
    studyTime: "1027시간",
    studyTimePerADay: "6시간",
  },
];

//type에 따라 버튼 다르게 생기게

export default function CustomTable({
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
    first: ["이름", "학번", "이메일"],
    second: ["과목명", "과목코드", "담당 교수"],
    third: ["우선순위", "과목명", "과목코드", "담당 교수"],
    report: ["No.", "제목", "글쓴이", "날짜"],
  };

  const COLUMN_NUM = TableHead[type].length;
  const ROW_NUM = data.length;
  console.log("data", data);
  const pkList = [
    ...sidebarValues.map((row, index) => {
      return row[1];
    }),
  ];

  const checkInclude = (pk) => {
    return pkList.includes(pk);
  };

  return (
    <>
      <Box
        sx={{
          py: "5px",
          // border: 1,
          backgroundColor: "primary.lighter",
          //   border: 2,

          borderColor: "primary.border",
          borderRadius: "45px",
        }}
      >
        <Box
          sx={{
            color: "text.secondary",
            display: "flex",
            py: "20px",
            borderBottom: 1,
            borderColor: "primary.border",

            px: "60px",
          }}
        >
          {TableHead[type].map((headElement, index) => (
            <Typography
              key={index}
              sx={{
                width: longWidthColumnNum === index + 1 && "50%",
                minWidth: longWidthColumnNum !== index + 1 && "150px",
              }}
            >
              {headElement}
            </Typography>
          ))}
        </Box>
        {data.map((row, index) => (
          <Box
            key={index}
            sx={{
              alignItems: "center",
              mx: "60px",
              display: "flex",
              borderTop: index !== 0 && 1,
              py: "20px",
              borderColor: "primary.border",
            }}
          >
            {row.map((elem, idx) => (
              <Typography
                key={idx}
                sx={{
                  width: longWidthColumnNum === index + 1 && "50%",
                  minWidth: longWidthColumnNum !== index + 1 && "150px",
                  color: accentColumnNum === index + 1 && "primary.main",
                  fontWeight: accentColumnNum === index + 1 && "bold",
                }}
              >
                {elem}
              </Typography>
            ))}
            <Box sx={{ position: "relative" }}>
              {checkInclude(row[1]) ? (
                <Button
                  key={index}
                  onClick={() => {
                    addData((prev) => [
                      ...prev.slice(0, index),
                      ...prev.slice(index + 1),
                    ]);
                  }}
                  sx={{
                    borderRadius: "15px",
                    color: "white",
                    backgroundColor: "error.main",
                    position: "absolute",
                    // right: "0px"
                    left: type === "first" ? "80px" : "-60px",
                    bottom: "-15px",
                    paddingY: "3px",
                  }}
                >
                  제거
                </Button>
              ) : (
                <Button
                  key={index}
                  onClick={() => {
                    addData((prev) => [...prev, row]);
                  }}
                  sx={{
                    borderRadius: "15px",
                    color: "white",
                    backgroundColor: "primary.main",
                    position: "absolute",
                    // right: "0px"
                    left: type === "first" ? "80px" : "-60px",
                    bottom: "-15px",
                    paddingY: "3px",
                  }}
                >
                  추가
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

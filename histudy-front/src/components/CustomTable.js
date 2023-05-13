import { Box, Typography } from "@mui/material";

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
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
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
  };

  const COLUMN_NUM = TableHead[type].length;
  const ROW_NUM = data.length;

  return (
    <>
      <Box
        sx={{
          p: "50px",
          borderRadius: "30px",
          backgroundColor: "primary.lighter",
          //   border: 2,
          borderColor: "primary.border",
        }}
      >
        <Box sx={{ display: "flex", pb: "10px" }}>
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

          {/* <Box
          sx={{
            width: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        > */}

          {/* <Typography sx={{ width: "60px" }}>{TableHead[type][1]}</Typography>
        </Box>
        <Box
          sx={{
            width: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ width: "100px" }}>{TableHead[type][2]}</Typography>
          <Typography sx={{ width: "200px" }}>{TableHead[type][3]}</Typography>
          <Typography sx={{ width: "200px" }}>하루 평균 스터디 시간</Typography>
        </Box> */}
        </Box>
        {data.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              // justifyContent: "space-between",
              //   mt: "20px",
              borderTop: 1,
              py: "20px",
              borderColor: "primary.border",
            }}
          >
            {row.map((elem, index) => (
              <Typography
                key={index}
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
          </Box>
        ))}
      </Box>
    </>
  );
}

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomTable from "../../components/CustomTable";

const data = [
  [1, "Group 1", "7장", "1027시간", "6시간"],
  [2, "Group 1", "7장", "1027시간", "6시간"],
  [3, "Group 1", "7장", "1027시간", "6시간"],
  [4, "Group 1", "7장", "1027시간", "6시간"],
  [5, "Group 1", "7장", "1027시간", "6시간"],
  [6, "Group 1", "7장", "1027시간", "6시간"],
];

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

const Images = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export default function Rank() {
  return (
    <Box
      sx={{
        px: "150px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pt: "50px" }}>
        <Typography variant="h4">스터디 랭킹</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", py: "30px" }}>
        <Typography sx={{ fontWeight: "bold" }}>스터디 시작 D+35</Typography>
      </Box>
      {/* <Box
        sx={{
          p: "50px",
          borderRadius: "30px",
          backgroundColor: "primary.lighter",
          border: 2,
          borderColor: "primary.border",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", pb: "10px" }}
        >
          <Box
            sx={{
              width: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ width: "40px" }}>순위</Typography>
            <Typography sx={{ width: "60px" }}>그룹</Typography>
          </Box>
          <Box
            sx={{
              width: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ width: "100px" }}>보고서 수</Typography>
            <Typography sx={{ width: "200px" }}>누적 스터디 시간</Typography>
            <Typography sx={{ width: "200px" }}>
              하루 평균 스터디 시간
            </Typography>
          </Box>
        </Box>
        {GroupRanking.map((group, index) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              //   mt: "20px",
              borderTop: 1,
              py: "20px",
              borderColor: "primary.border",
            }}
          >
            <Box
              sx={{
                width: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  width: "40px",
                  color: "primary.dark",
                  fontWeight: "bold",
                }}
              >
                {group.rank}
              </Typography>
              <Typography sx={{ width: "60px" }}>{group.group}</Typography>
            </Box>
            <Box
              sx={{
                width: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ width: "100px" }}>{group.reporter}</Typography>
              <Typography sx={{ width: "200px" }}>{group.studyTime}</Typography>
              <Typography sx={{ width: "200px" }}>
                {group.studyTimePerADay}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box> */}
      <CustomTable
        data={data}
        accentColumnNum={1}
        longWidthColumnNum={2}
        type="rank"
      />

      <Grid container spacing={2} sx={{ mt: "50px" }}>
        {Images.map((image, index) => (
          <Grid key={index} item xs={2}>
            <Box
              sx={{
                backgroundColor: "#EFF0F1",
                height: "200px",
                borderRadius: "15px",
              }}
            >
              {image}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

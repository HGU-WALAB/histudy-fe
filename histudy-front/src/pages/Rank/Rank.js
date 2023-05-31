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

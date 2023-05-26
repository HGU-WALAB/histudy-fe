import { Box, Typography } from "@mui/material";

export default function GrayBorderBox({ friends, studies, children }) {
  return (
    <Box
      sx={{
        p: "30px",
        border: 2,
        borderRadius: "20px",
        width: "280px",
        mt: "30px",
        mb: "15px",
        backgroundColor: "background.sidebar",
        borderColor: "lightGray",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ mb: "30px", textAlign: "center" }}>
        신청 내역
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        함께하고 싶은 친구
      </Typography>
      {friends.length !== 0 &&
        friends.map((friend, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{ color: "primary.main", mb: 1 }}
          >
            {friend.name}, {friend.id}
          </Typography>
        ))}
      <Typography variant="body1" sx={{ mb: 1, mt: 3 }}>
        스터디 희망 과목
      </Typography>
      {studies.length !== 0 &&
        studies.map((study, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{ color: "primary.main", mb: 1 }}
          >
            {study.name} , {study.professor}
          </Typography>
        ))}{" "}
      {children}
    </Box>
  );
}

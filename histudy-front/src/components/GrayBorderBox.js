import { Box, Typography } from "@mui/material";

export default function GrayBorderBox({ friends, courses, children }) {
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
            {friend[0]}, {friend[1]}
          </Typography>
        ))}
      <Typography variant="body1" sx={{ mb: 1, mt: 3 }}>
        스터디 희망 과목
      </Typography>
      {courses.length !== 0 &&
        courses.map((course, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{ color: "primary.main", mb: 1 }}
          >
            {course[0]} , {course[1]}
          </Typography>
        ))}{" "}
      {children}
    </Box>
  );
}

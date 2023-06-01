import { Cancel } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export default function CreateGroupTable({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  const TableHead = {
    all: ["이름", "학번", "희망과목", "함께하고 싶은 친구"],
  };

  const handleDeleteRow = (index) => {};
  return (
    <>
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
        {data.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              borderTop: index !== 0 && 1,
              py: "20px",
              borderColor: "primary.border",
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
                  py: "20px",
                  borderColor: "primary.border",
                  marginLeft: "30px",
                }}
              >
                {row.name}
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
                {row.number}
              </Box>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 2,
                  width: "50px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",

                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.subjects.map((subject, index) => (
                  <Typography>
                    {index > 0 && ", "}
                    {subject.name}
                  </Typography>
                ))}
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  width: "50px",
                  marginLeft: "30px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",

                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.friends.map((friend, index) => (
                  <>
                    {index > 0 && ", "}
                    <Typography>{friend.name},</Typography>
                    <Typography>{friend.number}</Typography>
                  </>
                ))}
              </Box>
            </Box>
            <IconButton
              onClick={() => handleDeleteRow(index)}
              sx={{
                marginRight: "1rem",
              }}
            >
              <Cancel />
            </IconButton>
          </Box>
        ))}
      </Box>
    </>
  );
}

import { Cancel } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export default function ManagerTable({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  const TableHead = {
    class: ["과목명", "과목코드", "담당 교수"],
    group: ["그룹", "멤버", "희망과목", "함께하고 싶은 친구"],
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
                color: "text.secondary",
              }}
            >
              {row.map((elem, index) => (
                <Typography
                  key={index}
                  sx={{
                    marginLeft: "1.5rem",
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

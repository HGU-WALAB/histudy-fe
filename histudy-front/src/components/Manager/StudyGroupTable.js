import { Cancel, Edit } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudyGroupTable({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  const TableHead = {
    class: ["과목명", "과목코드", "담당 교수"],
    group: ["그룹", "멤버", "희망과목", "함께하고 싶은 친구"],
    studyGroup: ["그룹", "멤버", "보고서 수", "그룹 누적 스터디 시간"],
  };

  const [edit, setEdit] = useState([false]);
  const handleEdit = (index) => {
    const newEdit = [...edit];

    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  const handleDeleteRow = (index) => {};
  const navigate = useNavigate();

  const handleClick = () => {
    console.info("You clicked the Chip.");
    navigate("/manageReport");
  };

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
                  marginLeft: "5rem",
                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.group}
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 3,

                  width: "50px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.members.map((member, index) => (
                  <Typography>
                    {index > 0 && ","}
                    {member.name}
                  </Typography>
                ))}
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
                {row.reports}
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
                {row.times}
              </Box>
            </Box>

            <Box
              sx={{
                color: "text.secondary",
                display: "flex",
                marginRight: "3rem",
                borderColor: "primary.border",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Chip
                  label="보고서 열람"
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                  }}
                  onClick={handleClick}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

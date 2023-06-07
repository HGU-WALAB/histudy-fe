import { Cancel } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { deleteUserForm } from "../../apis/manager";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export default function CreateGroupTable({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  const TableHead = {
    all: ["이름", "학번", "희망과목", "함께하고 싶은 친구"],
  };

  const handleDeleteRow = (sid) => {
    deleteUserForm(sid);
    window.location.reload();
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          maxHeight: "60vh",
          overflow: "scroll",
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
              // py: "20px",
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
                  marginLeft: "55px",
                }}
              >
                {row.name}
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  // width: "50px",
                  marginLeft: "70px",
                  textOverflow: "ellipsis",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                {row.sid}
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  marginLeft: "20px",
                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                <Select
                  sx={{ width: "170px", color: "text.secondary" }}
                  value={row.courses.length > 0 ? row.courses[0].name : ""}
                >
                  {row.courses.map((subject, index) => (
                    <MenuItem key={index} value={subject.name}>
                      <Typography>{subject.name}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  flexGrow: 1,
                  py: "20px",
                  borderColor: "primary.border",
                }}
              >
                <Select
                  sx={{ width: "170px", color: "text.secondary" }}
                  value={row.friends.length > 0 ? row.friends[0].name : ""}
                >
                  {row.friends.map((friend, index) => (
                    <MenuItem key={index} value={friend.name}>
                      <Typography>
                        {friend.name}, {friend.sid}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
            <IconButton
              onClick={() => handleDeleteRow(row.sid)}
              sx={{
                marginRight: "1rem",
              }}
            >
              <Cancel />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

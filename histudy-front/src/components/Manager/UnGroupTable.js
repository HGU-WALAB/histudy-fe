import { Cancel, Edit } from "@mui/icons-material";
import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import GroupSelector from "./GroupSelector";

export default function UnGroupTable({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  const TableHead = {
    group: ["그룹", "이름", "희망과목", "함께하고 싶은 친구"],
  };

  const [edit, setEdit] = useState([false]);

  const handleSave = (index) => {
    alert("저장되었습니다!");
  };
  const handleDeleteRow = (index) => {};

  const handleEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
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
          <>
            {!edit[index] ? (
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
                      marginLeft: "50px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      // py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    미배정
                  </Box>

                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 1,
                      width: "70px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    {row.name},{row.sid}
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

                <Box sx={{ marginRight: "20px", py: "25px" }}>
                  <IconButton onClick={() => handleEdit(index)}>
                    <Edit />
                  </IconButton>

                  {/* <IconButton onClick={() => handleDeleteRow(index)}>
                    <Cancel />
                  </IconButton> */}
                </Box>
              </Box>
            ) : (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  borderTop: index !== 0 && 1,
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
                      width: "80px",
                      marginLeft: "20px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      borderColor: "primary.border",
                    }}
                  >
                    <GroupSelector></GroupSelector>
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
                      // py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    {row.name},
                    <TextField
                      sx={{
                        width: "50px",
                        "& input": {
                          height: "10px",
                        },
                      }}
                      value={row.sid}
                    ></TextField>
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
                      marginLeft: "-40px",
                      marginRight: "-40px",
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

                <Box sx={{ display: "flex", py: "30px", marginRight: "5px" }}>
                  <Chip
                    sx={{
                      color: "white",
                      backgroundColor: "primary.main",
                    }}
                    onClick={() => handleSave(index)}
                    label="저장"
                  />{" "}
                  <Chip
                    sx={{
                      marginLeft: "0.5rem",
                      color: "#FF0000",
                      backgroundColor: "#FFE4E4",
                    }}
                    onClick={() => handleEdit(index)}
                    label="취소"
                  />
                </Box>
              </Box>
            )}
          </>
        ))}
      </Box>
    </>
  );
}

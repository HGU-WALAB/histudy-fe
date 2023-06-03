import { Cancel, Edit } from "@mui/icons-material";
import { Box, Chip, IconButton, TextField, Typography } from "@mui/material";
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
                      marginLeft: "50px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      py: "20px",
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
                      width: "50px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    {row.name},{row.number}
                  </Box>

                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 1,
                      width: "150px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",

                      py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    {row.courses.map((sub, index) => (
                      <Typography>
                        {index > 0 && ", "}
                        {sub.name}
                      </Typography>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 1,
                      width: "150px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      marginLeft: "30px",
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
                  {/* </Typography> */}
                  {/* ))} */}
                </Box>

                <Box sx={{ marginRight: "50px" }}>
                  <IconButton onClick={() => handleEdit(index)}>
                    <Edit />
                  </IconButton>

                  <IconButton onClick={() => handleDeleteRow(index)}>
                    <Cancel />
                  </IconButton>
                </Box>
              </Box>
            ) : (
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
                      width: "80px",
                      marginLeft: "30px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      py: "20px",
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
                      py: "20px",
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
                      value={row.number}
                    ></TextField>
                  </Box>

                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 1,
                      width: "150px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",

                      py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    {row.courses.map((sub, index) => (
                      <Typography>
                        {index > 0 && ", "}
                        {sub.name}
                      </Typography>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 1,
                      width: "150px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      marginLeft: "30px",
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

                <Box sx={{ display: "flex", py: "10px", marginRight: "50px" }}>
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

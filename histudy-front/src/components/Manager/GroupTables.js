import { Cancel, DataArray, Edit } from "@mui/icons-material";
import {
  Box,
  Chip,
  IconButton,
  TextField,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
  tooltipClasses,
} from "@mui/material";
import { Fragment, useState } from "react";
import styled from "styled-components";
import GroupSelector from "./GroupSelector";
import StudentNumSelector from "./StudentNumSelector";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});

export default function GroupTables({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  const TableHead = {
    group: ["그룹", "멤버", "희망과목", "함께하고 싶은 친구"],
  };
  const [edit, setEdit] = useState([false]);
  const [studentEdit, setStudentEdit] = useState([false]);

  const handleSave = (index) => {
    alert("저장되었습니다!");
  };
  const handleDeleteRow = (index) => {};

  const handleEdit = (index, groupId) => {
    const newGroupEdit = [...edit];
    newGroupEdit[groupId] = !newGroupEdit[groupId];
    setEdit(newGroupEdit);

    console.log(index);
    const newEdit = [...studentEdit];

    newEdit[index] = !newEdit[index];
    setStudentEdit(newEdit);
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
          fontSize: 1,
        }}
      >
        <Box
          sx={{
            color: "text.secondary",
            display: "flex",
            py: "20px",
            borderColor: "primary.border",
            px: "30px",
          }}
        >
          {TableHead[type].map((headElement, index) => (
            <Typography
              key={index}
              sx={{
                flexGrow: 1,
                width: longWidthColumnNum === index + 1 && "30%",
                minWidth: longWidthColumnNum !== index + 1 && "150px",
              }}
            >
              {headElement}
            </Typography>
          ))}
        </Box>
        {data.map((row, index) => (
          <Box
            key="Group-wrapper"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: 1,
              borderColor: "primary.main",
              px: "30px",
            }}
          >
            <Box
              sx={{
                color: "text.secondary",
                display: "flex",
                flexDirection: "column",
                borderColor: "primary.border",
                flexGrow: 4,
              }}
            >
              {row.members.map((student, s_index) => (
                <>
                  {!studentEdit[student.id] ? (
                    <>
                      <Box
                        sx={{
                          color: "text.secondary",
                          display: "flex",
                          flexGrow: 4,
                        }}
                      >
                        <Box
                          key="Group"
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            width: "100px",
                            borderBottom: 1,
                            py: "20px",
                            borderColor: "primary.border",
                          }}
                        >
                          <Typography>Group{row.group}</Typography>
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            py: "20px",
                            // width: "10px",
                            borderColor: "primary.border",
                          }}
                        >
                          <Typography>{student.name},</Typography>
                          <Typography>{student.number}</Typography>
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 2,
                            width: "150px",
                            textOverflow: "ellipsis",
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            borderBottom: 1,
                            py: "20px",
                            borderColor: "primary.border",
                          }}
                        >
                          {student.subjects.map((sub) => (
                            <Typography>{sub.name},</Typography>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            width: "150px",
                            py: "20px",
                            px: "30px",
                            borderColor: "primary.border",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {student.friends.map((friend) => (
                            <>
                              <Typography>{friend.name},</Typography>
                              <Typography>{friend.number}</Typography>
                            </>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            borderColor: "primary.border",
                          }}
                        >
                          <IconButton
                            onClick={() => handleEdit(student.id, index)}
                          >
                            <Edit />
                          </IconButton>

                          <IconButton onClick={() => handleDeleteRow(index)}>
                            <Cancel />
                          </IconButton>
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{
                          color: "text.secondary",
                          display: "flex",
                          flexGrow: 4,
                        }}
                      >
                        <Box
                          key="Group"
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            py: "20px",
                            // width: "10px",
                            borderColor: "primary.border",
                          }}
                        >
                          <GroupSelector groupNum={row.group}></GroupSelector>
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            py: "20px",
                            // width: "10px",
                            borderColor: "primary.border",
                          }}
                        >
                          <Typography>{student.name},</Typography>
                          <TextField
                            sx={{
                              width: "50px",
                              "& input": {
                                height: "10px",
                              },
                            }}
                            value={student.number}
                          ></TextField>
                        </Box>

                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 2,
                            width: "150px",
                            textOverflow: "ellipsis",
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            borderBottom: 1,
                            py: "20px",
                            borderColor: "primary.border",
                          }}
                        >
                          {student.subjects.map((sub) => (
                            <Typography>{sub.name},</Typography>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            width: "150px",
                            py: "20px",
                            px: "30px",
                            borderColor: "primary.border",

                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {student.friends.map((friend) => (
                            <>
                              <Typography>{friend.name},</Typography>
                              <Typography>{friend.number}</Typography>
                            </>
                          ))}
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            borderColor: "primary.border",
                          }}
                        >
                          <Box sx={{ display: "flex", py: "10px" }}>
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
                              onClick={() => handleEdit(student.id, index)}
                              label="취소"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </>
                  )}
                </>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

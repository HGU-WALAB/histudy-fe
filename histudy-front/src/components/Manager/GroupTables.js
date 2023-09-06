import { Cancel, DataArray, Edit } from "@mui/icons-material";
import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  Select,
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
import { editUser } from "../../apis/manager";
import { useSetRecoilState } from "recoil";
import { isLoadingState } from "../../store/atom";

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

    const newEdit = [...studentEdit];

    newEdit[index] = !newEdit[index];
    setStudentEdit(newEdit);
  };

  const [team, setTeam] = useState(data.tag);
  const [sid, setSid] = useState();

  const setIsLoading = useSetRecoilState(isLoadingState);
  console.log(data);
  return (
    <Box>
      <Box
        sx={{
          maxHeight: "60vh",
          overflow: "scroll",
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
        {data.map((row, rowIndex) => (
          <Box
            key="Group-wrapper"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // borderTop: 1,
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
              {row.members.map((student, index) => (
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
                            marginTop: "20px",
                            py: "20px",
                            borderColor: "primary.border",
                          }}
                        >
                          <Typography>Group{row.tag}</Typography>
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            py: "20px",
                            marginTop: "20px",
                            // width: "10px",
                            borderColor: "primary.border",
                          }}
                        >
                          {index > 0 && ", "}
                          <Typography>{student.name},</Typography>
                          <Typography>{student.sid}</Typography>
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            py: "20px",
                            borderBottom: 1,
                            borderColor: "primary.border",
                          }}
                        >
                          <Select
                            sx={{ width: "170px", color: "text.secondary" }}
                            value={
                              student.courses.length > 0
                                ? student.courses[0].name
                                : ""
                            }
                          >
                            {student.courses.map((subject, index) => (
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
                            borderBottom: 1,
                            borderColor: "primary.border",
                          }}
                        >
                          <Select
                            sx={{ width: "170px", color: "text.secondary" }}
                            value={
                              student.friends.length > 0
                                ? student.friends[0].name
                                : ""
                            }
                          >
                            {student.friends.map((friend, index) => (
                              <MenuItem key={index} value={friend.name}>
                                <Typography>
                                  {friend.name}, {friend.number}
                                </Typography>
                              </MenuItem>
                            ))}
                          </Select>
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            // flexGrow: 1,
                            borderBottom: 1,
                            borderColor: "primary.border",
                          }}
                        >
                          <IconButton
                            onClick={() => {
                              handleEdit(student.id, index);

                              setTeam(row.group);
                            }}
                          >
                            <Edit />
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
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            borderColor: "primary.border",
                            marginTop: "20px",
                          }}
                        >
                          <GroupSelector team={team} setTeam={setTeam} />
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            borderBottom: 1,
                            // py: "20px",
                            // width: "10px",
                            borderColor: "primary.border",
                            marginTop: "20px",
                          }}
                        >
                          <Typography sx={{ marginTop: "20px" }}>
                            {student.name},
                          </Typography>
                          <TextField
                            sx={{
                              width: "50px",
                              "& input": {
                                height: "10px",
                              },
                              marginTop: "10px",
                            }}
                            defaultValue={student.sid}
                            onChange={(e) => {
                              setSid(e.target.value);
                            }}
                          ></TextField>
                        </Box>

                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            flexGrow: 1,
                            py: "20px",
                            borderBottom: 1,
                            borderColor: "primary.border",
                          }}
                        >
                          <Select
                            sx={{ color: "text.secondary" }}
                            value={
                              student.courses.length > 0
                                ? student.courses[0].name
                                : ""
                            }
                          >
                            {student.courses.map((subject, index) => (
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
                            borderBottom: 1,
                            borderColor: "primary.border",
                          }}
                        >
                          <Select
                            sx={{ width: "170px", color: "text.secondary" }}
                            value={
                              student.friends.length > 0
                                ? student.friends[0].name
                                : ""
                            }
                          >
                            {student.friends.map((friend, index) => (
                              <MenuItem key={index} value={friend.name}>
                                <Typography>
                                  {friend.name}, {friend.sid}
                                </Typography>
                              </MenuItem>
                            ))}
                          </Select>
                        </Box>
                        <Box
                          sx={{
                            color: "text.secondary",
                            display: "flex",
                            // flexGrow: 1,
                            borderBottom: 1,
                            borderColor: "primary.border",
                            // py: "20px",
                          }}
                        >
                          <Box sx={{ display: "flex", py: "30px" }}>
                            <Chip
                              sx={{
                                color: "white",
                                backgroundColor: "primary.main",
                              }}
                              onClick={() => {
                                const newData = {
                                  team: Number(team),
                                  sid: !sid ? student.sid : sid,
                                  name: student.name,
                                  id: student.id,
                                };
                                editUser(newData)
                                  .then(() => {
                                    alert("변경되었습니다!");
                                    // window.location.reload();
                                  })
                                  .catch((error) => {
                                    alert("변경에 실패했습니다.");
                                  });
                              }}
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
    </Box>
  );
}

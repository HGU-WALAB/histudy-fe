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
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useNavigate } from "react-router-dom";
import { editUser } from "../../apis/manager";
import { useForm } from "react-hook-form";

export default function StudentListTable({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  console.log("DD", data);
  const { register, getValues, setValue } = useForm({
    initialValues: {
      name: "",
      sid: "",
      team: "",
    },
  });

  const TableHead = {
    student: ["이름", "학번", "그룹", "희망과목"],
  };

  const [edit, setEdit] = useState([false]);

  const handleEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  const navigate = useNavigate();
  const handleDeleteRow = (index) => {};
  const handleClick = () => {
    navigate("/manageReport");
  };
  const handleSave = (id) => {
    const newData = {
      name: getValues("name"),
      sid: getValues("sid"),
      team: +getValues("team") === 0 ? null : getValues("team"),
      id: id,
    };

    editUser(newData)
      .then(() => {
        alert("변경되었습니다!");
        window.location.reload();
      })
      .catch((err) => {
        alert("변경에 실패했습니다.");
      });
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
          maxHeight: "60vh",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{
            color: "text.secondary",
            display: "flex",
            py: "20px",

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
                      marginLeft: "3rem",
                      // py: "20px",
                      borderColor: "primary.border",
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
                      marginLeft: "5rem",
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
                      width: "50px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      marginLeft: "4rem",
                      borderColor: "primary.border",
                    }}
                  >
                    Group{row.group}
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
                          <Typography>
                            {subject.name} ({subject.prof})
                          </Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    borderColor: "primary.border",
                  }}
                >
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 1,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "20px",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <IconButton
                          onClick={() => {
                            handleEdit(index);
                            setValue("name", row.name);
                            setValue("sid", row.sid);
                            setValue("team", row.group);
                          }}
                        >
                          <Edit />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
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
                      marginLeft: "3rem",
                      // py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    <TextField
                      sx={{
                        "& input": {
                          height: "10px",
                        },
                      }}
                      initialValues={row.name}
                      {...register("name")}
                    ></TextField>
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
                      marginLeft: "5rem",
                      // py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    <TextField
                      sx={{
                        "& input": {
                          height: "10px",
                        },
                      }}
                      initialValues={row.sid}
                      {...register("sid")}
                    ></TextField>
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
                      marginLeft: "4rem",
                      // py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    <TextField
                      sx={{
                        "& input": {
                          height: "10px",
                        },
                      }}
                      initialValues={row.group}
                      {...register("team")}
                    ></TextField>
                  </Box>
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 0.5,
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
                </Box>

                <Box
                  sx={{
                    color: "text.secondary",
                    display: "flex",

                    borderColor: "primary.border",
                  }}
                >
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 1,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          py: "20px",
                        }}
                      >
                        <Chip
                          sx={{
                            color: "white",
                            backgroundColor: "primary.main",
                          }}
                          onClick={() => handleSave(row.id)}
                          label="저장"
                        />{" "}
                        <Chip
                          sx={{
                            marginLeft: "0.5rem",
                            marginRight: "0.5rem",
                            color: "#FF0000",
                            backgroundColor: "#FFE4E4",
                          }}
                          onClick={() => handleEdit(index)}
                          label="취소"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </>
        ))}
      </Box>
    </>
  );
}

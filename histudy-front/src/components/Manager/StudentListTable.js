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

export default function StudentListTable({
  type,
  accentColumnNum,
  longWidthColumnNum,
  data,
}) {
  const TableHead = {
    student: ["이름", "학번", "그룹", "희망과목"],
  };

  const [edit, setEdit] = useState([false]);

  const handleEdit = (index) => {
    console.log(index);
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  const navigate = useNavigate();
  const handleDeleteRow = (index) => {};
  const handleClick = () => {
    console.info("You clicked the Chip.");
    navigate("/manageReport");
  };
  const handleSave = (index) => {
    alert("저장되었습니다!");
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
                      // py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    {row.number}
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
                      sx={{ color: "text.secondary" }}
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
                      <Box sx={{ display: "flex" }}>
                        <IconButton onClick={() => handleEdit(index)}>
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
                      value={row.name}
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
                      value={row.number}
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
                      value={row.group}
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
                      sx={{ color: "text.secondary" }}
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
                          onClick={() => handleSave(index)}
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

{
  /* <Box
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
                      marginLeft: "3rem",
                      py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    <TextField
                      sx={{
                        "& input": {
                          height: "10px",
                        },
                      }}
                      value={row.name}
                    ></TextField>
                  </Box>

                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      flexGrow: 1,
                      width: "100px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      marginLeft: "7rem",
                      py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    <TextField
                      sx={{
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
                      width: "50px",
                      textOverflow: "ellipsis",
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      marginLeft: "5rem",
                      py: "20px",
                      borderColor: "primary.border",
                    }}
                  >
                    <TextField
                      sx={{
                        "& input": {
                          height: "10px",
                        },
                      }}
                      value={row.group}
                    ></TextField>
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
                      marginLeft: "6rem",

                      py: "20px",
                      borderColor: "primary.border",
                      marginRight: "2rem",
                    }}
                  >
                    {row.courses.map((subject, index) => (
                      <Typography>
                        {index > 0 && ", "}
                        {subject.name},
                      </Typography>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "text.secondary",
                    display: "flex",
                    flexGrow: 1,
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
                      sx={{ display: "flex", py: "20px", marginRight: "20px" }}
                    >
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
              </Box> */
}

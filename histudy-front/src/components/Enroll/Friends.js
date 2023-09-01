import { Box, InputAdornment, TextField, useTheme } from "@mui/material";
import CustomTable from "../CustomTable";
import { useEffect, useState } from "react";
import { autoUser } from "../../apis/users";
import SearchIcon from "@mui/icons-material/Search";
import { TextFieldWrapper } from "./TextFieldWrapper";

export default function Friends({ sideFriends, setSideFriends }) {
  const [friends, setFriends] = useState([]);
  const friendConverter = (allFriends) => {
    const result = [];
    allFriends.map((elem) =>
      result.push([elem.name, elem.sid, elem.email, elem.id])
    );
    return result;
  };

  const [friendInput, setFriendInput] = useState("");
  const handleChange = (event) => {
    if (event.target.id === "friend") setFriendInput(event.target.value);
  };

  useEffect(() => {
    autoUser(friendInput).then((res) => {
      setFriends(friendConverter(res.users));
    });
  }, [friendInput]);

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: { lg: "70vw", md: "90vw", xs: "90vw" },
        overflow: "scroll",
      }}
    >
      <TextFieldWrapper
        id="friend"
        type="search"
        value={friendInput}
        onChange={handleChange}
        sx={{
          borderRadius: "30px",
          mb: 4,
          minWidth: "800px",
          width: "100%",
          overflow: "scroll",
        }}
        InputProps={{
          style: {
            backgroundColor: theme.palette.background.default,
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="친구 이름 검색"
      />
      <CustomTable
        sidebarValues={sideFriends}
        addData={setSideFriends}
        data={friends}
        accentColumnNum={-1}
        longWidthColumnNum={-1}
        type="first"
      />
    </Box>
  );
}

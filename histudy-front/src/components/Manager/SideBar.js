import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectState, testState } from "../../store/atom";

export default function SideBar() {
  // const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useRecoilState(selectState);

  const listItemButtonStyles = {
    "&:hover": {
      backgroundColor: "#F2F8FF",
      borderRadius: "13px",
    },
    "&.Mui-selected": {
      borderRadius: "13px",
    },
  };

  const handleClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <Box
      sx={{
        p: "30px",
        border: 2,
        borderRadius: "20px",
        width: "280px",
        mt: "30px",
        mb: "15px",
        backgroundColor: "background.sidebar",
        borderColor: "lightGray",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ mb: "30px", ml: "15px" }}>
        관리자 페이지
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.sidebar",
        }}
        aria-label="contacts"
      >
        <ListItem disablePadding>
          <Link
            to={"/manageClass"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              sx={{ ...listItemButtonStyles }}
              onClick={() => handleClick(1)}
            >
              <ListItemText
                style={{ color: selectedMenu === 1 && "#007AFF" }}
                primary="현재 학기 수업 조회"
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to={"/createGroup"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              sx={{ ...listItemButtonStyles }}
              onClick={() => handleClick(2)}
            >
              <ListItemText
                style={{ color: selectedMenu === 2 && "#007AFF" }}
                primary="스터디 그룹 생성"
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to={"/manageGroup"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              sx={{ ...listItemButtonStyles }}
              onClick={() => handleClick(3)}
            >
              <ListItemText
                style={{ color: selectedMenu === 3 && "#007AFF" }}
                primary="그룹 매칭 관리"
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to={"/studyGroup"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              sx={{ ...listItemButtonStyles }}
              onClick={() => handleClick(4)}
            >
              <ListItemText
                style={{ color: selectedMenu === 4 && "#007AFF" }}
                primary="그룹별 활동 조회"
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to={"/manageStudent"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              sx={{ ...listItemButtonStyles }}
              onClick={() => handleClick(5)}
            >
              <ListItemText
                style={{ color: selectedMenu === 5 && "#007AFF" }}
                primary="매칭된 학생 정보 조회"
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

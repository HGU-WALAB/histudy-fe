import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { border, Box } from "@mui/system";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CustomTable from "../../components/CustomTable";
import LongButton from "../../components/LongButton";

export default function Enroll() {
  const firstData = [
    ["오인혁", "21800446", "8156217@naver.com"],
    ["한시온", "21800446", "8156217@naver.com"],
    ["배주영", "21800446", "8156217@naver.com"],
    ["이인혁", "21800446", "8156217@naver.com"],
    ["김진수", "21800446", "8156217@naver.com"],
  ];

  const secondDate = [
    ["Open-source Software Laboratories", "0000000", "홍참길"],
    ["Open-source Software Laboratories", "0000000", "홍참길"],
    ["Open-source Software Laboratories", "0000000", "홍참길"],
    ["Open-source Software Laboratories", "0000000", "홍참길"],
  ];

  const thirdData = [
    ["1", "알고리듬분석", "ECE40008", "용환기"],
    ["2", "RF회로 설계", "ECE30011", "김영식"],
  ];
  const [page, setPage] = useState(1);

  const [friendInput, setFriendInput] = useState("");
  const handleChange = (event) => {
    setFriendInput(event.target.value);
  };

  const handleClick = (event) => {
    const ID = event.target.id;
    console.log(ID);
    if (ID === "다음") setPage((prev) => prev + 1);
    else if (ID === "이전") setPage((prev) => prev - 1);
    else if (ID === "제출") alert("제출되었습니다.");
  };

  return (
    <Box sx={{ display: "flex", p: "50px", justifyContent: "center" }}>
      <Box
        sx={{
          //   border: 1,
          width: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {[1, 2, 3].map((pageNavNum, index) => (
            <>
              <Box
                key={index}
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                  width: "35px",
                  height: "35px",
                  borderRadius: "8px",
                  paddingTop: "3px",
                  border: 2,
                  borderColor: "primary.main",
                  backgroundColor:
                    pageNavNum <= page ? "primary.main" : "white",
                  color: pageNavNum <= page ? "white" : "primary.main",
                }}
              >
                {pageNavNum}
              </Box>
              {pageNavNum !== 3 && (
                <Box
                  sx={{
                    width: "65px",
                    height: "4px",
                    backgroundColor: "lightGray",
                  }}
                ></Box>
              )}
            </>
          ))}
        </Box>
        <Box sx={{ color: "gray", display: "flex", mt: "10px", mr: "10px" }}>
          <Typography variant="body2">함께할 친구 등록</Typography>
          <Typography variant="body2" sx={{ mx: 2 }}>
            희망 과목 선택
          </Typography>
          <Typography variant="body2">우선 순위 설정</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "750px", mx: "50px" }}>
        <Typography variant="h4" sx={{ textAlign: "center", height: "50px" }}>
          Histudy 신청하기
        </Typography>

        {page === 1 && (
          <>
            <Typography sx={{ textAlign: "center", height: "50px" }}>
              스터디를 함께하고 싶은 친구를 등록하세요!
            </Typography>

            <TextField
              id="search"
              type="search"
              label="Search"
              value={friendInput}
              onChange={handleChange}
              sx={{ width: "100%", borderRadius: "30px", mb: 4 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="친구 이름 검색"
            />
            <CustomTable
              data={firstData}
              accentColumnNum={-1}
              longWidthColumnNum={-1}
              type="first"
            />
            <Typography
              sx={{ color: "primary.main", textAlign: "center", mt: 4 }}
            >
              서로 함께 하고 싶은 친구로 신청해야 매칭됩니다!
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <LongButton
                name="다음"
                onClick={handleClick}
                bgColor="primary.main"
                fontColor="white"
              />
            </Box>
          </>
        )}

        {page === 2 && (
          <>
            <Typography sx={{ textAlign: "center", height: "50px" }}>
              스터디를 하고 싶은 희망 과목들을 담아주세요!
            </Typography>

            <TextField
              id="search"
              type="search"
              label="Search"
              value={friendInput}
              onChange={handleChange}
              sx={{ width: "100%", borderRadius: "30px", mb: 4 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="과목명 검색"
            />
            <CustomTable
              data={secondDate}
              accentColumnNum={-1}
              longWidthColumnNum={1}
              type="second"
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                }}
              >
                <LongButton
                  name="이전"
                  onClick={handleClick}
                  bgColor="primary.border"
                  fontColor="primary.main"
                />
                <LongButton
                  name="다음"
                  onClick={handleClick}
                  bgColor="primary.main"
                  fontColor="white"
                />
              </Box>
            </Box>
          </>
        )}
        {page === 3 && (
          <>
            <Typography sx={{ textAlign: "center", height: "50px" }}>
              스터디 희망 과목의 우선 순위를 정해주세요!
            </Typography>

            <CustomTable
              data={thirdData}
              accentColumnNum={1}
              longWidthColumnNum={2}
              type="third"
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                }}
              >
                <LongButton
                  name="이전"
                  onClick={handleClick}
                  bgColor="primary.border"
                  fontColor="primary.main"
                />
                <LongButton
                  name="제출"
                  onClick={handleClick}
                  bgColor="primary.main"
                  fontColor="white"
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
      <Box
        sx={{
          p: "30px",
          border: 2,
          borderRadius: "20px",
          width: "280px",
          mt: "100px",
          borderColor: "lightGray",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ mb: "40px", textAlign: "center" }}>
          신청 내역
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          함께하고 싶은 친구
        </Typography>
        <Typography variant="body1" sx={{ color: "primary.main", mb: 1 }}>
          {firstData[0][0]}, {firstData[0][1]}
        </Typography>
        <Typography variant="body1" sx={{ my: 1 }}>
          스터디 희망 과목
        </Typography>
        <Typography variant="body1" sx={{ color: "primary.main", mb: 1 }}>
          {thirdData[0][1]} {thirdData[0][3]}교수님
        </Typography>
      </Box>
    </Box>
  );
}

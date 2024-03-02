import { styled } from "@mui/material";

import { Box } from "@mui/system";
import { useState } from "react";
import { getAllTeamsForRank } from "../../apis/rank";

import { motion } from "framer-motion";

import NoDataLottie from "../../components/common/NoDataLottie";
import { StyledColumnAlignLayout } from "../../components/common/StyledLayout";
import Title from "../../components/common/Title";
import { useQuery } from "react-query";

import FullImage from "../../components/Rank/FullImage";

import ViewToggleButton from "../../components/Rank/ViewToggleButton";
import { DataGrid } from "@mui/x-data-grid";
import RankListView from "../../components/Rank/RankListView";
import RankGridView from "../../components/Rank/RankGridView";

const StyledScrollBox = styled(Box)({
  maxWidth: "1245px",
  width: "100%",
  overflow: "scroll",
});

export default function Rank() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      members: ["임혜원", "박소연", "이채연", "최동빈", "윤유원"],
      reports: 18,
      totalMinutes: 3656,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group01-report_20231202_201356.jpg",
    },
    {
      id: 30,
      members: ["이성민", "이온유", "곽도현", "조귀호", "장영진"],
      reports: 15,
      totalMinutes: 3230,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group30-report_20231125_140523.jpg",
    },
    {
      id: 27,
      members: [
        "송영은",
        "정성호",
        "이준형",
        "사우 지아 유인",
        "박시은",
        "이호영",
      ],
      reports: 11,
      totalMinutes: 2552,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group27-report_20231215_091508.jpg",
    },
    {
      id: 4,
      members: ["박원진", "박종혁", "안서영"],
      reports: 10,
      totalMinutes: 2300,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group04-report_20231206_023226.jpg",
    },
    {
      id: 10,
      members: ["안정현", "연혜은", "김민영"],
      reports: 11,
      totalMinutes: 2060,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group10-report_20231215_043928.jpg",
    },
    {
      id: 23,
      members: ["강병우", "공호중", "신하민"],
      reports: 10,
      totalMinutes: 1915,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group23-report_20231215_042759.jpg",
    },
    {
      id: 38,
      members: ["김예지", "장하준", "박승종", "곽철호"],
      reports: 12,
      totalMinutes: 1895,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group38-report_20231120_234048.jpg",
    },
    {
      id: 20,
      members: ["류정현", "오예은", "서경미", "정성구"],
      reports: 12,
      totalMinutes: 1783,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group20-report_20231127_230618.jpg",
    },
    {
      id: 19,
      members: ["박민준", "박지훈", "송산"],
      reports: 12,
      totalMinutes: 1354,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group19-report_20231212_205321.jpg",
    },
    {
      id: 22,
      members: ["박한민", "김가현", "이예은", "천국인"],
      reports: 10,
      totalMinutes: 1183,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group22-report_20231213_223020.jpg",
    },
    {
      id: 34,
      members: ["심성환", "김태민", "김민섭"],
      reports: 11,
      totalMinutes: 1169,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group34-report_20231207_210001.jpg",
    },
    {
      id: 5,
      members: ["김시찬", "백형준", "안하경", "유건민"],
      reports: 11,
      totalMinutes: 1120,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group05-report_20231213_210156.jpg",
    },
    {
      id: 18,
      members: ["신문수", "권세한", "송민영", "박조이"],
      reports: 10,
      totalMinutes: 1089,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group18-report_20231204_190711.jpg",
    },
    {
      id: 2,
      members: ["김도현", "양현우", "임성빈", "이수인"],
      reports: 11,
      totalMinutes: 990,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group02-report_20231204_005653.jpg",
    },
    {
      id: 12,
      members: ["김희라", "방석민", "유소은", "정현준"],
      reports: 6,
      totalMinutes: 780,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group12-report_20231201_150253.jpg",
    },
    {
      id: 3,
      members: ["정승희", "김성은", "김동규", "이성주", "김솔미"],
      reports: 11,
      totalMinutes: 773,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group03-report_20231214_203616.jpg",
    },
    {
      id: 37,
      members: ["김찬영", "김광일", "박민찬", "김민혁", "최예라"],
      reports: 10,
      totalMinutes: 749,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group37-report_20231128_220533.jpg",
    },
    {
      id: 29,
      members: ["이윤서", "조다빈", "김민경", "박세은", "강정희"],
      reports: 11,
      totalMinutes: 740,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group29-report_20231216_234753.jpg",
    },
    {
      id: 21,
      members: ["김나임", "최지호", "배하빈"],
      reports: 10,
      totalMinutes: 725,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group21-report_20231205_120520.jpg",
    },
    {
      id: 26,
      members: ["이건희", "이효인", "정희서"],
      reports: 11,
      totalMinutes: 694,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group26-report_20231213_154810.jpg",
    },
    {
      id: 24,
      members: ["이진주", "김가륜", "전예빈"],
      reports: 6,
      totalMinutes: 659,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group24-report_20231210_221631.jpg",
    },
    {
      id: 39,
      members: ["김채린", "박은혜", "이수민", "오세훈"],
      reports: 9,
      totalMinutes: 620,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group39-report_20231213_225500.jpg",
    },
    {
      id: 33,
      members: ["박호함", "황유민", "김승환", "김성현"],
      reports: 10,
      totalMinutes: 605,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group33-report_20231127_135754.jpg",
    },
    {
      id: 15,
      members: ["한나린", "김유진", "고영서", "양병훈"],
      reports: 7,
      totalMinutes: 600,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group15-report_20231204_215543.jpg",
    },
    {
      id: 25,
      members: ["안수민", "신혜민", "유은서", "이지원"],
      reports: 9,
      totalMinutes: 570,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group25-report_20231212_201027.jpg",
    },
    {
      id: 11,
      members: ["천그루", "송승언", "최혁진", "김예성", "김범진"],
      reports: 7,
      totalMinutes: 420,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group11-report_20231212_230558.jpg",
    },
    {
      id: 31,
      members: ["김연희", "임주환", "김예준", "신지수", "한상화"],
      reports: 7,
      totalMinutes: 418,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group31-report_20231108_204548.jpg",
    },
    {
      id: 9,
      members: ["김하람", "우병희", "김현승", "천주현"],
      reports: 2,
      totalMinutes: 240,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group09-report_20231029_143151.jpg",
    },
    {
      id: 32,
      members: ["김민혁", "박세영", "조동운"],
      reports: 1,
      totalMinutes: 185,
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/exalted-stage-387815.appspot.com/o/files%2F%EC%BB%B4%EA%B5%AC%EC%8A%A4%ED%84%B0%EB%94%94%201%ED%9A%8C%EC%B0%A8.jpg?alt=media&token=82d29c53-517e-40ea-9260-86b6fc7b01b4",
    },
    {
      id: 35,
      members: ["이준혁", "이준환", "임예진", "김예빈", "조준희"],
      reports: 3,
      totalMinutes: 185,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group35-report_20231109_200921.jpg",
    },
    {
      id: 6,
      members: ["강준혁", "임연규", "정수아", "김신후", "이선환"],
      reports: 3,
      totalMinutes: 180,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group06-report_20231106_225817.jpg",
    },
    {
      id: 28,
      members: ["함상훈", "서용원", "권은혁"],
      reports: 1,
      totalMinutes: 120,
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/exalted-stage-387815.appspot.com/o/files%2F1697099474013.jpg?alt=media&token=94407c6d-23e5-4ccc-9044-b7956c8c6150",
    },
    {
      id: 41,
      members: ["조성민", "서민재", "서민준"],
      reports: 2,
      totalMinutes: 120,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group41-report_20231113_201708.jpg",
    },
    {
      id: 42,
      members: ["한시온", "JC Nam남재창 교수님"],
      reports: 1,
      totalMinutes: 2,
      thumbnail:
        "https://histudy.lifove.net/reports/images/2023-2-group42-report_20231025_024902.jpg",
    },
    {
      id: 8,
      members: ["최윤오", "금예지", "손철민"],
      reports: 0,
      totalMinutes: 0,
    },
    {
      id: 36,
      members: ["오성진", "백승준", "김희송", "김부흥"],
      reports: 0,
      totalMinutes: 0,
    },
    {
      id: 7,
      members: ["임찬혁", "김현기"],
      reports: 0,
      totalMinutes: 0,
    },
    {
      id: 16,
      members: ["안명훈", "한종운", "정인경", "이찬영", "정상우"],
      reports: 0,
      totalMinutes: 0,
    },
    {
      id: 40,
      members: ["최준서", "김한욱"],
      reports: 0,
      totalMinutes: 0,
    },
    {
      id: 17,
      members: ["임청현", "김하진", "박서윤", "김성주"],
      reports: 0,
      totalMinutes: 0,
    },
    {
      id: 14,
      members: ["장세창", "최준혁", "김성빈", "배재호", "김대석"],
      reports: 0,
      totalMinutes: 0,
    },
    {
      id: 13,
      members: ["최지원", "전혜원", "윤성현"],
      reports: 0,
      totalMinutes: 0,
    },
  ]);
  const [itemsHover, setItemsHover] = useState([]);
  const [view, setView] = useState("list");

  const { isLoading } = useQuery(["AllTeamRanks"], getAllTeamsForRank, {
    casheTime: 10 * 60 * 1000,
    onSuccess: (data) => {
      // setTeams(data.teams);
      setItemsHover(new Array(data.teams.length).fill(false));
    },
    refetchOnWindowFocus: false,
  });

  const [fullImageUrl, setFullImageUrl] = useState(null);

  return (
    <>
      <FullImage fullImageUrl={fullImageUrl} />
      <StyledColumnAlignLayout
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Title text="스터디 그룹 랭킹" />

        {teams.length === 0 ? (
          <NoDataLottie />
        ) : (
          <StyledScrollBox>
            <ViewToggleButton view={view} setView={setView} />
            {view === "list" ? (
              <div style={{ height: 300, width: "100%" }}>
                <RankListView teams={teams} />
              </div>
            ) : (
              <RankGridView
                setFullImageUrl={setFullImageUrl}
                setItemsHover={setItemsHover}
                teams={teams}
                itemsHover={itemsHover}
              />
            )}
          </StyledScrollBox>
        )}

        {/* </Grid> */}
      </StyledColumnAlignLayout>
    </>
  );
}

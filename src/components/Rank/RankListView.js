import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "순위", width: 100 },
  { field: "groupNm", headerName: "그룹", width: 100 },
  {
    field: "reportNm",
    headerName: "제출한 레포트 수",
    type: "number",
    width: 300,
  },
  {
    field: "totalMins",
    headerName: "총 시간(분)",
    type: "number",
    width: 150,
  },
  {
    field: "members",
    headerName: "팀원",
    type: "text",
    width: 600,
  },
];

export default function RankListView({ teams }) {
  const convertTeams2List = (teams) => {
    return teams?.map((team, idx) => {
      return {
        id: idx + 1,
        groupNm: team.id,
        reportNm: team.reports,
        totalMins: team.totalMinutes,
        members: team.members.join(", "),
      };
    });
  };

  return (
    <DataGrid
      rows={convertTeams2List(teams)}
      columns={columns}
      density="compact"
    />
  );
}

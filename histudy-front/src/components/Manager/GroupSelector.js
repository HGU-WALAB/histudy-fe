import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRecoilValue } from "recoil";
import { groupAutoCompleteState } from "../../store/atom";

const groupData = [
  { label: "Group1" },
  { label: "Group2" },
  { label: "Group3" },
  { label: "Group4" },
  { label: "Group5" },
];

export default function GroupSelector({ setTeam }) {
  const groupAutoComplete = useRecoilValue(groupAutoCompleteState);
  console.log(groupAutoComplete);

  return (
    <Autocomplete
      onChange={(e, v) => {
        if (v) setTeam(v.label.split(" ")[1]);
      }}
      disablePortal
      id="combo-box-demo"
      options={groupAutoComplete}
      freeSolo
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

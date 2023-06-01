import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const groupData = [
  { label: "Group1" },
  { label: "Group2" },
  { label: "Group3" },
  { label: "Group4" },
  { label: "Group5" },
];
export default function GroupSelector() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={groupData}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="Group" />}
    />
  );
}

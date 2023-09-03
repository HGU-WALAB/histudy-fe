import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { getMyTeamUsers } from "../../apis/users";

export default function PostMember({ setValue, getValues }) {
  const [teamMember, setTeamMember] = useState([]);
  useEffect(() => {
    getMyTeamUsers().then((res) => {
      setTeamMember(res);
      console.log("Tmembers", res);
    });
  }, []);

  const handleCheckboxChange = (event) => {
    let { value, checked } = event.target;

    // value = value.slice(value.length - 8, value.length);

    if (checked) {
      setValue("participants", [...getValues("participants"), value]);
    } else {
      setValue(
        "participants",
        getValues("participants").filter((item) => item !== value)
      );
    }
  };

  return (
    <FormGroup>
      {teamMember?.map((teamMember, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox value={teamMember.sid} onChange={handleCheckboxChange} />
          }
          label={teamMember.name + ", " + teamMember.sid}
        />
      ))}
    </FormGroup>
  );
}

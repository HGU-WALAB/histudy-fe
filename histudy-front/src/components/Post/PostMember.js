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

    console.log(value);
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
            <Checkbox value={teamMember.name} onChange={handleCheckboxChange} />
          }
          label={teamMember.name + ", " + teamMember.sid}
        />
      ))}
      {/* <FormControlLabel
        control={
          <Checkbox value="장유진, 21900111" onChange={handleCheckboxChange} />
        }
        label="장유진, 21900111"
      />

      <FormControlLabel
        control={
          <Checkbox value="오인혁, 21800446" onChange={handleCheckboxChange} />
        }
        label="오인혁, 21800446"
      />
      <FormControlLabel
        control={
          <Checkbox value="한시온, 21800222" onChange={handleCheckboxChange} />
        }
        label="한시온, 21800222"
      /> */}
    </FormGroup>
  );
}

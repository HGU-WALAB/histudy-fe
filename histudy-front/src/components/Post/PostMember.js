import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { getMyTeamUsers } from "../../apis/users";
import { Controller } from "react-hook-form";

export default function PostMember({ control, setValue, getValues }) {
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
      {teamMember?.map((tm, index) => (
        <FormControlLabel
          key={tm.sid}
          control={
            <Controller
              name="participants"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  value={tm.sid}
                  checked={field.value.includes(tm.sid)}
                  onChange={handleCheckboxChange}
                />
              )}
            />
          }
          label={tm.name + ", " + tm.sid}
        />
      ))}
    </FormGroup>
  );
}

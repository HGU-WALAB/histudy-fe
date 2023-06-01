import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function PostMember({ setValue, getValues }) {
  const handleCheckboxChange = (event) => {
    let { value, checked } = event.target;
    value = value.slice(value.length - 8, value.length);
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
      <FormControlLabel
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
      />
    </FormGroup>
  );
}

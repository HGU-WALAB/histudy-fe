import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { teamCourses } from "../../apis/course";

export default function PostCourses({ setValue, getValues }) {
  useEffect(() => {
    console.log(teamCourses());
    // setTeamMemberCourses(teamCourses());
  }, []);

  const [teamMemberCourses, setTeamMemberCourses] = useState([]);

  const handleCheckboxChange = (event) => {
    let { value, checked } = event.target;
    // value = value.slice(value.length - 8, value.length);

    console.log(event.target.value);

    if (checked) {
      setValue("courses", [...getValues("courses"), value]);
    } else {
      setValue(
        "courses",
        getValues("courses").filter((item) => item !== value)
      );
    }
  };

  return (
    <FormGroup>
      {teamMemberCourses?.map((teamMemberCourse, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              value={teamMemberCourse.code}
              onChange={handleCheckboxChange}
            />
          }
          label={teamMemberCourse.name}
        />
      ))}
      <FormControlLabel
        control={<Checkbox value="1" onChange={handleCheckboxChange} />}
        label="알고리즘 분석"
      />
      <FormControlLabel
        control={<Checkbox value="OSS" onChange={handleCheckboxChange} />}
        label="OSS"
      />
      <FormControlLabel
        control={
          <Checkbox value="데이터 분석" onChange={handleCheckboxChange} />
        }
        label="데이터 분석"
      />
    </FormGroup>
  );
}

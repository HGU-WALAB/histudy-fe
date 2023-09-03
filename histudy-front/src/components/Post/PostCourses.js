import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { teamCourses } from "../../apis/course";

export default function PostCourses({ setValue, getValues }) {
  useEffect(() => {
    // teamCourses().then((res) => console.log(res));
    console.log(teamCourses().then((res) => console.log(res)));
    teamCourses().then((res) => setTeamMemberCourses(res.courses));
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
              value={teamMemberCourse.id}
              onChange={handleCheckboxChange}
            />
          }
          label={
            teamMemberCourse.name +
            ` ( ${teamMemberCourse.code} , ${teamMemberCourse.prof} )`
          }
        />
      ))}
    </FormGroup>
  );
}

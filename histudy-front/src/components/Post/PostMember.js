// import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

// export default function PostMember() {
//   return (
//     <>
//       <FormGroup onChange={(e) => console.log(e.target.value)}>
//         <FormControlLabel
//           control={<Checkbox />}
//           label="장유진, 21900111"
//           onChange={(e) => console.log(e.currentTarget.value)}
//         />
//         <FormControlLabel control={<Checkbox />} label="오인혁, 21800446" />
//         <FormControlLabel
//           control={<Checkbox onChange={(e) => console.log(e.target.value)} />}
//           label="한시온, 21800222"
//         />
//       </FormGroup>
//     </>
//   );
// }

import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function PostMember({ checkedValues, setCheckedValues }) {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    }
    console.log(checkedValues);
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

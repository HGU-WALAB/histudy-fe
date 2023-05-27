import { useState } from "react";
import { importCourses } from "../../apis/course";

//path variable을 써야한다는데..?

export default function ImportCSV() {
  const [selectedFile, setSelectedFile] = useState();

  const handleSubmit = (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    // selectedFile
    console.log(selectedFile);
    console.log(importCourses(formData));
  };

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <input type="file" onChange={handleChange}></input>
      <button onClick={handleSubmit}>제출</button>
    </>
  );
}

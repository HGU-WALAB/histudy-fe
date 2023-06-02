import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { importCourses } from "../../apis/course";

export default function RegisterClassButton() {
  const [selectedFile, setSelectedFile] = React.useState();

  const handleSubmit = async (e) => {
    // e.preventDefault();

    const formData = new FormData();

    // Array.from(selectedFile).forEach((el) => {
    // formData.append("file", selectedFile);
    // });

    // const response = await importCourses(formData);

    // // try {
    // //   const TOKEN = localStorage.getItem("accessToken");

    // //   const response = await axios.post(
    // //     `${process.env.REACT_APP_BACK_BASE_URL}/api/course`,
    // //     formData,
    // //     {
    // //       headers: {
    // //         "Content-Type": "multipart/form-data",
    // //         Authorization: `Bearer ${TOKEN}`,
    // //         withCredentials: true,
    // //       },
    // //       transfromRequest: [
    // //         function () {
    // //           return formData;
    // //         },
    // //       ],
    // //     }
    // //   );

    //   console.log(response);
    // } catch (error) {
    //   console.log("!!");
    //   console.log(error);
    // }

    formData.append("file", selectedFile);

    // console.log(selectedFile);
    console.log(importCourses(formData));
  };

  const handleChange = async (event) => {
    event.preventDefault();

    if (!window.confirm("해당 파일을 등록하시겠습니까??")) return;

    const formData = new FormData();

    formData.append("file", event.target.files[0]);

    console.log(importCourses(formData));
  };
  const handleClick = () => {
    fileRef.current.click();
  };

  const fileRef = React.useRef();

  return (
    <Stack direction="row" spacing={2}>
      <input
        type="file"
        ref={fileRef}
        hidden
        // style={{ display: "hidden" }}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        style={{
          color: "#007AFF",
          backgroundColor: "#E4F1FF",
          borderRadius: 7,
        }}
        onClick={handleClick}
      >
        수업 목록 불러오기
      </Button>
    </Stack>
  );
}

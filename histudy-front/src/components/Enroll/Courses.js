import { InputAdornment, TextField } from "@mui/material";
import CustomTable from "../CustomTable";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { autoCourses } from "../../apis/course";
import styled from "styled-components";
import { TextFieldWrapper } from "./TextFieldWrapper";

export default function Courses({ sideCourses, setSideCourses }) {
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  const [courseInput, setCourseInput] = useState("");

  const courseConverter = (allCourses) => {
    const result = [];

    const newArr = allCourses.filter((course) =>
      course.name.includes(courseInput)
    );
    newArr.map((elem) => {
      result.push([elem.name, elem.code, elem.prof, elem.id]);
    });

    return result;
  };

  useEffect(() => {
    setCourses(courseConverter(allCourses));
  }, [courseInput]);

  useEffect(() => {
    autoCourses().then((res) => {
      setAllCourses(res.courses);
    });
  }, []);
  const handleChange = (event) => {
    // if (event.target.id === "friend") setFriendInput(event.target.value);
    // else {
    // courseInput onChange
    setCourseInput(event.target.value);
    // }
  };

  return (
    <>
      <TextFieldWrapper
        id="study"
        type="search"
        value={courseInput}
        onChange={handleChange}
        sx={{ width: "100%", borderRadius: "30px", mb: 4 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="과목명 검색"
      />

      <CustomTable
        sidebarValues={sideCourses}
        addData={setSideCourses}
        data={courses}
        accentColumnNum={-1}
        longWidthColumnNum={1}
        type="second"
      />
    </>
  );
}

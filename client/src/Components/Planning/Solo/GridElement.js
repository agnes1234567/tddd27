import React, { useState, useEffect } from "react";
import CourseDropdownComponent from "../Shared/CourseDropdownComponent";
import {emptyCourse, fetchData, getBody} from '../Shared/FetchHelpers'

function GridElement({
  id,
  semester,
  selectedValue,
  setSelectedValue,
}) {
  const [courseList, setCourseList] = useState([]);

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const getOptions = async () => {
    const body = getBody(id, semester);
    const data = await fetchData(body);
    data.unshift(emptyCourse);
    setCourseList(data);
  }

  useEffect(() => {
      getOptions();
  }, [semester]);

  return (
    <CourseDropdownComponent
      setSelectedValue={setSelectedValue}
      selectedValue={selectedValue}
      handleChange={handleChange}
      options={courseList}
    />
  );
}

export default GridElement;

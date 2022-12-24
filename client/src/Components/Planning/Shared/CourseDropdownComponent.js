import React, { useEffect, useState } from "react";
import Select from "react-select";

function CourseDropdownComponent({
  setSelectedValue,
  selectedValue,
  handleChange,
  options,
}) {
  useEffect(() => {
    setSelectedValue(options[0])
  }, [options])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Select
            options={options}
            onChange={handleChange}
            value={selectedValue}
            getOptionLabel={(e) => e.course_name}
            getOptionValue={(e) => e.id}
            isSearchable={false}
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default CourseDropdownComponent;


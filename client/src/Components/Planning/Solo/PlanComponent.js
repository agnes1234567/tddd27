import React, { useState } from "react";
import GridElement from "./GridElement";
import PlanningGrid from "../Shared/PlanningGrid";
import SemesterOptComponent from "../Shared/SemesterOptComponent";
import PlanOutputComponent from "../Shared/PlanOutputComponent";

function PlanComponent() {
  const [semester, setSemester] = useState("HT");
  const [value, setValue] = useState();

  const [course0, setCourse0] = useState(null);
  const [course1, setCourse1] = useState(null);
  const [course2, setCourse2] = useState(null);
  const [course3, setCourse3] = useState(null);
  const [course4, setCourse4] = useState(null);
  const [course5, setCourse5] = useState(null);
  const [course6, setCourse6] = useState(null);
  const [course7, setCourse7] = useState(null);
  const [fullTermCourse, setFullTermCourse] = useState(null);


  const handleChange = (option) => {
    setValue(option.value);
    setSemester(option.value);
  };

  return (
    <div className="row">
      <div className="column">
        <PlanningGrid
          gridContent={[
            <GridElement
              id={0}
              selectedValue={course0}
              setSelectedValue={setCourse0}
              semester={semester}
            />,
            <GridElement
              id={1}
              selectedValue={course1}
              setSelectedValue={setCourse1}
              semester={semester}
            />,
            <GridElement
              id={2}
              selectedValue={course2}
              setSelectedValue={setCourse2}
              semester={semester}
            />,
            <GridElement
              id={3}
              selectedValue={course3}
              setSelectedValue={setCourse3}
              semester={semester}
            />,
            <GridElement
              id={4}
              selectedValue={course4}
              setSelectedValue={setCourse4}
              semester={semester}
            />,
            <GridElement
              id={5}
              selectedValue={course5}
              setSelectedValue={setCourse5}
              semester={semester}
            />,
            <GridElement
              id={6}
              selectedValue={course6}
              setSelectedValue={setCourse6}
              semester={semester}
            />,
            <GridElement
              id={7}
              selectedValue={course7}
              setSelectedValue={setCourse7}
              semester={semester}
            />,
            <GridElement
              id={8}
              selectedValue={fullTermCourse}
              setSelectedValue={setFullTermCourse}
              semester={semester}
            />,
            <SemesterOptComponent
              value={value}
              handleChange={handleChange}
              semester={semester}
            />,
          ]}
        />
      </div>
      <div className="column">
        <PlanOutputComponent
          full_term_course={fullTermCourse}
          course11={course0}
          course12={course1}
          course21={course2}
          course22={course3}
          course31={course4}
          course32={course5}
          course41={course6}
          course42={course7}
        />
      </div>
    </div>
  );
}

export default PlanComponent;

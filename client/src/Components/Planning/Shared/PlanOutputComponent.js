import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Item, Item1, Item3 } from "./GridItems";

function PlanOutputComponent({
  full_term_course,
  course11,
  course12,
  course21,
  course22,
  course31,
  course32,
  course41,
  course42,
}) {
  const headers = [<h3>Block</h3>, <h3>Period 1</h3>, <h3>Period 2</h3>];
  const [courseOutput, setCourseOutput] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [errorCourse, setErrorCourse] = useState(null)

  const alertSchedError = () => {
    alert(`Kursen ${errorCourse.course_name} ligger i samma block som ${full_term_course.course_name}. Byt en av kurserna!`);
    setErrorCourse(null)
  }

  const setOutputData = () => {
    var tempOutput = ["", "", "", "", "", "", "", ""];

    if (full_term_course && full_term_course.id !== 0) {
      switch (full_term_course.period1) {
        case 1:
          tempOutput[0] = full_term_course.course_name;
          break;
        case 2:
          tempOutput[2] = full_term_course.course_name;
          break;
        case 3:
          tempOutput[4] = full_term_course.course_name;
          break;
        case 4:
          tempOutput[6] = full_term_course.course_name;
          break;
        default:
          break;
      }
      switch (full_term_course.period2) {
        case 1:
          tempOutput[1] = full_term_course.course_name;
          break;
        case 2:
          tempOutput[3] = full_term_course.course_name;
          break;
        case 3:
          tempOutput[5] = full_term_course.course_name;
          break;
        case 4:
          tempOutput[7] = full_term_course.course_name;
          break;
        default:
          break;
      }
    }
    if (course11 && course11.id !== 0) {
      if (tempOutput[0] === "") {
        tempOutput[0] = course11.course_name;
      } else {
        setErrorCourse(course11)
      }
    }
    if (course12 && course12.id !== 0) {
      if (tempOutput[1] === "") {
        tempOutput[1] = course12.course_name;
      } else {
        setErrorCourse(course12)
      }
    }
    if (course21 && course21.id !== 0) {
      if (tempOutput[2] === "") {
        tempOutput[2] = course21.course_name;
      } else {
        setErrorCourse(course21)
      }
    }
    if (course22 && course22.id !== 0) {
      if (tempOutput[3] === "") {
        tempOutput[3] = course22.course_name;
      } else {
        setErrorCourse(course22)
      }
    }
    if (course31 && course31.id !== 0) {
      if (tempOutput[4] === "") {
        tempOutput[4] = course31.course_name;
      } else {
        setErrorCourse(course31)
      }
    }
    if (course32 && course32.id !== 0) {
      if (tempOutput[5] === "") {
        tempOutput[5] = course32.course_name;
      } else {
        setErrorCourse(course32)
      }
    }
    if (course41 && course41.id !== 0) {
      if (tempOutput[6] === "") {
        tempOutput[6] = course41.course_name;
      } else {
        setErrorCourse(course41)
      }
    }

    if (course42 && course42.id !== 0) {
      if (tempOutput[7] === "") {
        tempOutput[7] = course42.course_name;
      } else {
        setErrorCourse(course42)
      }
    }
    setCourseOutput(tempOutput);
  };
   
  useEffect(() => {
      if(errorCourse){
        alertSchedError()
      } 
  }, [errorCourse])


  useEffect(() => {
    setOutputData();
  }, [
    full_term_course,
    course11,
    course12,
    course21,
    course22,
    course31,
    course32,
    course41,
    course42,
  ]);

  return (
    <div className="plan_output">
      <h2>Resultat</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2}>
          <Item3>{headers[0]}</Item3>
        </Grid>
        <Grid item xs={5}>
          <Item3>{headers[1]}</Item3>
        </Grid>
        <Grid item xs={5}>
          <Item3>{headers[2]}</Item3>
        </Grid>
        <Grid item xs={2}>
          <Item3>
            <h4>1</h4>
          </Item3>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{courseOutput[0] ? courseOutput[0] : ""}</Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{courseOutput[1] ? courseOutput[1] : ""}</Item>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item3>
            <h4>2</h4>
          </Item3>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{courseOutput[2] ? courseOutput[2] : ""}</Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{courseOutput[3] ? courseOutput[3] : ""}</Item>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item3>
            <h4>3</h4>
          </Item3>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{courseOutput[4] ? courseOutput[4] : ""}</Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{courseOutput[5] ? courseOutput[5] : ""}</Item>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item3>
            <h4>4</h4>
          </Item3>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{courseOutput[6] ? courseOutput[6] : ""}</Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Item>{courseOutput[7] ? courseOutput[7] : ""}</Item>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlanOutputComponent;

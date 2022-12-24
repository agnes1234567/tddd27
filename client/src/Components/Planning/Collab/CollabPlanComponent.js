import React, { useContext, useState, useEffect } from "react";
import CollabGridElement from "./CollabGridElement";
import SessionContext from "../../../Contexts/SessionContext";
import PlanningGrid from "../Shared/PlanningGrid";
import Grid from "@mui/material/Grid";
import SocketCotext from "../../../Contexts/SocketProvider";
import SemesterOptComponent from "../Shared/SemesterOptComponent";
import LeaveSessionButton from "./LeaveSessionButton";
import PlanOutputComponent from "../Shared/PlanOutputComponent";
import { emptyCourse, fetchData, getBody } from "../Shared/FetchHelpers";

function CollabPlanComponent() {
  const { session, sessionId } = useContext(SessionContext);
  const { socket } = useContext(SocketCotext);
  const [update, setUpdate] = useState(false);
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

  const sendChange = (semester) => {
    console.log(sessionId + " sending " + semester + " on " + session);
    socket.emit("send_semester_update", { semester, session });
  };

  const handleChange = (option) => {
    setValue(option.value);
    setSemester(option.value);
    sendChange(option.value);
  };

  useEffect(() => {
    socket.on("receive_semester_update", (data) => {
      setSemester(data.semester);
      setUpdate(true);
    });
  }, [socket]);

  useEffect(() => {
    setUpdate(false);
  }, [update]);

  return (
    <div>
      <div>
        <LeaveSessionButton />
      </div>
      <div className="row">
        <div className="column">
          <PlanningGrid
            gridContent={[
              <CollabGridElement
                id={0}
                semester={semester}
                selectedValue={course0}
                setSelectedValue={setCourse0}
              />,
              <CollabGridElement
                id={1}
                semester={semester}
                selectedValue={course1}
                setSelectedValue={setCourse1}
              />,
              <CollabGridElement
                id={2}
                semester={semester}
                selectedValue={course2}
                setSelectedValue={setCourse2}
              />,
              <CollabGridElement
                id={3}
                semester={semester}
                selectedValue={course3}
                setSelectedValue={setCourse3}
              />,
              <CollabGridElement
                id={4}
                semester={semester}
                selectedValue={course4}
                setSelectedValue={setCourse4}
              />,
              <CollabGridElement
                id={5}
                semester={semester}
                selectedValue={course5}
                setSelectedValue={setCourse5}
              />,
              <CollabGridElement
                id={6}
                semester={semester}
                selectedValue={course6}
                setSelectedValue={setCourse6}
              />,
              <CollabGridElement
                id={7}
                semester={semester}
                selectedValue={course7}
                setSelectedValue={setCourse7}
              />,
              <CollabGridElement
                id={8}
                semester={semester}
                selectedValue={fullTermCourse}
                setSelectedValue={setFullTermCourse}
              />,
              <SemesterOptComponent
                value={value}
                semester={semester}
                handleChange={handleChange}
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
    </div>
  );
}

export default CollabPlanComponent;

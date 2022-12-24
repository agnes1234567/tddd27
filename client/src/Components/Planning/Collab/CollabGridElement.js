import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../../Contexts/AuthContext";
import SocketCotext from "../../../Contexts/SocketProvider";
import SessionContext from "../../../Contexts/SessionContext";
import CourseDropdownComponent from "../Shared/CourseDropdownComponent";
import { emptyCourse, fetchData, getBody } from "../Shared/FetchHelpers";

function CollabGridElement({ id, semester, setSelectedValue, selectedValue }) {
  const { session } = useContext(SessionContext);
  const { socket } = useContext(SocketCotext);
  const [update, setUpdate] = useState(false);

  const [courseList, setCourseList] = useState([]);

  const sendChange = ({ index, value }) => {
    console.log("Sending " + value + " on " + session);
    socket.emit("send_change", { index, value, session });
  };

  const handleChange = (value) => {
    setSelectedValue(value);
    sendChange({ index: id, value: value });
  };

  useEffect(() => {
    socket.on("receive_change", (data) => {
      if (data.index === id) {
        setSelectedValue(data.value);
        console.log("Recieved " + data.value + " on " + session);
        setUpdate(true);
      }
    });
  }, [socket]);

  const getOptions = async () => {
    const body = getBody(id, semester);
    const data = await fetchData(body);
    data.unshift(emptyCourse);
    setCourseList(data);
  };

  useEffect(() => {
    getOptions();
  }, [semester]);

  useEffect(() => {
    setUpdate(false);
  }, [update]);

  return (
    <CourseDropdownComponent
      setSelectedValue={setSelectedValue}
      selectedValue={selectedValue}
      options={courseList}
      handleChange={handleChange}
    />
  );
}

export default CollabGridElement;

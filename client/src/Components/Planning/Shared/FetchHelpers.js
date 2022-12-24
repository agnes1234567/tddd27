const reqBodyParams = [
  { period: "period1", module: 1 },
  { period: "period2", module: 1 },
  { period: "period1", module: 2 },
  { period: "period2", module: 2 },
  { period: "period1", module: 3 },
  { period: "period2", module: 3 },
  { period: "period1", module: 4 },
  { period: "period2", module: 4 },
];
export const fetchData = async (body) => {
  const data = await fetch(`/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const res = await data.json();
  return res;
};
export const getBody = (id, semester) => {
  if (id !== 8) {
    const period = reqBodyParams[id]["period"];
    const module = reqBodyParams[id]["module"];
    return { semester: semester, [period]: module };
  } else {
    return { semester: semester, full_term: true };
  }
};
export const emptyCourse = {
  id: 0,
  course_code: "",
  course_name: "Välj en kurs",
  hp: 0,
  level: "",
  spring: false,
  fall: false,
  period1: null,
  period2: null,
  url: "",
};

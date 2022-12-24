import React from 'react'

function CourseCard({
    id,
    course_code,
    course_name,
    hp,
    level,
    spring,
    fall,
    period1,
    period2,
    url
}) {
  return (
    <div>
        <li key={id}>{course_name}</li>
    </div>
  )
}

export default CourseCard
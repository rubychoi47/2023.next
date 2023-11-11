import React from "react";

const Course = async () => {
  const response = await fetch("http://localhost:9999/courses", {
    cache: "no-cache",
  });
  const courses = await response.json();

  return (
    <div>
      {courses.map((course) => (
        <div>
          <span>
            {course.code}_ {course.name}({course.courseId})
          </span>
          <span>{course.professorName}</span>
        </div>
      ))}
    </div>
  );
};

export default Course;
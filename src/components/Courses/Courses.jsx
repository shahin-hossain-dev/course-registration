import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleAddToCart }) => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div className="md:w-5/6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleAddToCart={handleAddToCart}
          ></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;

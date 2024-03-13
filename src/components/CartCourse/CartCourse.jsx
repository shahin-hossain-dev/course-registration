import React from "react";

const CartCourse = ({ course, idx }) => {
  // console.log(course);
  return (
    <p>
      {idx + 1} {course.name}
    </p>
  );
};

export default CartCourse;

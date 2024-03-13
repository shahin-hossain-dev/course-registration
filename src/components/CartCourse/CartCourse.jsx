import React from "react";

const CartCourse = ({ course }) => {
  console.log(course);
  return (
    <ol>
      <li>{course.name}</li>
    </ol>
  );
};

export default CartCourse;

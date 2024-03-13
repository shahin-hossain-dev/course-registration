import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";

function App() {
  const [courses, setCourse] = useState([]);

  const handleAddToCart = (selectCourse) => {
    const newCourse = [...courses, selectCourse];
    setCourse(newCourse);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center py-10">
        Course Registration
      </h1>
      <div className="md:flex gap-5 items-start w-11/12 mx-auto">
        <Courses handleAddToCart={handleAddToCart} />

        <Cart courses={courses} />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
function App() {
  const [courses, setCourse] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
  const handleAddToCart = (selectCourse) => {
    const isExist = courses.find((course) => course.id === selectCourse.id);
    const newCredit = credit + selectCourse.credit;
    const newPrice = price + selectCourse.price;

    if (!isExist) {
      if (newCredit <= 20) {
        const newCourse = [...courses, selectCourse];
        setCourse(newCourse);
        setCredit(newCredit);
        setPrice(newPrice);
        toast.success("Course Added Successfully");
      } else {
        toast.error("Do not allow over 20 credit");
      }
    } else {
      toast.error("Course already exist in Cart");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center py-10 border-b-2 mb-8 text-sky-500">
        Creative Programming Courses
      </h1>

      <div className="md:flex gap-5 items-start w-11/12 mx-auto">
        <Courses handleAddToCart={handleAddToCart} />

        <Cart courses={courses} credit={credit} price={price} />
      </div>
      <div>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

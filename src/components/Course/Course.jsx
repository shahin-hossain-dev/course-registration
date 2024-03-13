import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi2";

const Course = ({ course, handleAddToCart }) => {
  //   console.log(course);
  const { id, name, description, price, credit, photo } = course;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Course Photo" />
      </figure>
      <div className="mx-[6%] space-y-3 my-4">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <p>
            <FiDollarSign className="inline text-2xl" /> Price: {price}
          </p>
          <p>
            <HiOutlineBookOpen className="inline text-2xl" /> Credit: {credit}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(course)}
            className="btn bg-sky-500 hover:bg-sky-400 text-white w-full"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
};

export default Course;

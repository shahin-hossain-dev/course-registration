import CartCourse from "../CartCourse/CartCourse";

const Cart = ({ courses, credit, price }) => {
  return (
    <div className="md:w-3/12 shadow-xl p-4 rounded-lg">
      <h2 className="font-bold text-xl  border-b-2 p-2 text-center  text-sky-500">
        Credit Hour Remaining {20 - credit} hr
      </h2>
      <h3 className="text-2xl font-semibold text-center">Course Name</h3>
      <ol className="space-y-3 p-3">
        {courses.map((course, idx) => (
          <CartCourse key={course.id} course={course} idx={idx} />
        ))}
      </ol>
      <p className=" text-xl  border-y-2 p-2">Total Credit Hour : {credit}</p>
      <p className=" text-xl  p-2">Total Price : ${price}</p>
    </div>
  );
};

export default Cart;

import CartCourse from "../CartCourse/CartCourse";

const Cart = ({ courses }) => {
  return (
    <div className="md:w-1/6">
      <h2 className="font-bold text-xl p-2 text-center bg-slate-200 rounded-lg text-sky-500">
        Credit Hour Remaining 7 hr
      </h2>
      <h3 className="text-2xl font-bold">Course Name</h3>
      {courses.map((course) => (
        <CartCourse key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Cart;

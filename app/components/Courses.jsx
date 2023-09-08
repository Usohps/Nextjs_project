// import Link from "next/link";
const Courses = ({ courses }) => {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div key={course.id} className=" border-b-2 px-6 shadow-sm focus:shadow-none p-3 rounded">
          <p>{course.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;

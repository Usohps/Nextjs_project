// import Link from "next/link";
const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <p>{course.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;

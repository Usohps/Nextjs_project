"use client";
import Courses from "./components/Courses";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";
import QRCode from "qrcode";
function HomePage() {
  const [courses, setCourses] = useState([]);
  const [src, setSrc] = useState("");
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses", {
        next: {
          revalidate: 60,
        },
      });
      const data = await response.json();
      setCourses(data);
      QRCode.toDataURL("https:/https://github.com/Usohps").then(setSrc);
    };
    fetchCourses();
  }, []);

  return (
    <div className="space-y-10">
      <h1 className="text-center text-3xl py-8 ">
        Welcome to Cozy Nextjs Application
      </h1>
      <div>
        <CourseSearch getSearchResults={(result) => setCourses(result)} />
      </div>
      <Suspense fallback={<div><LoadingPage /></div>}>
        <Courses courses={courses} />
      </Suspense>
      <div className="items-end flex justify-center pb-10">
        <span>
          <img src={src} className=" w-[150px]" />
        </span>
      </div>
    </div>
  );
}

export default HomePage;

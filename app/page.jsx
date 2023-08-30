"use client";
import Courses from "./components/Courses";
import { useEffect, useState } from "react";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";
function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchCourses= async()=>{
      const response = await fetch("/api/courses",{
        next:{
          revalidate:60
        }
      })
      // console.log(response)
      const data = await response.json()
      // console.log(data)
      setCourses(data)
      setLoading(false)
    }
   fetchCourses()
  },[])

  if(loading){
    <LoadingPage/>
  }
  return (
    <div>
      <h1>Welcome to Cozy Nextjs Application</h1>
      <CourseSearch getSearchResults={(result)=>(setCourses(result))} />
      <Courses courses={courses}/>
    </div>
  );
}

export default HomePage;

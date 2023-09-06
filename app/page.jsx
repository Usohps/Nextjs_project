"use client";
import Courses from "./components/Courses";
import { useEffect, useState } from "react";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";
import QRCode  from "qrcode";
function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [src,setSrc] = useState("")
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
      QRCode.toDataURL('https:/https://github.com/Usohps').then(setSrc)
    }
   fetchCourses()
  },[])

  if(loading){
    <LoadingPage/>
  }
  return (
    <div className="space-y-10">
      <h1 className="text-center text-3xl py-8 ">Welcome to Cozy Nextjs Application</h1>
      <div>
      <CourseSearch getSearchResults={(result)=>(setCourses(result))} />
      </div>
      <Courses courses={courses}/>
      <div className="items-end flex justify-center pr-6">
        <span><img src={src} className=" w-[50px]"/></span>
      </div>
    </div>
  );
}

export default HomePage;

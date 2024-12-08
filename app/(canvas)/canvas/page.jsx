"use client"
import CourseCard from "@components/CourseCard";
import { useSession } from "next-auth/react";




const Canvas = () => {
  const {data: session} = useSession()
  return (
        <>
        
          <h2>{session?.type == "student"? "Ongoing" : "Your"} Courses</h2>
          <img src="/assets/coursesDemo.png" alt="" />
          <h2>Other Courses</h2>
          <img src="/assets/coursesDemo.png" alt="" />
          
        </>
  )
}

export default Canvas
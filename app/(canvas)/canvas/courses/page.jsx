"use client"

import { useSession } from "next-auth/react"

const Courses = () => {
  const {data: session} = useSession()
  return (
    <>
      <a href="/canvas/create/course">Create Courses</a>
      <br />
      {/* <img src="/assets/coursesDemo.png" alt="" /> */}
      <h2>{session?.type == "student"? "Ongoing" : "Your"} Courses</h2>
          <img src="/assets/coursesDemo.png" alt="" />
          <h2>Other Courses</h2>
          <img src="/assets/coursesDemo.png" alt="" />
    </>
  )
}

export default Courses
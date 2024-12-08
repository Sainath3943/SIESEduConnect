"use client"

import CourseCard from "@components/CourseCard"
import { signOut, useSession } from "next-auth/react"

const Profile = () => {
  const {data: session} = useSession()
  const {name, email, image} = session?.user
  return (
    <>
      <h2>Profile</h2>
      <img src={image} style={{height: "5rem", borderRadius: "100%", border: "2px solid white"}} alt="" />
      <br />
      <br />
      <p>{name}</p>
      <p>{email}</p>
      <button onClick={() => signOut()} >SignOut</button>
      <div></div>
      <h3>Your Courses</h3>
      <CourseCard/>

      
      
    </>
  )
}

export default Profile
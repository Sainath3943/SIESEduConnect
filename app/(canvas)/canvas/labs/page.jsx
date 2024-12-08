"use client"

import { useSession } from "next-auth/react"

const Labs = () => {
  const {data: session} = useSession()

    return (
      <>
        <a href="/canvas/create/lab">Create Labs</a>
        <br />
        {/* <img src="/assets/coursesDemo.png" alt="" /> */}
        <h2>{session?.type == "student"? "Ongoing" : "Your"} Labs</h2>
            <img src="/assets/coursesDemo.png" alt="" />
            <h2>Other Labs</h2>
            <img src="/assets/coursesDemo.png" alt="" />
      </>
    )
  }
  
  export default Labs
"use client"
import { useSession } from "next-auth/react";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

import "@styles/canvas/canvasnav.css"
import Icons from "@models/Icons";

// import from "./assets/canvasNav/courses.png"

const CanvasNav = () => {
  const {data : session} = useSession();
  const pfp = session?.user?.image
  console.log(session)

  useLayoutEffect(() => {
    if(session.type == null) redirect("/register")
  }, [session])

  console.log(session)
  
  return (
  <>
    <div className="canvas_nav">
      
      {
        session?.type == "student"?
          <>
            <div className="canvas_nav_links">
              <a href="/canvas/courses" className="canvas_nav_link">
                {Icons.coursesIcon("2.5rem","2.5rem")} 
                <p className="nav_link_name">Courses</p>
              </a> 
              <a href="" className="canvas_nav_link">
                {Icons.labIcon("2.5rem","2.5rem")}                
                <p className="nav_link_name">Labs</p>
              </a> 
              <a href="/canvas" className="canvas_nav_link">
                {Icons.searchIcon("2.5rem","2.5rem")}                              
                <p className="nav_link_name">Labs</p>
              </a> 
              <a href="" className="canvas_nav_link">
                {Icons.notificationIcon("2.5rem","2.5rem")}
                <p className="nav_link_name">Notification</p>
              </a>

            </div>
          </>
        :(session?.type == "teacher"?
          <>
            <div className="canvas_nav_links">
              <a href="/canvas/courses" className="canvas_nav_link">
                {Icons.coursesIcon("2.5rem","2.5rem")}               
                <p className="nav_link_name">Courses</p>
              </a> 
              <a href="/canvas/labs" className="canvas_nav_link">
                {Icons.labIcon("2.5rem","2.5rem")}                              
                <p className="nav_link_name">Labs</p>
              </a> 
              <a href="/canvas" className="canvas_nav_link">
                {Icons.searchIcon("2.5rem","2.5rem")}                              
                <p className="nav_link_name">Labs</p>
              </a> 
            </div>  
          </>
          :
          <>
          </>
        )
      }
      <div className="canvas_help">
        <a href="/canvas/profile" className="canvas_nav_link">
          <div className="canvas_nav_profile">
            <img src={(pfp)?pfp:"/assets/canvasNav/teams.png"} alt="" />
          </div>
          <p className="nav_link_name" >Account</p>
        </a> 
        <a href="/help" className="canvas_nav_link">
          <p>Help</p>
        </a> 
      </div>
    </div>
  </>
  )
}

export default CanvasNav
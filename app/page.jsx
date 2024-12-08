

import "@styles/globals.css"
import "@styles/home.css"


import CourseCard from "@components/CourseCard";
import Nav from "@components/Nav";



export default function Main() {
  return (
    <>
    <Nav/>
    <div className="home_wrapper">
      <div className="home_content">
        <p className="home_welcome">
          <span className="home_welcome_msg1">
            Welcome to SIES EduConnect
          </span>
          <br/>
          <span className="home_welcome_msg2">
            All in one tool for students
          </span>
        </p>
        <img src="/assets/coursesDemo.png" alt="" />
      </div>
    </div>
    </>
  );
}

"use client"

import "@styles/register.css"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"


const RegForm = ({User, setUser, handleSubmit}) => {
    const {data: session} = useSession()

    const [UserType, setUserType] = useState("")
    const [Gender, setGender] = useState("")

     // useEffect(async () => {
    //     let res = []
    //     if(userType == "student"){
    //         res = await User.findStudent({PRN : user.prn})
    //     }
    //     if(res.length > 0){
    //         console.log("UserFound")
    //     }

    // }, [user.prn])

    useEffect(() => {
        var t = document.getElementById("teacher")
        var s = document.getElementById("student")
        if(UserType == "teacher") t.checked = true 
        else if(UserType == "student") s.checked = true
        setUser({...User,type: UserType})
        // onChange={(e) => setUser({...User,type: e.target.value})}
    }, [UserType])
    
    useEffect(() => {
        var m = document.getElementById("M")
        var f = document.getElementById("F")
        var o = document.getElementById("O")
        if(Gender == "M") m.checked = true 
        else if(Gender == "F") f.checked = true
        else if(Gender == "O") o.checked = true
        setUser({...User,gender: Gender})
    }, [Gender])


    const focused = {"border" :"2px solid #9b59b6" , color: "black"}

  return (
    <>
        <div className="register_container">
            <div className="ragister_header">
                <div className="title" >Hey {session?.userType?.fname}👋</div> 
                <div className="register_back" onClick={() => signOut()}>
                    <i aria-hidden className="fa-solid fa-arrow-left"></i>
                </div>
            </div>
            <div className="get_registered">Get Registered</div>

            <form action="" onSubmit={() => handleSubmit()}> 
                
                <div className="select_user">
                    <span>UserType Role: </span>
                    <div className="u_options">
                        <div className="user_options" onClick={() => setUserType("teacher")} style={UserType=="teacher"?focused:{}}>
                            <input name="userRole" type="radio" id="teacher" value={UserType}  required/>
                            Teacher
                        </div>
                        <div className="user_options" onClick={() => setUserType("student")} style={UserType=="student"?focused:{}}>
                            <input name="userRole" type="radio" value={UserType} id="student" required/>
                            Student
                        </div>
                    </div>
                </div>
                {
                    UserType=="student"?
                    <>
                        <div className="user-details"> 
                            <div className="input-box"> 
                                <span className="details">PRN</span> 
                                <input onChange={(e) => setUser({...User,prn: e.target.value})} type="text" placeholder="Enter your PRN" maxLength={8} required/> 
                            </div> 
                            <div className="input-box"> 
                                <span className="details">Department</span> 
                                <input onChange={(e) => setUser({...User,dept: e.target.value})} type="text" placeholder="Enter your Department" required/> 
                            </div> 
                            <div className="input-box"> 
                                <span className="details">Phone Number</span> 
                                <input onChange={(e) => setUser({...User,phone: e.target.value})} type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{10}" required/> 
                            </div> 
                        </div>
                    </>
                    :(UserType == "teacher")?
                    <>
                         <div className="user-details">  
                            <div className="input-box"> 
                                <span className="details">Department</span> 
                                <input onChange={(e) => setUser({...User,dept: e.target.value})} type="text" placeholder="Enter your Department" required/> 
                            </div> 
                            <div className="input-box"> 
                                <span className="details">Phone Number</span> 
                                <input onChange={(e) => setUser({...User,phone: e.target.value})} type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{10}" required/> 
                            </div>     
                        </div>
                         
                    </>
                    :
                    <>

                    </>
                }
                <div className="input-box">
                    <span>Gender </span>
                    <div className="u_options">
                        <div className="user_options gender" onClick={() => setGender("M")} style={Gender=="M"?focused:{} }>
                        <input type="radio" id="M" name="Gender" value={Gender} required/>
                            <i aria-hidden className="fa-solid fa-mars"></i>
                            Male
                        </div>
                        <div className="user_options gender" onClick={() => setGender("F")} style={Gender=="F"?focused:{}}>
                            <input type="radio" id="F" name="Gender"  value={Gender} required/>
                            <i aria-hidden className="fa-solid fa-venus"></i>
                            Female
                        </div>
                        <div className="user_options gender" onClick={() => setGender("O")} style={Gender=="O"?focused:{} }>
                            <input aria-hidden type="radio" id="O" name="Gender" value={Gender} required/>
                            Prefer Not to say
                        </div>
                    </div>
                </div>  
                <div className="button"> 
                    <input type="submit" />
                    Register 
                </div>
            </form> 
        </div>
    </>
  )
}

export default RegForm
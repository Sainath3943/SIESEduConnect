"use client"
import RegForm from "@components/RegForm"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import {  useEffect, useState } from "react"

const page = () => {
    const {data: session} = useSession()
    console.log(session)
    useEffect(() => {
        if(!session){
            redirect("/")
        }
    }, [session])
      
    
    const [User, setUser] = useState({
        UID: "",
        type: "",
        prn: "",
        dept: "",
        phone: "",
        gender: "",
    })
    

    const handleSubmit = async () => {
        var temp = {}
        if(User.type == "student"){
            temp = {
                UID: session?.uid,
                type: User.type,
                prn: User.prn,
                dept: User.dept,
                phone: User.phone,
                gender: User.gender
            }
        }
        else if(User.type == "teacher"){
            temp = {
                UID: session?.uid,
                type: User.type,
                dept: User.dept,
                phone: User.phone,
                gender: User.gender
            }
        }
        try {
            const res = await fetch("/api/auth/register",
            {
                method: 'POST',
                body: JSON.stringify(temp)
            })
            let t = res.clone()
            console.log(res)
            if(res.ok){
                redirect("/canvas")
            }
        } catch (error) {
            console.log(error)
        }
    
      }
  return (
    (session?
        <>
            <RegForm
                User={User}
                setUser={setUser}
                handleSubmit={handleSubmit}
            />
        </>
        :
        <>
        </>
    )
  )
}

export default page
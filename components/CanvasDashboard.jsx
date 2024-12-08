"use client"

import "@styles/canvas/canvasdashboard.css"
import { useSession } from "next-auth/react"

const CanvasDashboard = () => {

  const NavName = window.location.pathname.split("/").at(-1)
  const {data: session} = useSession()
  

  return (
    <>
      <div className="dashboard_wrapper">
        <div className="main_dashboard">
          {NavName.toUpperCase()}
          {/* {NavName.charAt(0).toUpperCase() + NavName.slice(1)}   */}
        </div>
        {/* {(session?.type).toUpperCase() }'S DASHBOARD */}
      </div>
    </>
  )
}

export default CanvasDashboard
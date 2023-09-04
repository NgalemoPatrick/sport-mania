import React from 'react'
import { Outlet } from 'react-router-dom'

const DAshLayout = () => {
  return (
    <>
    <div className="dash-container">
        <Outlet />
    </div>
    </>
  )
}

export default DAshLayout
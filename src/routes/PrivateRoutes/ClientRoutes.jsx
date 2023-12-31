import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ClientRoutes = ({ userRole }) => {
  return (
    <div>
      {userRole === true ? <Outlet /> : <Navigate to="/" />}
    </div>
  )
}

export default ClientRoutes

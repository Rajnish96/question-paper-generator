import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth =()=>{ 
    const user = {loggedIn: false}
    return user && user.loggedIn;
} 
export default function Protected() {
    // const auth = useAuth()
  return useAuth() ? <Outlet/> : <Navigate to="/login" />
  
}

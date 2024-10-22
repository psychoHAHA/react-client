import React, { useEffect } from "react"
import Header from "../header/Header"
import Container from "../container/Container"
import NavBar from "../nav-bar/NavBar"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  selectIsAuthenticated,
  selectUser,
} from "../../features/user/userSlice"
import Profile from "../profile/Profile"

const Layout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth")
    }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className="flex-2 order-2 sm:order-1 sm:p-4">
          <NavBar />
        </div>
        <div className="flex-1 order-3 sm:order-2 p-4">
          <Outlet />
        </div>
        <div className="flex-2 order-1 sm:order-3 sm:p-4">
          <div className="flex-row flex gap-5">{!user && <Profile />}</div>
        </div>
      </Container>
    </>
  )
}

export default Layout
